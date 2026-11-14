import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  CircleUserRound,
  Compass,
  Database,
  Download,
  ExternalLink,
  Headphones,
  Info,
  LockKeyhole,
  Menu,
  Pause,
  Play,
  Printer,
  Radio,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Volume2,
  X,
  Zap,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import './styles.css';
import { destinationsMeta, machines } from './machinesData.js';
import {
  createSunTexture,
  createEarthTexture,
  createMoonTexture,
  createMarsTexture,
  createCeresTexture,
  createErosTexture
} from './textures.js';
import { renderCertificateToCanvas } from './certificateRenderer.js';

// Convert Latitude and Longitude to Cartesian 3D coordinates on a sphere of radius R
export function latLonToVector3(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}

// ==========================================
// 3D SOLAR SYSTEM COMPONENTS
// ==========================================

function Sun() {
  const texture = useMemo(() => createSunTexture(), []);
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      {/* Corona radiant glow */}
      <mesh scale={1.22}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#ffaa22" transparent opacity={0.16} side={THREE.BackSide} />
      </mesh>
      {/* Central sunlight */}
      <pointLight position={[0, 0, 0]} intensity={22} distance={60} color="#fff6e0" />
    </group>
  );
}

function OrbitRing({ radius, color = 'rgba(56, 189, 248, 0.25)' }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  return <Line points={points} color={color} transparent opacity={0.25} lineWidth={1} />;
}

// 3D Map Pointer in Solar System View
function SolarPointer({ meta, active, hovered, onHover, onClick, position }) {
  const pulseRef = useRef();

  useFrame(({ clock }) => {
    if (pulseRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.18;
      pulseRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(meta.id);
      }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        onClick(meta.id);
      }}
    >
      <mesh>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh ref={pulseRef} scale={hovered || active ? 2.4 : 1.6}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={meta.color} transparent opacity={hovered || active ? 0.6 : 0.28} />
      </mesh>
      {(hovered || active) && (
        <Html distanceFactor={14} position={[0, 0.45, 0]}>
          <div className="space-pointer-tooltip" style={{ borderColor: meta.color }}>
            <b>{meta.label}</b>
            <span style={{ color: meta.color }}>{meta.count} EQUIPMENT GROUPS</span>
          </div>
        </Html>
      )}
    </group>
  );
}

function EarthAndMoon({ hoveredDest, onHoverDest, onSelectDest }) {
  const earthTexture = useMemo(() => createEarthTexture(), []);
  const moonTexture = useMemo(() => createMoonTexture(), []);
  const earthGroupRef = useRef();
  const earthMeshRef = useRef();
  const moonGroupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (earthGroupRef.current) {
      earthGroupRef.current.position.x = Math.cos(t * 0.08) * 6.5;
      earthGroupRef.current.position.z = Math.sin(t * 0.08) * 6.5;
    }
    if (earthMeshRef.current) {
      earthMeshRef.current.rotation.y += 0.008;
    }
    if (moonGroupRef.current) {
      moonGroupRef.current.position.x = Math.cos(t * 0.45) * 1.35;
      moonGroupRef.current.position.z = Math.sin(t * 0.45) * 1.35;
    }
  });

  return (
    <>
      <OrbitRing radius={6.5} color="#38BDF8" />
      <group ref={earthGroupRef} position={[6.5, 0, 0]}>
        <mesh ref={earthMeshRef}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial map={earthTexture} roughness={0.7} />
        </mesh>
        <mesh scale={1.05}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} side={THREE.BackSide} />
        </mesh>

        <group ref={moonGroupRef} position={[1.35, 0.1, 0]}>
          <mesh>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshStandardMaterial map={moonTexture} roughness={0.9} />
          </mesh>
          <SolarPointer
            meta={destinationsMeta.moon}
            active={hoveredDest === 'moon'}
            hovered={hoveredDest === 'moon'}
            onHover={onHoverDest}
            onClick={onSelectDest}
            position={[0, 0.35, 0]}
          />
        </group>
      </group>
    </>
  );
}

function MarsPlanet({ hoveredDest, onHoverDest, onSelectDest }) {
  const marsTexture = useMemo(() => createMarsTexture(), []);
  const marsGroupRef = useRef();
  const marsMeshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (marsGroupRef.current) {
      marsGroupRef.current.position.x = Math.cos(t * 0.05 + 1.2) * 10.5;
      marsGroupRef.current.position.z = Math.sin(t * 0.05 + 1.2) * 10.5;
    }
    if (marsMeshRef.current) {
      marsMeshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <>
      <OrbitRing radius={10.5} color="#FB7185" />
      <group ref={marsGroupRef} position={[10.5, 0.2, 0]}>
        <mesh ref={marsMeshRef}>
          <sphereGeometry args={[0.48, 32, 32]} />
          <meshStandardMaterial map={marsTexture} roughness={0.85} />
        </mesh>
        <SolarPointer
          meta={destinationsMeta.mars}
          active={hoveredDest === 'mars'}
          hovered={hoveredDest === 'mars'}
          onHover={onHoverDest}
          onClick={onSelectDest}
          position={[0, 0.65, 0]}
        />
      </group>
    </>
  );
}

function AsteroidBeltAndDeepSpace({ hoveredDest, onHoverDest, onSelectDest }) {
  const ceresTexture = useMemo(() => createCeresTexture(), []);
  const beltGroupRef = useRef();

  const asteroidData = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 240; i++) {
      const angle = (i / 240) * Math.PI * 2 + Math.random() * 0.05;
      const r = 13.5 + (Math.random() - 0.5) * 2.2;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = (Math.random() - 0.5) * 0.6;
      const scale = Math.random() * 0.06 + 0.02;
      arr.push({ x, y, z, scale });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (beltGroupRef.current) {
      beltGroupRef.current.rotation.y = clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <>
      <OrbitRing radius={14.5} color="#A78BFA" />
      <group ref={beltGroupRef}>
        {asteroidData.map((ast, idx) => (
          <mesh key={idx} position={[ast.x, ast.y, ast.z]} scale={ast.scale}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#64748b" roughness={0.9} />
          </mesh>
        ))}

        <group position={[14.2, 0.2, 0]}>
          <mesh>
            <sphereGeometry args={[0.26, 24, 24]} />
            <meshStandardMaterial map={ceresTexture} roughness={0.92} />
          </mesh>
          <SolarPointer
            meta={destinationsMeta.deep}
            active={hoveredDest === 'deep'}
            hovered={hoveredDest === 'deep'}
            onHover={onHoverDest}
            onClick={onSelectDest}
            position={[0, 0.5, 0]}
          />
        </group>
      </group>
    </>
  );
}

