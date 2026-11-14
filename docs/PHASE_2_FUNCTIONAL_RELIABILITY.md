# NEBULA X 2.0 — PHASE 2: FUNCTIONAL RELIABILITY SPECIFICATION & IMPLEMENTATION REPORT

**Project:** NEBULA X — The Forgotten Space Archive  
**Challenge:** 2026 NASA Space Apps Challenge · "Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"  
**Repository:** https://github.com/gowtham-ks/nebula-x-2.0  
**Phase:** Phase 2 — Functional Reliability  
**Priority:** P1 — High  
**Status:** COMPLETED & VERIFIED  

---

## 1. EXECUTIVE SUMMARY

Phase 2 established bulletproof functional reliability across NEBULA X 2.0. Prior to Phase 2, interactions such as audio playback, quiz progression, artifact exploration, and multi-location pin rendering suffered from state volatility, resource leaks, or state coupling.

### Key Functional Upgrades Implemented:
1. **Audio Lifecycle Engine (`useSpaceAudio`):** Completely eliminated Web Audio API context memory leaks; introduced explicit audio state machine (`STOPPED`, `PLAYING`, `PAUSED`, `MUTED`), rate slider (0.8×–1.4×), replay capability, mute toggle, synchronized live subtitles, and automatic cleanup across scene changes, machine switches, and component unmounts.
2. **State Decoupling (Exploration vs Evidence Scanning):** Separated passive artifact exploration (State A) from active telemetry scanning (State B). Merely opening an equipment card records exploration (`nebula-explored-v1`) without awarding XP. Evidence scanning requires an explicit, interactive telemetry sensor sweep (+120 XP) persisted under `nebula-scanned-v1` with duplicate award prevention.
3. **Persisted Quiz Engine (`MissionControlModal`):** Implemented schema-validated local storage persistence under `nebula-quiz-progress-v1` (`completedCaseIds`, `answers`, `quizScore`, `earnedQuizXp`, `completedAt`). Includes corrupt data recovery, instant restoration of selected answers/diagnostics upon modal reopen, and a confirmation-guarded quiz reset option.
4. **Multi-Location Hardware Pins:** Eliminated single-coordinate grouping for distributed hardware. All individual, verified landing sites and vectors are mapped to distinct, clickable pins on 3D globes:
   - **Apollo Lunar Modules:** 6 verified landing sites (Apollo 11, 12, 14, 15, 16, 17).
   - **Apollo Lunar Roving Vehicles:** 3 verified parked sites (Apollo 15, 16, 17).
   - **ALSEP Geophysical Stations:** 5 verified lunar sites (Apollo 12, 14, 15, 16, 17).
   - **Robotic Surveyor Landers:** 5 successful touchdown sites (Surveyor 1, 3, 5, 6, 7).
   - **Spirit & Opportunity Rovers:** 2 distinct Martian landing sites (Gusev Crater & Meridiani Planum).
   - **Viking 1 & 2 Landers:** 2 distinct Martian landing sites (Chryse Planitia & Utopia Planitia).
   - **Phoenix & InSight Landers:** 2 distinct Martian landing sites (Vastitas Borealis & Elysium Planitia).
   - **Pioneer 10 & 11 Scouts:** 2 distinct interstellar escape vectors (Aldebaran & Aquila).
5. **Keyboard Navigation & Modal Controls:** Added a global `Escape` key hierarchy listener (closes active modal → closes story view → closes preview card → returns to planetary orbit), `:focus-visible` accessible outline styling, and accessible HTML fallback selectors for 3D planetary scenes.

---

## 2. DETAILED ROOT CAUSE ANALYSES & TECHNICAL SOLUTIONS

### 2.1 Audio Lifecycle & Speech Synthesis Management

#### Problem Statement
In previous builds, invoking audio narration instantiated a new `AudioContext` on every play trigger without explicitly closing previous contexts or disconnecting oscillator nodes. When switching machines or changing scenes, the browser's Web Speech API `speechSynthesis` instance often continued speaking in the background, desynchronized from the active UI. Browsers limit active `AudioContext` instances (typically 6 maximum), causing audio crashes after multiple machine visits.

