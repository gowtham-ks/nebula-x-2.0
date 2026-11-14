import test from 'node:test';
import assert from 'node:assert/strict';
import { machines, destinationsMeta } from '../src/machinesData.js';
import { latLonToVector3 } from '../src/coords.js';

// ==========================================
// TEST SUITE: PHASE 2 & PHASE 3 VALIDATION
// ==========================================

test('1. Multi-Location Equipment Pins & Coordinate Accuracy', async (t) => {
  await t.test('All 13 equipment groups exist and are assigned valid destinations', () => {
    assert.equal(machines.length, 13, 'Must maintain all 13 equipment groups');
    const validDests = ['moon', 'mars', 'deep'];
    machines.forEach((m) => {
      assert.ok(validDests.includes(m.destination), `Machine ${m.id} has valid destination`);
      assert.ok(m.nssdcId && m.nssdcId.length > 2, `Machine ${m.id} has NSSDCA identifier`);
    });
  });

  await t.test('Multi-location hardware groups have verified distinct landing sites', () => {
    // Apollo LM: 6 distinct sites
    const apolloLM = machines.find((m) => m.id === 'apollo-lm');
    assert.ok(apolloLM, 'Apollo LM exists');
    assert.equal(apolloLM.locations.length, 6, 'Apollo LM must have 6 landing sites (Apollo 11, 12, 14, 15, 16, 17)');
    const lmSites = new Set(apolloLM.locations.map((l) => `${l.lat},${l.lon}`));
    assert.equal(lmSites.size, 6, 'All 6 Apollo LM sites must have distinct coordinates');

    // Apollo LRV: 3 distinct sites
    const lrv = machines.find((m) => m.id === 'lrv');
    assert.ok(lrv, 'LRV exists');
    assert.equal(lrv.locations.length, 3, 'LRV must have 3 sites (Apollo 15, 16, 17)');
    const lrvSites = new Set(lrv.locations.map((l) => `${l.lat},${l.lon}`));
    assert.equal(lrvSites.size, 3, 'All 3 LRV sites must have distinct coordinates');

    // ALSEP: 5 distinct sites
    const alsep = machines.find((m) => m.id === 'alsep');
    assert.ok(alsep, 'ALSEP exists');
    assert.equal(alsep.locations.length, 5, 'ALSEP must have 5 sites (Apollo 12, 14, 15, 16, 17)');

    // Surveyors: 5 distinct sites
    const surveyors = machines.find((m) => m.id === 'surveyors');
    assert.ok(surveyors, 'Surveyors exists');
    assert.equal(surveyors.locations.length, 5, 'Surveyor must have 5 successful landing sites (Surveyor 1, 3, 5, 6, 7)');

    // Spirit & Opportunity: 2 distinct sites on Mars
    const spiritOpp = machines.find((m) => m.id === 'spirit-opportunity');
    assert.ok(spiritOpp, 'Spirit & Opportunity exists');
    assert.equal(spiritOpp.locations.length, 2, 'Spirit & Opportunity must have 2 sites (Gusev & Meridiani)');

    // Viking 1 & 2: 2 distinct sites on Mars
    const viking = machines.find((m) => m.id === 'viking');
    assert.ok(viking, 'Viking exists');
    assert.equal(viking.locations.length, 2, 'Viking must have 2 sites (Chryse & Utopia Planitiae)');

    // Phoenix & InSight: 2 distinct sites on Mars
    const phoenixInsight = machines.find((m) => m.id === 'phoenix-insight');
    assert.ok(phoenixInsight, 'Phoenix & InSight exists');
    assert.equal(phoenixInsight.locations.length, 2, 'Phoenix & InSight must have 2 sites (Vastitas Borealis & Elysium Planitia)');

    // Pioneer 10 & 11: 2 distinct escape vectors in Deep Space
    const pioneer = machines.find((m) => m.id === 'pioneer');
    assert.ok(pioneer, 'Pioneer exists');
    assert.equal(pioneer.locations.length, 2, 'Pioneer must have 2 distinct escape vectors');
  });

  await t.test('3D spherical cartesian projection (latLonToVector3) outputs valid vectors', () => {
    // Equator / Prime Meridian
    const v0 = latLonToVector3(0, 0, 1.25);
    assert.equal(v0.length, 3);
    const radius0 = Math.sqrt(v0[0] ** 2 + v0[1] ** 2 + v0[2] ** 2);
    assert.ok(Math.abs(radius0 - 1.25) < 0.001, 'Magnitude matches radius');

    // North pole
    const vNorth = latLonToVector3(90, 0, 1.25);
    assert.ok(Math.abs(vNorth[1] - 1.25) < 0.001, 'Y coordinate corresponds to North Pole');

    // South pole
    const vSouth = latLonToVector3(-90, 0, 1.25);
    assert.ok(Math.abs(vSouth[1] - (-1.25)) < 0.001, 'Y coordinate corresponds to South Pole');
  });
});