function SolarSystemScene({ hoveredDest, onHoverDest, onSelectDest }) {
  return (
    <>
      <color attach="background" args={['#05070F']} />
      <ambientLight intensity={0.18} />
      <Stars radius={100} depth={50} count={3500} factor={3} saturation={0.2} fade speed={0.4} />

      <Sun />
      <EarthAndMoon hoveredDest={hoveredDest} onHoverDest={onHoverDest} onSelectDest={onSelectDest} />
      <MarsPlanet hoveredDest={hoveredDest} onHoverDest={onHoverDest} onSelectDest={onSelectDest} />
      <AsteroidBeltAndDeepSpace hoveredDest={hoveredDest} onHoverDest={onHoverDest} onSelectDest={onSelectDest} />
    </>
  );
}

// ==========================================
// DEDICATED PLANETARY CLOSE-UP 3D SCENES
// ==========================================

function MachinePin({ machine, active, hovered, onHover, onClick, radius = 1.25 }) {
  const pos = useMemo(() => {
    return latLonToVector3(machine.lat, machine.lon, radius * 1.04);
  }, [machine.lat, machine.lon, radius]);

  const pinColor =
    machine.destination === 'moon'
      ? '#38BDF8'
      : machine.destination === 'mars'
      ? '#FB7185'
      : '#A78BFA';

  const pulseRef = useRef();

  useFrame(({ clock }) => {
    if (pulseRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 4) * 0.22;
      pulseRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group
      position={pos}
      onClick={(e) => {
        e.stopPropagation();
        onClick(machine);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(machine.id);
      }}
      onPointerOut={() => onHover(null)}
    >
      <mesh>
        <sphereGeometry args={[0.042, 16, 16]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
      <mesh ref={pulseRef} scale={hovered || active ? 2.2 : 1.3}>
        <sphereGeometry args={[0.062, 16, 16]} />
        <meshBasicMaterial color={pinColor} transparent opacity={hovered || active ? 0.75 : 0.4} />
      </mesh>
      {(hovered || active) && (
        <Html distanceFactor={5} position={[0, 0.14, 0]}>
          <div className="planet-machine-pointer-tooltip" style={{ borderColor: pinColor }}>
            <span style={{ color: pinColor }}>●</span>
            <b>{machine.name}</b>
            <span>{machine.tag}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

function MoonGlobeScene({ onSelectMachine, hoveredMachine, onHoverMachine, previewMachine }) {
  const moonTexture = useMemo(() => createMoonTexture(), []);
  const moonRef = useRef();

  useFrame((_, delta) => {
    if (moonRef.current) moonRef.current.rotation.y += delta * 0.025;
  });

  const moonMachines = useMemo(() => machines.filter((m) => m.destination === 'moon'), []);

  return (
    <>
      <color attach="background" args={['#05070F']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 3, 5]} intensity={2.8} color="#FFFFFF" />
      <directionalLight position={[-6, -2, -4]} intensity={0.2} color="#38BDF8" />
      <Stars radius={80} depth={40} count={3000} factor={2.5} fade speed={0.3} />

      <group position={[0, 0, 0]}>
        <mesh ref={moonRef}>
          <sphereGeometry args={[1.25, 64, 64]} />
          <meshStandardMaterial map={moonTexture} roughness={0.92} />
        </mesh>
        {moonMachines.map((m) => (
          <MachinePin
            key={m.id}
            machine={m}
            active={previewMachine?.id === m.id}
            hovered={hoveredMachine === m.id}
            onHover={onHoverMachine}
            onClick={onSelectMachine}
            radius={1.25}
          />
        ))}
      </group>
    </>
  );
}

function MarsGlobeScene({ onSelectMachine, hoveredMachine, onHoverMachine, previewMachine }) {
  const marsTexture = useMemo(() => createMarsTexture(), []);
  const marsRef = useRef();

  useFrame((_, delta) => {
    if (marsRef.current) marsRef.current.rotation.y += delta * 0.025;
  });

  const marsMachines = useMemo(() => machines.filter((m) => m.destination === 'mars'), []);

  return (
    <>
      <color attach="background" args={['#05070F']} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 4, 5]} intensity={2.9} color="#FFF8F0" />
      <directionalLight position={[-6, -2, -4]} intensity={0.2} color="#FB7185" />
      <Stars radius={80} depth={40} count={3000} factor={2.5} fade speed={0.3} />

      <group position={[0, 0, 0]}>
        <mesh ref={marsRef}>
          <sphereGeometry args={[1.35, 64, 64]} />
          <meshStandardMaterial map={marsTexture} roughness={0.88} />
        </mesh>
        {marsMachines.map((m) => (
          <MachinePin
            key={m.id}
            machine={m}
            active={previewMachine?.id === m.id}
            hovered={hoveredMachine === m.id}
            onHover={onHoverMachine}
            onClick={onSelectMachine}
            radius={1.35}
          />
        ))}
      </group>
    </>
  );
}

function DeepSpaceScene({ onSelectMachine, hoveredMachine, onHoverMachine, previewMachine }) {
  const ceresTexture = useMemo(() => createCeresTexture(), []);
  const erosTexture = useMemo(() => createErosTexture(), []);
  const ceresRef = useRef();
  const erosRef = useRef();

  useFrame((_, delta) => {
    if (ceresRef.current) ceresRef.current.rotation.y += delta * 0.03;
    if (erosRef.current) {
      erosRef.current.rotation.y += delta * 0.04;
      erosRef.current.rotation.x += delta * 0.02;
    }
  });

  const deepMachines = useMemo(() => machines.filter((m) => m.destination === 'deep'), []);

  const pioneer10Points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      pts.push(new THREE.Vector3(t * 7 - 1, Math.sin(t * 1.5) * 2, -t * 6));
    }
    return pts;
  }, []);

  const keplerOrbitPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const a = (i / 60) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * 4.2 - 0.5, Math.sin(a * 2) * 0.4, Math.sin(a) * 4.2));
    }
    return pts;
  }, []);

  return (
    <>
      <color attach="background" args={['#05070F']} />
      <ambientLight intensity={0.22} />
      <directionalLight position={[6, 5, 4]} intensity={2.5} color="#FFFFFF" />
      <Stars radius={90} depth={45} count={4000} factor={3} fade speed={0.4} />

      <Line points={pioneer10Points} color="#A78BFA" transparent opacity={0.4} lineWidth={1.5} />
      <Line points={keplerOrbitPoints} color="#38BDF8" transparent opacity={0.3} lineWidth={1} />

      <group position={[2.8, 0.4, -0.8]}>
        <mesh ref={ceresRef}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial map={ceresTexture} roughness={0.9} />
        </mesh>
      </group>

      <group position={[-2.4, -0.6, 1.8]}>
        <mesh ref={erosRef} scale={[1.1, 0.5, 0.5]}>
          <dodecahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial map={erosTexture} roughness={0.95} />
        </mesh>
      </group>

      {deepMachines.map((m) => {
        const isHovered = hoveredMachine === m.id;
        const isActive = previewMachine?.id === m.id;
        return (
          <group
            key={m.id}
            position={m.spacePos}
            onClick={(e) => {
              e.stopPropagation();
              onSelectMachine(m);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              onHoverMachine(m.id);
            }}
            onPointerOut={() => onHoverMachine(null)}
          >
            <mesh>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
            <mesh scale={isHovered || isActive ? 2.4 : 1.4}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#A78BFA" transparent opacity={isHovered || isActive ? 0.75 : 0.35} />
            </mesh>
            {(isHovered || isActive) && (
              <Html distanceFactor={7} position={[0, 0.22, 0]}>
                <div className="planet-machine-pointer-tooltip" style={{ borderColor: '#A78BFA' }}>
                  <span style={{ color: '#A78BFA' }}>●</span>
                  <b>{m.name}</b>
                  <span>{m.tag}</span>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
}

function CameraFlightController({ view }) {
  const { camera } = useThree();

  useFrame(() => {
    let targetPos = [0, 8.5, 22];

    if (view === 'moon') {
      targetPos = [0, 0.8, 3.2];
    } else if (view === 'mars') {
      targetPos = [0, 1.0, 3.6];
    } else if (view === 'deep') {
      targetPos = [0, 2.0, 6.8];
    }

    camera.position.lerp(new THREE.Vector3(...targetPos), 0.045);
  });

  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      minDistance={view === 'solar' ? 5 : 1.8}
      maxDistance={view === 'solar' ? 45 : 12}
      enableDamping={true}
      dampingFactor={0.06}
    />
  );
}

// ==========================================
// AUDIO & WEB SPEECH SYNTHESIS HOOK
// ==========================================

function useSpaceAudio(machine) {
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const [subtitle, setSubtitle] = useState('');
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);

  const stop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
    setSubtitle('');

    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtxRef.current.currentTime + 0.2
      );
      setTimeout(() => {
        oscRef.current?.stop?.();
        oscRef.current = null;
      }, 250);
    }
  };

  const play = () => {
    stop();
    if (!machine || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(machine.audioText);
    utterance.rate = rate;
    utterance.pitch = 0.95;
    utterance.volume = 1;

    utterance.onstart = () => {
      setPlaying(true);
      setSubtitle(machine.audioText);
    };

    utterance.onend = () => {
      setPlaying(false);
      setSubtitle('');
    };

    utterance.onerror = () => {
      setPlaying(false);
      setSubtitle('');
    };

    window.speechSynthesis.speak(utterance);

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = machine.destination === 'mars' ? 55 : 62;
        gain.gain.value = 0.0001;
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.exponentialRampToValueAtTime(0.015, ctx.currentTime + 0.4);
        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
      }
    } catch {
      // Audio context fallback
    }
  };

  useEffect(() => {
    return () => stop();
  }, [machine?.id]);

  return { playing, play, stop, rate, setRate, subtitle };
}