#### Root Cause
- Absence of a centralized Web Audio context manager.
- No `useEffect` cleanup hook that invoked `speechSynthesis.cancel()` upon route or scene transitions.
- Absence of intermediate states (`PAUSED`, `MUTED`) in the speech hook.

#### Technical Solution
Implemented a managed audio hook in `src/main.jsx` with an explicit 4-state lifecycle:
```typescript
type AudioLifecycleState = 'STOPPED' | 'PLAYING' | 'PAUSED' | 'MUTED';
```

- **Resource Safety:** Uses a persistent single `audioCtxRef`. Disconnects and stops oscillators on demand with gentle linear volume ramps to avoid speaker popping artifacts.
- **Speech Synthesis Control:** Utterance rate (0.8× to 1.4×) and volume (0 when muted, 1 when active) are tracked. `speechSynthesis.pause()` and `speechSynthesis.resume()` are bound to UI controls.
- **Synchronized Captions:** Captures `onstart` and `onboundary` events to drive live subtitle text display directly beneath the audio controls.
- **Teardown Hooks:** Automatically triggers `stop()` when `machine.id` changes, when the user clicks "Return to Planetary View", or when unmounting.

---

### 2.2 Decoupling Exploration (State A) from Evidence Scanning (State B)

#### Problem Statement
Previously, clicking `EXPLORE MACHINE →` on a floating preview card immediately invoked `handleScan(machine.id)`, awarding full +120 XP and marking the artifact as scanned before the student had read the evidence or engaged with the telemetry.

#### Root Cause
The preview card's click handler coupled modal navigation with the XP reward dispatch function.

#### Technical Solution
Decoupled exploration and scanning into two discrete state machines:
1. **State A — Exploration (`handleExplore`):**
   - Triggered when the user inspects a preview card or opens the full story.
   - Appends the machine ID to `exploredIds` in `localStorage` under `nebula-explored-v1`.
   - Awards **0 XP**.
   - Displays status badge: `○ ARCHIVE EXPLORED (SCAN PENDING)`.
2. **State B — Evidence Scanning (`handleScan`):**
   - Hosted exclusively inside the `EVIDENCE SCANNER` tab.
   - Requires an explicit user interaction: clicking `SCAN ARTIFACT TELEMETRY (+120 XP)`.
   - Executes an interactive 1.2-second telemetry frequency sweep animation.
   - Upon completion, logs the machine ID to `nebula-scanned-v1` and awards **+120 XP**.
   - Protects against duplicate awards via `if (!scannedIds.includes(id))`.
   - Displays status badge: `● EVIDENCE SCANNED & LOGGED (+120 XP)`.

---

### 2.3 Persistence of Mission Control Quiz Progress

#### Problem Statement
In previous iterations, the three investigative flight cases in Mission Control maintained progress purely in transient React component state. Refreshing the browser or navigating between tabs reset all completed cases, erased selected answers, and risked duplicate XP grants.

#### Root Cause
Component-level `useState([])` without local storage synchronization or schema validation.

#### Technical Solution
Engineered a persistent storage layer under `nebula-quiz-progress-v1`:
```json
{
  "completedCaseIds": ["mer-b", "apollo-lm"],
  "answers": { "mer-b": 0, "apollo-lm": 0 },
  "quizScore": 2,
  "earnedQuizXp": 200,
  "completedAt": "2026-11-14T22:29:28.000Z"
}
```

- **Resilient Deserialization:** The `loadSavedProgress()` function validates all types (`Array.isArray`, `typeof === 'number'`) and falls back to a pristine default state if corrupted data is detected.
- **State Restoration:** Upon reopening Mission Control, past answers are preserved; correct answers display the green confirmation banner and citation, and the case selector tabs display checkmarks (`✓`).
- **Idempotent Rewards:** XP (+100 XP per case) is awarded only if `!completedCaseIds.includes(caseId)`.
- **Reset Capability:** Added a "RESET QUIZ PROGRESS" button with user confirmation dialog to allow replayability.

---

### 2.4 Multi-Location Hardware Pins & Cartesian Projection

#### Problem Statement
Machines with multiple physical touchdown sites (such as the 6 Apollo Lunar Modules or 5 ALSEP stations) previously collapsed onto a single latitude/longitude coordinate pair, obscuring the geographic distribution of NASA's hardware across the Moon and Mars.

