import * as THREE from 'three';

// Procedural texture generators using HTML5 Canvas
export function createSunTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base solar plasma gradient
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, '#ffcc33');
  grad.addColorStop(0.5, '#ff8800');
  grad.addColorStop(1, '#ff4400');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Solar granulation & flare cells
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 35 + 8;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255, 255, 220, 0.45)');
    g.addColorStop(0.5, 'rgba(255, 180, 50, 0.25)');
    g.addColorStop(1, 'rgba(255, 80, 0, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Solar flares / sunspots
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = (Math.random() * 0.6 + 0.2) * canvas.height;
    const r = Math.random() * 12 + 4;
    ctx.fillStyle = 'rgba(120, 20, 0, 0.65)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep oceanic blue
  ctx.fillStyle = '#081e3a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ocean depth variation
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 120 + 40;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, '#103d6e');
    g.addColorStop(1, 'rgba(8, 30, 58, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Continental landmasses (stylized continents)
  const drawContinent = (cx, cy, rx, ry, col) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    for (let a = 0; a < Math.PI * 2; a += 0.15) {
      const dist = 1 + (Math.sin(a * 4) * 0.2 + Math.cos(a * 3) * 0.15);
      const x = cx + Math.cos(a) * rx * dist;
      const y = cy + Math.sin(a) * ry * dist;
      if (a === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  };

  // Americas
  drawContinent(280, 180, 80, 70, '#1e4830'); // N America
  drawContinent(340, 340, 60, 90, '#184226'); // S America
  // Eurasia & Africa
  drawContinent(600, 160, 140, 75, '#284d32'); // Eurasia
  drawContinent(570, 290, 75, 80, '#3d4722'); // Africa
  // Australia
  drawContinent(820, 350, 45, 40, '#4a4128');

  // Cloud swirls
  ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
  for (let i = 0; i < 35; i++) {
    const cx = Math.random() * canvas.width;
    const cy = Math.random() * canvas.height;
    const w = Math.random() * 110 + 40;
    const h = Math.random() * 25 + 10;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w, h, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createMoonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base cratered grey lunar regolith
  ctx.fillStyle = '#838a93';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Highlands subtle noise
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 20 + 2;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(40, 45, 50, 0.08)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dark Lunar Maria (Basaltic Plains)
  // Oceanus Procellarum, Mare Tranquillitatis, Mare Serenitatis, Mare Imbrium
  const maria = [
    { x: 380, y: 220, rx: 110, ry: 90 }, // Oceanus Procellarum
    { x: 530, y: 200, rx: 75, ry: 60 },  // Mare Imbrium
    { x: 620, y: 240, rx: 55, ry: 45 },  // Mare Serenitatis
    { x: 680, y: 260, rx: 65, ry: 50 },  // Mare Tranquillitatis
    { x: 740, y: 290, rx: 50, ry: 45 },  // Mare Fecunditatis
    { x: 730, y: 190, rx: 45, ry: 40 }   // Mare Crisium
  ];

  maria.forEach(m => {
    const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, Math.max(m.rx, m.ry));
    g.addColorStop(0, '#363d45');
    g.addColorStop(0.7, '#474f57');
    g.addColorStop(1, 'rgba(131, 138, 147, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(m.x, m.y, m.rx, m.ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Impact craters with white ejecta rays (e.g. Tycho, Copernicus, Kepler)
  const craters = [
    { x: 490, y: 390, r: 18, rays: true }, // Tycho
    { x: 470, y: 230, r: 14, rays: true }, // Copernicus
    { x: 400, y: 230, r: 10, rays: true }, // Kepler
    { x: 560, y: 170, r: 12, rays: false }, // Plato
    { x: 640, y: 340, r: 15, rays: false }  // Theophilus
  ];

  craters.forEach(c => {
    // Rays
    if (c.rays) {
      ctx.strokeStyle = 'rgba(235, 240, 255, 0.28)';
      ctx.lineWidth = 1.5;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x + Math.cos(a) * 120, c.y + Math.sin(a) * 120);
        ctx.stroke();
      }
    }
    // Crater rim
    ctx.fillStyle = 'rgba(25, 28, 32, 0.8)';
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#dce3ea';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.stroke();

    // Central peak
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(c.x, c.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createMarsTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Rich Martian rust-red iron oxide base
  ctx.fillStyle = '#a84324';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Terracotta & dust shading
  for (let i = 0; i < 300; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 35 + 5;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(215, 110, 60, 0.18)' : 'rgba(120, 40, 20, 0.18)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Dark volcanic / basaltic provinces (Syrtis Major, Acidalia, Sinus Meridiani)
  const darkRegions = [
    { x: 670, y: 220, rx: 75, ry: 70 }, // Syrtis Major
    { x: 340, y: 160, rx: 90, ry: 50 }, // Acidalia Planitia
    { x: 500, y: 270, rx: 80, ry: 35 }, // Sinus Meridiani
    { x: 740, y: 340, rx: 85, ry: 60 }  // Hellas Basin rim
  ];

  darkRegions.forEach(d => {
    const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(d.rx, d.ry));
    g.addColorStop(0, '#3e1b12');
    g.addColorStop(0.7, '#59291b');
    g.addColorStop(1, 'rgba(168, 67, 36, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Valles Marineris canyon scar
  ctx.strokeStyle = '#2b1008';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(280, 275);
  ctx.bezierCurveTo(340, 280, 420, 290, 480, 280);
  ctx.stroke();

  // Tharsis Montes volcanic shield peaks
  const volcanoes = [
    { x: 230, y: 210, r: 16 }, // Olympus Mons
    { x: 260, y: 250, r: 10 }, // Ascraeus Mons
    { x: 245, y: 275, r: 10 }, // Pavonis Mons
    { x: 230, y: 300, r: 10 }  // Arsia Mons
  ];
  volcanoes.forEach(v => {
    ctx.fillStyle = '#6e2b1b';
    ctx.beginPath();
    ctx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1c0804';
    ctx.beginPath();
    ctx.arc(v.x, v.y, v.r * 0.35, 0, Math.PI * 2);
    ctx.fill();
  });

  // Polar Ice Caps (Planum Boreale & Planum Australe)
  const northCap = ctx.createLinearGradient(0, 0, 0, 45);
  northCap.addColorStop(0, '#ffffff');
  northCap.addColorStop(0.8, '#f1f5f9');
  northCap.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = northCap;
  ctx.fillRect(0, 0, canvas.width, 45);

  const southCap = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - 35);
  southCap.addColorStop(0, '#ffffff');
  southCap.addColorStop(0.8, '#f1f5f9');
  southCap.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = southCap;
  ctx.fillRect(0, canvas.height - 35, canvas.width, 35);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createCeresTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Dark carbonaceous regolith
  ctx.fillStyle = '#454a52';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 200; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 12 + 2;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(30, 32, 35, 0.2)' : 'rgba(100, 105, 115, 0.15)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Occator Crater Bright Spots (Faculae)
  const g = ctx.createRadialGradient(250, 110, 0, 250, 110, 25);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.3, '#d8e5ff');
  g.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(250, 110, 25, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createErosTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#615c54';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 250; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 16 + 2;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(40, 36, 32, 0.25)' : 'rgba(130, 125, 115, 0.18)';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