// ==========================================
// FULL EXPLORATION & STORY EXPERIENCE (STEP 5)
// ==========================================

function FullStoryExperience({ machine, onBack, onScan, isScanned }) {
  const [activeTab, setActiveTab] = useState('story');
  const narration = useSpaceAudio(machine);
  const [askQuery, setAskQuery] = useState('');
  const [askAnswer, setAskAnswer] = useState(null);

  const handleAsk = (queryText) => {
    const q = queryText || askQuery;
    if (!q.trim()) return;

    setAskAnswer({
      question: q,
      text: `Based on the verified NSSDCA catalog for ${machine.name} (${machine.nssdcId}): ${machine.desc} ${machine.fact} All findings remain indexed in the NASA Space Science Data Coordinated Archive.`
    });
  };

  return (
    <div className="full-story-view">
      <div className="story-header-nav">
        <button className="back-btn" onClick={onBack}>
          ← RETURN TO PLANETARY VIEW
        </button>
        <div className="progress-pill">
          <span>CATALOG STATUS</span>
          <b>{machine.tag}</b>
        </div>
      </div>

      <div className="story-hero-grid">
        <div className="telemetry-viewport-16-9" style={{ height: '380px' }}>
          <img
            src={machine.imageUrl}
            alt={machine.name}
            onError={(e) => {
              e.target.src =
                'https://images-assets.nasa.gov/image/as11-40-5922/as11-40-5922~medium.jpg';
            }}
          />
          <div className="scanline-effect" />
          <div className="telemetry-crosshair-overlay" />
          <div className="telemetry-hud-badge">{machine.nssdcId}</div>
          <div className="telemetry-hud-status">{machine.tag}</div>
        </div>

        <div className="story-intro-content">
          <div className="eyebrow">{machine.place}</div>
          <h1>{machine.name}</h1>
          <p className="story-lead">“{machine.lead}”</p>
          <p className="story-desc">{machine.desc}</p>

          <div className="narration-deck glass-panel">
            <div className="narration-controls-row">
              <button
                className="audio-play-btn"
                onClick={narration.playing ? narration.stop : narration.play}
              >
                {narration.playing ? <Pause size={15} /> : <Volume2 size={15} />}
                {narration.playing ? 'PAUSE NARRATION' : 'LISTEN TO TRANSMISSION'}
              </button>

              <div className="audio-speed-control">
                <span>RATE</span>
                <input
                  type="range"
                  min="0.8"
                  max="1.4"
                  step="0.05"
                  value={narration.rate}
                  onChange={(e) => narration.setRate(parseFloat(e.target.value))}
                />
                <b>{narration.rate.toFixed(2)}×</b>
              </div>

              <div className={`audio-live-bars ${narration.playing ? 'active' : ''}`}>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            {narration.subtitle && (
              <div className="story-subtitle-banner">“{narration.subtitle}”</div>
            )}
          </div>

          <div className="citation-line">
            <ShieldCheck size={14} />
            <span>{machine.cite}</span>
          </div>
        </div>
      </div>

      <div className="story-tabs-nav">
        {[
          ['story', 'THE STORY'],
          ['evidence', 'EVIDENCE SCANNER'],
          ['timeline', 'MISSION TIMELINE'],
          ['earth', 'EARTH CONNECTION'],
          ['ask', 'ASK THE EXPLORER']
        ].map(([key, label]) => (
          <button
            key={key}
            className={`story-tab-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="story-panel-body">
        {activeTab === 'story' && (
          <div>
            <div className="panel-header-badge">EDUCATIONAL DRAMATIZATION · NASA SOURCE REFERENCE</div>
            <h2>“I am {machine.name}.”</h2>
            <p className="panel-quote">{machine.audioText}</p>
            <div style={{ margin: '14px 0 20px', padding: '10px 14px', background: 'rgba(5, 7, 15, 0.5)', border: '1px solid rgba(56, 189, 248, 0.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', color: '#8791AA', font: '400 11px "DM Mono", monospace' }}>
              <Info size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
              <span>
                <strong>Educational Dramatization Notice:</strong> First-person voice memoirs are dramatized for educational engagement. All operational dates, resting locations, coordinates, and scientific achievements are verified against official NASA NSSDCA catalogs.
              </span>
            </div>
            <div className="fact-cards-grid">
              <div className="fact-card-box glass-panel">
                <small>FINAL RESTING PLACE</small>
                <b>{machine.coordinates}</b>
              </div>
              <div className="fact-card-box glass-panel">
                <small>MISSION SUMMARY</small>
                <b>{machine.stat}</b>
              </div>
              <div className="fact-card-box glass-panel">
                <small>CATALOG RECORD</small>
                <b>{machine.nssdcId}</b>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'evidence' && (
          <div>
            <div className="panel-header-badge">SOURCE-VERIFIED EVIDENCE ARCHIVE</div>
            <h2>Artifact Evidence Verification</h2>
            <div className="evidence-scan-action-box">
              <button
                className={`evidence-scan-btn ${isScanned ? 'scanned' : ''}`}
                onClick={onScan}
              >
                <Zap size={16} />
                {isScanned ? 'EVIDENCE SCANNED & LOGGED (+120 XP)' : 'SCAN FOR EVIDENCE'}
              </button>
              <span className="citation-line">
                <ShieldCheck size={14} /> Grounded in NASA NSSDCA Master Catalogs
              </span>
            </div>

            <div className="evidence-grid-cards">
              <div className="evidence-item-card glass-panel">
                <Zap size={18} />
                <small>ENGINEERING EVIDENCE</small>
                <p>{machine.evidence.engineering}</p>
              </div>
              <div className="evidence-item-card glass-panel">
                <Radio size={18} />
                <small>TELEMETRY EVIDENCE</small>
                <p>{machine.evidence.telemetry}</p>
              </div>
              <div className="evidence-item-card glass-panel">
                <Sparkles size={18} />
                <small>SCIENTIFIC EVIDENCE</small>
                <p>{machine.evidence.science}</p>
              </div>
              <div className="evidence-item-card glass-panel">
                <LockKeyhole size={18} />
                <small>CURRENT STATUS</small>
                <p>{machine.evidence.status}</p>
              </div>
            </div>

            {/* Individual Authorized Sources & Claim Traceability */}
            {machine.sources && machine.sources.length > 0 && (
              <div className="verified-sources-container glass-panel" style={{ marginTop: '24px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Database size={15} color="#38BDF8" />
                    <span style={{ font: '700 12px "DM Mono", monospace', letterSpacing: '0.12em', color: '#38BDF8' }}>
                      AUTHORIZED NASA SOURCE REFERENCES ({machine.sources.length})
                    </span>
                  </div>
                  <span style={{ font: '500 11px "DM Mono", monospace', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={13} /> {machine.sources.every((s) => s.verificationStatus === 'VERIFIED') ? 'ALL CLAIMS VERIFIED' : 'PARTIALLY VERIFIED'}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {machine.sources.map((src) => (
                    <div
                      key={src.id}
                      style={{
                        padding: '12px 14px',
                        background: 'rgba(5, 7, 15, 0.65)',
                        border: '1px solid rgba(56, 189, 248, 0.18)',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            font: '600 13px "Space Grotesk", sans-serif',
                            color: '#F3F5FF',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          {src.title} <ExternalLink size={12} color="#38BDF8" />
                        </a>
                        <span
                          style={{
                            font: '600 10px "DM Mono", monospace',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            background: src.verificationStatus === 'VERIFIED' ? 'rgba(16, 185, 129, 0.18)' : 'rgba(251, 191, 36, 0.18)',
                            color: src.verificationStatus === 'VERIFIED' ? '#34D399' : '#FBBF24',
                            border: `1px solid ${src.verificationStatus === 'VERIFIED' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(251, 191, 36, 0.4)'}`
                          }}
                        >
                          {src.verificationStatus}
                        </span>
                      </div>
                      <div style={{ font: '400 11px "DM Mono", monospace', color: '#8791AA', marginBottom: '6px' }}>
                        Publisher: {src.publisher} · Type: {src.resourceType}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                        <span style={{ font: '500 10px "DM Mono", monospace', color: '#94A3B8' }}>Supports:</span>
                        {src.supports.map((sup) => (
                          <span
                            key={sup}
                            style={{
                              font: '500 10px "DM Mono", monospace',
                              padding: '1px 6px',
                              borderRadius: '3px',
                              background: 'rgba(56, 189, 248, 0.1)',
                              color: '#38BDF8',
                              border: '1px solid rgba(56, 189, 248, 0.2)'
                            }}
                          >
                            {sup}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'timeline' && (
          <div>
            <div className="panel-header-badge">CHRONOLOGICAL MILESTONE RECORD</div>
            <h2>Rebuild the Mission Timeline</h2>
            <div className="timeline-stepper">
              {machine.timeline.map((step) => (
                <div key={step.step} className="timeline-step-node">
                  <small>STAGE {step.step}</small>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earth' && (
          <div>
            <div className="panel-header-badge">FROM SPACE TO HOME</div>
            <h2>Earth Connection & Technological Heritage</h2>
            <div className="earth-connection-box glass-panel">
              <p className="panel-quote">{machine.earthConnection}</p>
              <div className="connection-flow-diagram">
                <div className="flow-step-tag">SPACE INNOVATION</div>
                <ArrowRight size={16} />
                <div className="flow-step-tag">RIGOROUS VALIDATION</div>
                <ArrowRight size={16} />
                <div className="flow-step-tag">DAILY HUMAN LIFE ON EARTH</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ask' && (
          <div>
            <div className="panel-header-badge">GROUNDED INTERACTIVE INQUIRY · NO FABRICATION</div>
            <h2>Ask {machine.name}</h2>
            <div className="ask-machine-box glass-panel">
              <textarea
                placeholder={`Ask ${machine.name} about its science, mission, or coordinates...`}
                value={askQuery}
                onChange={(e) => setAskQuery(e.target.value)}
              />
              <div className="suggested-prompts">
                {[
                  'What was your primary discovery?',
                  'How did your mission conclude?',
                  'What is your final resting state?'
                ].map((promptText) => (
                  <button
                    key={promptText}
                    className="prompt-pill"
                    onClick={() => {
                      setAskQuery(promptText);
                      handleAsk(promptText);
                    }}
                  >
                    {promptText}
                  </button>
                ))}
              </div>
              <button className="ask-submit-btn" onClick={() => handleAsk()}>
                <Send size={14} /> SUBMIT INQUIRY
              </button>

              {askAnswer && (
                <div className="ai-answer-card">
                  <small>ARCHIVE RESPONSE · {machine.nssdcId}</small>
                  <p>{askAnswer.text}</p>
                  <span className="citation-line">
                    <ShieldCheck size={12} /> {machine.cite}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// UPGRADED MODALS: COMPARE, INSPECTOR, CONTROL, CERTIFICATE
// ==========================================

function MissionControlModal({ onClose, onRewardXp }) {
  const [activeCase, setActiveCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completedCases, setCompletedCases] = useState([]);

  const cases = [
    {
      id: 'mer-b',
      title: 'CASE 01 · OPPORTUNITY',
      missionName: 'Mars Exploration Rover Opportunity (MER-B)',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA10214/PIA10214~medium.jpg',
      prompt: 'Opportunity operated for nearly 15 years across Mars before its signal ceased in 2018. What documented planetary event contributed to the end of Opportunity’s mission?',
      options: [
        { text: 'A global Martian dust storm obscured sunlight and depleted solar recharge capability.', correct: true },
        { text: 'A basaltic fissure eruption buried the rover in Perseverance Valley.', correct: false },
        { text: 'The rover exhausted its internal liquid oxygen propellant tank.', correct: false }
      ],
      explanation: 'NASA NSSDCA records document that an unprecedented global dust storm in June 2018 blotted out the Sun in Perseverance Valley, cutting off solar power to the battery heaters.',
      citation: 'NSSDCA Mars Exploration Rover Records · JPL'
    },
    {
      id: 'apollo-lm',
      title: 'CASE 02 · APOLLO 11 LM',
      missionName: 'Apollo Lunar Module Descent Stage',
      imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5922/as11-40-5922~medium.jpg',
      prompt: 'During the terminal descent of Apollo 11’s "Eagle", why did Neil Armstrong switch to semi-automatic manual control before landing at Tranquility Base?',
      options: [
        { text: 'The automated guidance computer was directing the descent stage into a boulder-strewn crater field.', correct: true },
        { text: 'The descent rocket motor failed to ignite automatically.', correct: false },
        { text: 'Communication with Mission Control in Houston was completely lost.', correct: false }
      ],
      explanation: 'Armstrong noticed the onboard autopilot was steering Eagle toward a football-field sized crater filled with car-sized boulders (West Crater), prompting him to pitch forward and fly manually to a safe clear plain.',
      citation: 'Apollo 11 Mission Commentary & NSSDCA Records'
    },
    {
      id: 'pioneer-10',
      title: 'CASE 03 · PIONEER 10',
      missionName: 'Pioneer 10 Deep Space Scout',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA01479/PIA01479~medium.jpg',
      prompt: 'What special payload was bolted to the antenna support struts of Pioneer 10 and 11 for potential extraterrestrial encounter?',
      options: [
        { text: 'A gold-anodized aluminum plaque with diagrams of human figures and the solar system.', correct: true },
        { text: 'A digital laser flash memory containing 10,000 Earth languages.', correct: false },
        { text: 'A radio beacon broadcasting continuously on AM radio frequency.', correct: false }
      ],
      explanation: 'Designed by Carl Sagan and Linda Salzman Sagan, the 6x9 inch gold-anodized plaques portray a man and woman, the hyper-fine transition of neutral hydrogen, and a pulsar map indicating the sun’s location in the Milky Way.',
      citation: 'NSSDCA Pioneer 10 Mission Catalog · NASA Ames'
    }
  ];

  const currentCase = cases[activeCase];

  const handleSelectOption = (index, isCorrect) => {
    setSelectedAnswer(index);
    if (isCorrect && !completedCases.includes(activeCase)) {
      setCompletedCases([...completedCases, activeCase]);
      onRewardXp?.(100);
    }
  };

  return (
    <div className="modal-backdrop-glass" onClick={onClose}>
      <div className="modal-dialog-box glass-panel" style={{ width: 'min(760px, 95vw)' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-eyebrow">MISSION CONTROL · SIMULATED FLIGHT INVESTIGATION</div>
        <h2>The Last Signal Challenge</h2>
        <p className="modal-lead">
          Investigate authentic operational anomalies recorded in documented NASA flight telemetry.
        </p>

        <div className="scenario-case-tabs">
          {cases.map((c, i) => (
            <button
              key={c.id}
              className={`scenario-case-btn ${activeCase === i ? 'active' : ''}`}
              onClick={() => {
                setActiveCase(i);
                setSelectedAnswer(null);
              }}
            >
              {c.title} {completedCases.includes(i) && '✓'}
            </button>
          ))}
        </div>

        <div className="telemetry-viewport-16-9" style={{ maxHeight: '220px', marginBottom: '18px' }}>
          <img src={currentCase.imageUrl} alt={currentCase.missionName} />
          <div className="scanline-effect" />
          <div className="telemetry-crosshair-overlay" />
          <div className="telemetry-hud-badge">{currentCase.title}</div>
        </div>

        <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#E2E8F0', margin: '0 0 16px' }}>
          <b>{currentCase.prompt}</b>
        </p>

        <div className="quiz-options-list">
          {currentCase.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-option-btn ${selectedAnswer === i ? (opt.correct ? 'selected' : 'incorrect') : ''}`}
              onClick={() => handleSelectOption(i, opt.correct)}
            >
              <span>{String.fromCharCode(65 + i)}</span>
              <div>{opt.text}</div>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className={`quiz-result-banner ${currentCase.options[selectedAnswer].correct ? 'correct' : 'incorrect'}`}>
            <b>{currentCase.options[selectedAnswer].correct ? 'DIAGNOSTIC CONFIRMED · +100 XP' : 'TELEMETRY DISCREPANCY'}</b>
            <p>{currentCase.explanation}</p>
            <div className="citation-line" style={{ marginTop: '8px' }}>
              <ShieldCheck size={13} /> {currentCase.citation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CompareModal({ onClose }) {
  const [leftId, setLeftId] = useState('apollo-lm');
  const [rightId, setRightId] = useState('sojourner');

  const leftMachine = useMemo(() => machines.find((m) => m.id === leftId) || machines[0], [leftId]);
  const rightMachine = useMemo(() => machines.find((m) => m.id === rightId) || machines[4], [rightId]);

  return (
    <div className="modal-backdrop-glass" onClick={onClose}>
      <div className="modal-dialog-box glass-panel compare-modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-eyebrow">ARCHIVE ANALYSIS · SIDE-BY-SIDE TELEMETRY LAB</div>
        <h2>Mission Comparison Lab</h2>
        <p className="modal-lead">
          Compare verified engineering, telemetry, and scientific payloads across planetary artifacts.
        </p>

        <div className="compare-selectors-grid">
          <select
            className="compare-select-dropdown"
            value={leftId}
            onChange={(e) => setLeftId(e.target.value)}
          >
            {machines.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.destination.toUpperCase()})
              </option>
            ))}
          </select>

          <div className="compare-vs-badge">VS</div>

          <select
            className="compare-select-dropdown"
            value={rightId}
            onChange={(e) => setRightId(e.target.value)}
          >
            {machines.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.destination.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        <div className="compare-columns-grid">
          {[leftMachine, rightMachine].map((m) => (
            <div key={m.id} className="compare-column-card glass-panel">
              <div className="telemetry-viewport-16-9">
                <img src={m.imageUrl} alt={m.name} />
                <div className="scanline-effect" />
                <div className="telemetry-crosshair-overlay" />
                <div className="telemetry-hud-badge">{m.nssdcId}</div>
                <div className="telemetry-hud-status">{m.tag}</div>
              </div>

              <h3>{m.name}</h3>

              <div className="compare-matrix-list">
                <div className="compare-matrix-item">
                  <small>RESTING SITE & COORDINATES</small>
                  <b>{m.coordinates}</b>
                </div>
                <div className="compare-matrix-item">
                  <small>MISSION PROGRAM & EPOCH</small>
                  <b>{m.mission} ({m.stat})</b>
                </div>
                <div className="compare-matrix-item">
                  <small>HARDWARE & ENGINEERING</small>
                  <b>{m.evidence.engineering}</b>
                </div>
                <div className="compare-matrix-item">
                  <small>PRIMARY SCIENTIFIC FINDING</small>
                  <b>{m.fact}</b>
                </div>
                <div className="compare-matrix-item">
                  <small>EARTH TECHNOLOGICAL HERITAGE</small>
                  <b>{m.earthConnection}</b>
                </div>
              </div>

              <a
                href={m.catalogUrl}
                target="_blank"
                rel="noreferrer"
                className="citation-line"
                style={{ textDecoration: 'none', marginTop: '6px' }}
              >
                <ShieldCheck size={13} /> {m.cite} <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageInspectorModal({ onClose }) {
  const [selectedId, setSelectedId] = useState('apollo-lm');
  const [zoomed, setZoomed] = useState(false);

  const selectedMachine = useMemo(() => machines.find((m) => m.id === selectedId) || machines[0], [selectedId]);

  return (
    <div className="modal-backdrop-glass" onClick={onClose}>
      <div className="modal-dialog-box glass-panel inspector-modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-eyebrow">NSSDCA PHOTOGRAPHIC ARCHIVE INSPECTOR</div>
        <h2>NASA Imagery Archive Inspector</h2>
        <p className="modal-lead">
          Authentic NASA photographic survey records cataloged in the Space Science Data Coordinated Archive.
        </p>

        <div className="inspector-chips-carousel">
          {machines.map((m) => (
            <button
              key={m.id}
              className={`inspector-chip ${selectedId === m.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedId(m.id);
                setZoomed(false);
              }}
            >
              {m.shortName}
            </button>
          ))}
        </div>

        <div className="inspector-stage-box glass-panel">
          <div
            className="telemetry-viewport-16-9"
            style={{ maxHeight: '420px', cursor: zoomed ? 'zoom-out' : 'zoom-in' }}
            onClick={() => setZoomed(!zoomed)}
          >
            <img
              src={selectedMachine.imageUrl}
              alt={selectedMachine.name}
              style={{ transform: zoomed ? 'scale(1.5)' : 'scale(1)' }}
            />
            <div className="scanline-effect" />
            <div className="telemetry-crosshair-overlay" />
            <div className="telemetry-hud-badge">{selectedMachine.nssdcId}</div>
            <div className="telemetry-hud-status">{selectedMachine.tag}</div>
          </div>

          <div className="inspector-meta-row">
            <div className="inspector-meta-item">
              <small>TARGET WORLD & RESTING REGION</small>
              <b>{selectedMachine.place} ({selectedMachine.coordinates})</b>
            </div>
            <button
              className="prompt-pill"
              onClick={() => setZoomed(!zoomed)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              {zoomed ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
              {zoomed ? 'RESET ZOOM (1.0×)' : 'INSPECT HIGH-RES (1.5×)'}
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span className="citation-line">
            <ShieldCheck size={14} /> Imagery Source: NASA Space Science Data Coordinated Archive
          </span>
          <a
            href="https://nssdc.gsfc.nasa.gov/image/"
            target="_blank"
            rel="noreferrer"
            className="start-btn"
            style={{ textDecoration: 'none', padding: '10px 18px' }}
          >
            <ExternalLink size={14} /> OPEN NASA NSSDCA PHOTO VAULT
          </a>
        </div>
      </div>
    </div>
  );
}

// Visual Certificate Generator Component (1600x1130 Canvas PNG + Print/Save as PDF)
function VisualCertificateModal({ scannedIds, bonusXp = 0, onClose }) {
  const [displayName, setDisplayName] = useState('Space Explorer');
  const certCanvasRef = useRef(null);

  const totalCount = 13;
  const scannedCount = scannedIds.length;
  const xp = scannedCount * 120 + bonusXp;

  const rank =
    scannedCount >= 13
      ? 'LEVEL 5 · MASTER SPACE ARCHAEOLOGIST'
      : scannedCount >= 9
      ? 'LEVEL 4 · DEEP SPACE DETECTIVE'
      : scannedCount >= 5
      ? 'LEVEL 3 · MARTIAN INVESTIGATOR'
      : scannedCount >= 1
      ? 'LEVEL 2 · JUNIOR SPACE ARCHAEOLOGIST'
      : 'LEVEL 1 · RECRUIT';

  const verificationCode = useMemo(() => {
    return 'NBX-2026-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  }, []);

  // Live Canvas Rendering
  useEffect(() => {
    if (certCanvasRef.current) {
      renderCertificateToCanvas(certCanvasRef.current, {
        name: displayName,
        rank,
        xp,
        scannedCount,
        totalCount,
        verificationCode
      });
    }
  }, [displayName, scannedCount, xp, rank, verificationCode]);

  const handleDownloadPNG = () => {
    if (!certCanvasRef.current) return;
    const dataUrl = certCanvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `NEBULA_X_Space_Archaeologist_Certificate_${displayName.replace(/\s+/g, '_')}.png`;
    a.click();
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop-glass" onClick={onClose}>
      <div className="modal-dialog-box glass-panel certificate-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="modal-eyebrow">EDUCATIONAL RECOGNITION · HIGH-DPI VISUAL CERTIFICATE</div>
        <h2>Junior Space Archaeologist Certificate of Achievement</h2>
        <p className="modal-lead">
          Rendered live onto high-resolution 1600×1130 canvas with 2026 NASA Space Apps Challenge reference credentials.
        </p>

        {/* Input HUD: Enter student name */}
        <div className="cert-controls-panel glass-panel">
          <div className="cert-input-row">
            <label>
              <Sparkles size={14} /> ENTER EXPLORER NAME OR CALLSIGN FOR RECOGNITION CERTIFICATE
            </label>
            <input
              type="text"
              className="cert-display-name-input"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="e.g., Neil Armstrong, Dr. Eleanor Vance, Alex Mercer..."
              maxLength={40}
            />
          </div>
        </div>

        {/* Live Visual Canvas Preview */}
        <div className="cert-preview-container" id="nebula-cert-print-target">
          <canvas ref={certCanvasRef} className="cert-preview-canvas" />
        </div>

        {/* High-Resolution Export Actions */}
        <div className="cert-actions-grid">
          <button className="cert-action-btn png" onClick={handleDownloadPNG}>
            <Download size={16} /> DOWNLOAD CERTIFICATE (PNG)
          </button>
          <button className="cert-action-btn pdf" onClick={handlePrintPDF}>
            <Printer size={16} /> PRINT / SAVE AS PDF
          </button>
        </div>

        {/* Local Discovery Capsule Summary */}
        <div className="rank-card-banner" style={{ marginTop: '24px' }}>
          <div className="rank-icon-wrapper">
            <Trophy size={26} />
          </div>
          <div className="rank-text-content">
            <small>CURRENT EXPLORER RANK</small>
            <b>{rank}</b>
            <span style={{ fontSize: '11px', color: '#38BDF8' }}>
              {xp} Total XP · {scannedCount}/{totalCount} Artifacts Discovered
            </span>
          </div>
        </div>

        <div className="collected-artifacts-flow">
          {machines
            .filter((m) => scannedIds.includes(m.id))
            .map((m) => (
              <div key={m.id} className="artifact-collected-badge">
                <ShieldCheck size={13} color="#38BDF8" />
                <span>{m.name}</span>
              </div>
            ))}
          {scannedCount === 0 && (
            <div style={{ color: '#94A3B8', fontSize: '12px' }}>
              Scan an artifact in planetary exploration to begin cataloging your collection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [currentView, setCurrentView] = useState('solar');
  const [started, setStarted] = useState(false);
  const [hoveredDest, setHoveredDest] = useState(null);

  const [hoveredMachine, setHoveredMachine] = useState(null);
  const [previewMachine, setPreviewMachine] = useState(null);
  const [activeStoryMachine, setActiveStoryMachine] = useState(null);

  const [scannedIds, setScannedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nebula-scanned-v2') || '[]');
    } catch {
      return [];
    }
  });

  const [bonusXp, setBonusXp] = useState(0);

  // Modals
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLegacy, setShowLegacy] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showInspector, setShowInspector] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const handleScan = (id) => {
    if (!scannedIds.includes(id)) {
      const next = [...scannedIds, id];
      setScannedIds(next);
      localStorage.setItem('nebula-scanned-v2', JSON.stringify(next));
    }
  };

  const handleRewardBonusXp = (pts) => {
    setBonusXp((prev) => prev + pts);
  };

  const handleSelectDestination = (destId) => {
    setCurrentView(destId);
    setPreviewMachine(null);
    setHoveredDest(null);
  };

  const handleBackToSolar = () => {
    setCurrentView('solar');
    setPreviewMachine(null);
  };

  const currentDestMeta = destinationsMeta[currentView];

  return (
    <div className="app">
      <div className="nebula-glow nebula-blue" />
      <div className="nebula-glow nebula-violet" />

      {/* Top Navigation Bar */}
      <header className="topbar">
        <button className="brand-btn" onClick={handleBackToSolar}>
          <div className="brand-mark">
            <span />
          </div>
          <div className="brand-text">
            <b>NEBULA X</b>
            <small>THE FORGOTTEN SPACE ARCHIVE</small>
          </div>
        </button>

        <nav className="main-nav">
          <button
            className={currentView === 'solar' ? 'active' : ''}
            onClick={handleBackToSolar}
          >
            SOLAR SYSTEM
          </button>
          <button onClick={() => setShowQuiz(true)}>MISSION CONTROL</button>
          <button onClick={() => setShowLegacy(true)}>MY LEGACY CAPSULE</button>
          <button onClick={() => setShowCompare(true)}>COMPARE</button>
          <button onClick={() => setShowInspector(true)}>IMAGE INSPECTOR</button>
          <button onClick={() => setShowSources(true)}>SOURCE POLICY</button>
        </nav>

        <div className="top-right-actions">
          <div className="progress-pill">
            <span>ARCHIVE PROGRESS</span>
            <b>{scannedIds.length}/13</b>
            <div className="progress-bar-inline">
              <i style={{ width: `${(scannedIds.length / 13) * 100}%` }} />
            </div>
          </div>
          <button
            className="icon-btn-round"
            onClick={() => setShowLegacy(true)}
            aria-label="Profile"
          >
            <CircleUserRound size={18} />
          </button>
        </div>
      </header>

      {/* 3D Canvas Viewport (100vh Full Viewport) */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 8.5, 22], fov: 45 }} dpr={[1, 2]}>
          <CameraFlightController view={currentView} />

          {currentView === 'solar' && (
            <SolarSystemScene
              hoveredDest={hoveredDest}
              onHoverDest={setHoveredDest}
              onSelectDest={handleSelectDestination}
            />
          )}

          {currentView === 'moon' && (
            <MoonGlobeScene
              onSelectMachine={setPreviewMachine}
              hoveredMachine={hoveredMachine}
              onHoverMachine={setHoveredMachine}
              previewMachine={previewMachine}
            />
          )}

          {currentView === 'mars' && (
            <MarsGlobeScene
              onSelectMachine={setPreviewMachine}
              hoveredMachine={hoveredMachine}
              onHoverMachine={setHoveredMachine}
              previewMachine={previewMachine}
            />
          )}

          {currentView === 'deep' && (
            <DeepSpaceScene
              onSelectMachine={setPreviewMachine}
              hoveredMachine={hoveredMachine}
              onHoverMachine={setHoveredMachine}
              previewMachine={previewMachine}
            />
          )}
        </Canvas>
      </div>

      {/* HUD Layer Overlay */}
      <div className="hud-layer">
        {currentView === 'solar' && (
          <>
            <div className="orbit-controls-hint">
              <Compass size={15} />
              <span>DRAG TO ORBIT · SCROLL TO ZOOM · CLICK POINTER TO FLY</span>
            </div>

            <div className="hero-hud-bottom">
              <div className="hud-eyebrow">
                <span className="pulse-dot" /> ARCHIVE NAVIGATION SYSTEM · ONLINE
              </div>
              <h1>
                NEBULA X<span>STORIES REMAIN.</span>
              </h1>
              <p className="hero-tagline">
                Beyond Earth, humanity left behind more than footprints. It left stories.
              </p>

              <div className="exploration-flow-box">
                <button
                  className={`start-btn ${started ? 'active' : ''}`}
                  onClick={() => setStarted((prev) => !prev)}
                >
                  {started ? 'SELECT A DESTINATION' : 'START EXPLORATION'}
                  <ArrowRight size={16} />
                </button>

                {started && (
                  <div className="subheadings-rail">
                    {Object.values(destinationsMeta).map((meta) => (
                      <button
                        key={meta.id}
                        className={`subheading-btn ${meta.id}`}
                        onMouseEnter={() => setHoveredDest(meta.id)}
                        onMouseLeave={() => setHoveredDest(null)}
                        onClick={() => handleSelectDestination(meta.id)}
                      >
                        <small>{meta.number}.</small>
                        <span>{meta.label}</span>
                        <b>{meta.count} GROUPS</b>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {currentView !== 'solar' && (
          <>
            <div className="planet-hud-top">
              <button className="back-btn" onClick={handleBackToSolar}>
                ← BACK TO SOLAR SYSTEM
              </button>
              <div className="planet-title-badge">
                <h2>{currentDestMeta.title}</h2>
                <p>{currentDestMeta.tagline}</p>
              </div>
            </div>

            <div className="planet-hud-bottom">
              <div className="planet-info-panel glass-panel">
                <small>{currentDestMeta.number} · PLANETARY EXPLORATION</small>
                <h3>{currentDestMeta.label}</h3>
                <p>{currentDestMeta.intro}</p>
              </div>

              <div className="machine-chips-list">
                {machines
                  .filter((m) => m.destination === currentView)
                  .map((m) => (
                    <button
                      key={m.id}
                      className={`machine-chip ${previewMachine?.id === m.id ? 'active' : ''}`}
                      onClick={() => setPreviewMachine(m)}
                      onMouseEnter={() => setHoveredMachine(m.id)}
                      onMouseLeave={() => setHoveredMachine(null)}
                    >
                      <i />
                      <span>{m.shortName}</span>
                    </button>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Floating Glassmorphic Machine Preview Card */}
      {previewMachine && !activeStoryMachine && (
        <div className="machine-preview-overlay">
          <div className="machine-preview-card glass-panel">
            <button
              className="close-preview-btn"
              onClick={() => setPreviewMachine(null)}
              aria-label="Close Preview"
            >
              <X size={16} />
            </button>

            <div className="preview-media-box">
              <img
                src={previewMachine.imageUrl}
                alt={previewMachine.name}
                onError={(e) => {
                  e.target.src =
                    'https://images-assets.nasa.gov/image/as11-40-5922/as11-40-5922~medium.jpg';
                }}
              />
              <div className="scanline-effect" />
              <div className="telemetry-crosshair-overlay" />
              <div className="preview-tag">{previewMachine.tag}</div>
            </div>

            <div className="preview-eyebrow">{previewMachine.place}</div>
            <h3>{previewMachine.name}</h3>
            <p className="preview-place">{previewMachine.coordinates}</p>
            <p className="preview-desc">{previewMachine.desc}</p>

            <div className="preview-meta-row">
              <div className="preview-meta-item">
                <small>MISSION</small>
                <b>{previewMachine.mission}</b>
              </div>
              <div className="preview-meta-item">
                <small>STATUS</small>
                <b>{previewMachine.status}</b>
              </div>
            </div>

            <button
              className="explore-machine-btn"
              onClick={() => {
                setActiveStoryMachine(previewMachine);
                handleScan(previewMachine.id);
              }}
            >
              EXPLORE MACHINE →
            </button>
          </div>
        </div>
      )}

      {/* Full Exploration & Story Experience Page */}
      {activeStoryMachine && (
        <FullStoryExperience
          machine={activeStoryMachine}
          onBack={() => setActiveStoryMachine(null)}
          onScan={() => handleScan(activeStoryMachine.id)}
          isScanned={scannedIds.includes(activeStoryMachine.id)}
        />
      )}

      {/* MODAL 1: MISSION CONTROL MULTI-CASE SCENARIOS */}
      {showQuiz && (
        <MissionControlModal
          onClose={() => setShowQuiz(false)}
          onRewardXp={handleRewardBonusXp}
        />
      )}

      {/* MODAL 2: VISUAL CERTIFICATE & MY LEGACY CAPSULE */}
      {showLegacy && (
        <VisualCertificateModal
          scannedIds={scannedIds}
          bonusXp={bonusXp}
          onClose={() => setShowLegacy(false)}
        />
      )}

      {/* MODAL 3: SIDE-BY-SIDE MISSION COMPARISON LAB */}
      {showCompare && <CompareModal onClose={() => setShowCompare(false)} />}

      {/* MODAL 4: HIGH-RES NASA IMAGE INSPECTOR */}
      {showInspector && <ImageInspectorModal onClose={() => setShowInspector(false)} />}

      {/* MODAL 5: SOURCE POLICY */}
      {showSources && (
        <div className="modal-backdrop-glass" onClick={() => setShowSources(false)}>
          <div className="modal-dialog-box glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon-btn" onClick={() => setShowSources(false)}>
              <X size={18} />
            </button>
            <div className="modal-eyebrow">ARCHIVE INTEGRITY & CITATION POLICY</div>
            <h2>Every Story Has a Source.</h2>
            <p className="modal-lead">
              NEBULA X is designed around the official 2026 NASA Space Apps Challenge brief and the
              NASA Space Science Data Coordinated Archive (NSSDCA).
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
              <a
                href="https://nssdc.gsfc.nasa.gov/"
                target="_blank"
                rel="noreferrer"
                className="quiz-option-btn"
                style={{ textDecoration: 'none' }}
              >
                <ShieldCheck size={16} color="#38BDF8" />
                <span>NASA NSSDCA Master Catalog</span>
              </a>
              <a
                href="https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/?tab=resources"
                target="_blank"
                rel="noreferrer"
                className="quiz-option-btn"
                style={{ textDecoration: 'none' }}
              >
                <Database size={16} color="#38BDF8" />
                <span>2026 Challenge Resource Guidelines</span>
              </a>
            </div>
            <small style={{ color: '#64748B', fontFamily: 'DM Mono', fontSize: '9px' }}>
              All 13 equipment groups are cataloged with verified NSSDCA mission IDs. Simulated
              narration and dialogues are explicitly marked as educational dramatizations.
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