#### Root Cause
The data model provided only one top-level `lat` and `lon` field per equipment group.

#### Technical Solution
1. **Data Model Architecture:** Added a comprehensive `locations` array to each equipment group in `src/machinesData.js` containing verified landing sites, exact coordinates, touchdown dates, and site descriptions from NSSDCA records.
2. **Mathematical 3D Cartesian Conversion (`src/coords.js`):**
   ```javascript
   export function latLonToVector3(lat, lon, radius = 1) {
     const phi = (90 - lat) * (Math.PI / 180);
     const theta = (lon + 180) * (Math.PI / 180);
     const x = -(radius * Math.sin(phi) * Math.cos(theta));
     const z = radius * Math.sin(phi) * Math.sin(theta);
     const y = radius * Math.cos(phi);
     return [x, y, z];
   }
   ```
3. **Globe Scene Pin Rendering (`LocationPin`):**
   - The Moon globe renders **19 distinct verified physical sites** (6 Apollo LMs, 3 LRVs, 5 ALSEPs, 5 Surveyors).
   - The Mars globe renders **8 distinct landing sites** (Sojourner, 2 Spirit/Opportunity rovers, 2 Viking landers, Phoenix, InSight, Ingenuity).
   - Deep space renders **5 distinct craft trajectories** (Ceres orbit for Dawn, Eros asteroid for NEAR Shoemaker, Aldebaran escape vector for Pioneer 10, Aquila escape vector for Pioneer 11, heliocentric Earth-trailing drift for Kepler).
4. **Site Selector Strip:** When a user inspects an equipment group with multiple sites, interactive site pills (`[Apollo 11] [Apollo 12] [Apollo 14] [Apollo 15] [Apollo 16] [Apollo 17]`) allow jumping to any specific coordinate pair to view site-specific telemetry.

---

### 2.5 Keyboard Accessibility & Global Event Handlers

#### Problem Statement
Modal dialogs could only be closed by clicking the small "X" icon or backdrop. Users relying on keyboard navigation were trapped inside modals and 3D viewports.

#### Root Cause
Lack of window-level key listeners and omission of `:focus-visible` styles.

#### Technical Solution
1. **Global Escape Listener:** Added a prioritized `keydown` listener in `App`:
   - Closes active modal (`showQuiz`, `showLegacy`, `showCompare`, `showInspector`, `showSources`).
   - If no modal is active, closes `activeStoryMachine`.
   - If no story is active, closes `previewMachine`.
2. **Focus Visible Outlines:** Added global styling:
   ```css
   button:focus-visible,
   a:focus-visible,
   select:focus-visible,
   input:focus-visible,
   textarea:focus-visible {
     outline: 2px solid #38BDF8 !important;
     outline-offset: 2px !important;
     box-shadow: 0 0 12px rgba(56, 189, 248, 0.6) !important;
   }
   ```
3. **HTML Fallback Controls:** Added accessible, keyboard-traversable equipment chips below the 3D globe scenes (`role="navigation" aria-label="Equipment Selector"`), enabling non-mouse users to explore every machine.

---

## 3. VERIFICATION SUMMARY

| Functional Domain | Pre-Phase 2 Status | Post-Phase 2 Status | Test Verification |
| :--- | :--- | :--- | :--- |
| **Audio Lifecycle** | Context leaks, background phantom speech | 4-state lifecycle, automatic teardown, safe context reuse | `tests/phase2_3.test.js` (Unit 5) |
| **Exploration vs Scan** | Coupled (auto-awarded XP on open) | Decoupled (State A = 0 XP; State B = +120 XP once) | `tests/phase2_3.test.js` (Unit 2) |
| **Quiz Persistence** | Reset on refresh, volatile state | Persisted under `nebula-quiz-progress-v1`, corruption recovery | `tests/phase2_3.test.js` (Unit 3) |
| **Multi-Location Pins** | Single-pin collapse per group | 19 Moon pins, 8 Mars pins, 5 Deep Space craft/vectors | `tests/phase2_3.test.js` (Unit 1) |
| **Keyboard & A11y** | Mouse-only, trap on modal | Escape key hierarchy, `:focus-visible`, HTML fallbacks | DevTools Interactive Test |

*All automated tests executed with 100% pass rate under Node.js v26.13.0 built-in test runner.*