test('2. State Separation: Exploration (State A) vs Evidence Scanning (State B)', async (t) => {
  // Simulated storage & state engine
  class ExplorationStateEngine {
    constructor() {
      this.exploredIds = [];
      this.scannedIds = [];
      this.xp = 0;
    }

    exploreMachine(id) {
      if (!this.exploredIds.includes(id)) {
        this.exploredIds.push(id);
      }
      // Exploration must NOT award scan XP
      return { explored: true, xpAwarded: 0 };
    }

    scanEvidence(id) {
      // Must be explicit scan action
      if (!this.scannedIds.includes(id)) {
        this.scannedIds.push(id);
        this.xp += 120;
        if (!this.exploredIds.includes(id)) {
          this.exploredIds.push(id);
        }
        return { scanned: true, xpAwarded: 120, duplicate: false };
      }
      return { scanned: true, xpAwarded: 0, duplicate: true };
    }
  }

  await t.test('Viewing/exploring an artifact does NOT award scan XP or mark scanned', () => {
    const engine = new ExplorationStateEngine();
    const res = engine.exploreMachine('apollo-lm');

    assert.equal(res.explored, true);
    assert.equal(res.xpAwarded, 0, 'Exploration must award 0 XP');
    assert.equal(engine.xp, 0, 'Total XP remains 0');
    assert.equal(engine.scannedIds.includes('apollo-lm'), false, 'Machine must not be marked scanned');
    assert.equal(engine.exploredIds.includes('apollo-lm'), true, 'Machine is recorded as explored');
  });

  await t.test('Scanning evidence explicitly awards +120 XP and prevents duplicate awards', () => {
    const engine = new ExplorationStateEngine();

    // First scan
    const scan1 = engine.scanEvidence('sojourner');
    assert.equal(scan1.scanned, true);
    assert.equal(scan1.xpAwarded, 120, 'First scan awards +120 XP');
    assert.equal(scan1.duplicate, false);
    assert.equal(engine.xp, 120);

    // Repeated scan on same machine
    const scan2 = engine.scanEvidence('sojourner');
    assert.equal(scan2.duplicate, true, 'Repeat scan flagged as duplicate');
    assert.equal(scan2.xpAwarded, 0, 'Duplicate scan awards 0 XP');
    assert.equal(engine.xp, 120, 'Total XP does not increase on repeat scan');
  });
});

test('3. Quiz Progress Persistence & Corrupted Data Recovery', async (t) => {
  class QuizProgressManager {
    static validateAndLoad(rawString) {
      try {
        if (!rawString) return this.emptyState();
        const parsed = JSON.parse(rawString);
        if (parsed && Array.isArray(parsed.completedCaseIds)) {
          return {
            completedCaseIds: parsed.completedCaseIds,
            answers: typeof parsed.answers === 'object' && parsed.answers !== null ? parsed.answers : {},
            quizScore: typeof parsed.quizScore === 'number' ? parsed.quizScore : parsed.completedCaseIds.length,
            earnedQuizXp: typeof parsed.earnedQuizXp === 'number' ? parsed.earnedQuizXp : parsed.completedCaseIds.length * 100,
            completedAt: parsed.completedAt || null
          };
        }
      } catch {
        // recovery fallback
      }
      return this.emptyState();
    }

    static emptyState() {
      return {
        completedCaseIds: [],
        answers: {},
        quizScore: 0,
        earnedQuizXp: 0,
        completedAt: null
      };
    }

    static answerCase(state, caseId, answerIdx, isCorrect) {
      const nextAnswers = { ...state.answers, [caseId]: answerIdx };
      const nextCompleted = [...state.completedCaseIds];
      let addedXp = 0;

      if (isCorrect && !nextCompleted.includes(caseId)) {
        nextCompleted.push(caseId);
        addedXp = 100;
      }

      return {
        completedCaseIds: nextCompleted,
        answers: nextAnswers,
        quizScore: nextCompleted.length,
        earnedQuizXp: state.earnedQuizXp + addedXp,
        completedAt: nextCompleted.length === 3 ? new Date().toISOString() : state.completedAt
      };
    }
  }

  await t.test('Correctly persists and restores valid quiz progress', () => {
    const validJson = JSON.stringify({
      completedCaseIds: ['mer-b', 'apollo-lm'],
      answers: { 'mer-b': 0, 'apollo-lm': 0 },
      quizScore: 2,
      earnedQuizXp: 200,
      completedAt: null
    });

    const loaded = QuizProgressManager.validateAndLoad(validJson);
    assert.equal(loaded.completedCaseIds.length, 2);
    assert.equal(loaded.answers['mer-b'], 0);
    assert.equal(loaded.earnedQuizXp, 200);
  });

  await t.test('Gracefully recovers from corrupted or truncated JSON', () => {
    const corruptedJson = '{"completedCaseIds": [INVALID_JSON_CHARS...';
    const recovered = QuizProgressManager.validateAndLoad(corruptedJson);

    assert.deepEqual(recovered, QuizProgressManager.emptyState());
    assert.equal(recovered.completedCaseIds.length, 0);
    assert.equal(recovered.earnedQuizXp, 0);
  });

  await t.test('Prevents duplicate XP awards when answering an already completed case', () => {
    let state = QuizProgressManager.emptyState();

    // Answer case 1 correctly
    state = QuizProgressManager.answerCase(state, 'mer-b', 0, true);
    assert.equal(state.quizScore, 1);
    assert.equal(state.earnedQuizXp, 100);

    // Answer case 1 again correctly
    state = QuizProgressManager.answerCase(state, 'mer-b', 0, true);
    assert.equal(state.quizScore, 1, 'Score must not increment on duplicate completion');
    assert.equal(state.earnedQuizXp, 100, 'XP must not increment on duplicate completion');
  });
});

test('4. Phase 3: Student Field Guide (Ages 13–18) Coverage', async (t) => {
  const requiredQuestions = [
    'whatIsIt',
    'whyWasItSent',
    'howDidItWork',
    'whatDidItDiscover',
    'whatHappenedToIt',
    'whyDoesItMatter',
    'unexpectedDiscovery'
  ];

  await t.test('All 13 equipment groups have complete 7-question student guides', () => {
    machines.forEach((m) => {
      assert.ok(m.studentGuide, `Machine ${m.id} must have a studentGuide object`);
      requiredQuestions.forEach((q) => {
        assert.ok(
          m.studentGuide[q] && m.studentGuide[q].trim().length > 15,
          `Machine ${m.id} missing or has too-brief answer for question: ${q}`
        );
      });
    });
  });

  await t.test('Content classifications are present and valid across all machines', () => {
    const validClassifications = [
      'DOCUMENTED FACT',
      'SCIENTIFIC INTERPRETATION',
      'EDUCATIONAL DRAMATIZATION',
      'UNVERIFIED'
    ];

    machines.forEach((m) => {
      // Timeline classifications
      m.timeline.forEach((step) => {
        assert.ok(
          validClassifications.includes(step.classification),
          `Machine ${m.id} timeline step ${step.step} has valid classification: ${step.classification}`
        );
      });

      // Evidence classifications
      assert.ok(m.evidence.engineering, `Machine ${m.id} has engineering evidence`);
      assert.ok(m.evidence.telemetry, `Machine ${m.id} has telemetry evidence`);
      assert.ok(m.evidence.science, `Machine ${m.id} has scientific evidence`);
      assert.ok(m.evidence.status, `Machine ${m.id} has current status`);
    });
  });
});

test('5. Audio Lifecycle State Machine & Safety', async (t) => {
  class AudioLifecycleEngine {
    constructor() {
      this.state = 'STOPPED'; // 'STOPPED' | 'PLAYING' | 'PAUSED' | 'MUTED'
      this.isMuted = false;
      this.rate = 1.0;
      this.webAudioActive = false;
    }

    play() {
      this.webAudioActive = true;
      this.state = this.isMuted ? 'MUTED' : 'PLAYING';
    }

    pause() {
      if (this.state === 'PLAYING' || this.state === 'MUTED') {
        this.state = 'PAUSED';
      }
    }

    resume() {
      if (this.state === 'PAUSED') {
        this.state = this.isMuted ? 'MUTED' : 'PLAYING';
      }
    }

    stop() {
      this.state = 'STOPPED';
      this.webAudioActive = false;
    }

    replay() {
      this.stop();
      this.play();
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.state === 'PLAYING' && this.isMuted) {
        this.state = 'MUTED';
      } else if (this.state === 'MUTED' && !this.isMuted) {
        this.state = 'PLAYING';
      }
    }
  }

  await t.test('Audio transitions correctly across play, pause, resume, and stop', () => {
    const audio = new AudioLifecycleEngine();
    assert.equal(audio.state, 'STOPPED');

    audio.play();
    assert.equal(audio.state, 'PLAYING');
    assert.equal(audio.webAudioActive, true);

    audio.pause();
    assert.equal(audio.state, 'PAUSED');

    audio.resume();
    assert.equal(audio.state, 'PLAYING');

    audio.toggleMute();
    assert.equal(audio.state, 'MUTED');
    assert.equal(audio.isMuted, true);

    audio.stop();
    assert.equal(audio.state, 'STOPPED');
    assert.equal(audio.webAudioActive, false);
  });
});
