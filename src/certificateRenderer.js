// High-Resolution 1600x1130 Canvas Certificate Generator for NEBULA X

export function renderCertificateToCanvas(canvas, data) {
  if (!canvas) return;

  const width = 1600;
  const height = 1130;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const {
    name = 'Space Explorer',
    rank = 'JUNIOR SPACE ARCHAEOLOGIST',
    xp = 120,
    scannedCount = 1,
    totalCount = 13,
    date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    verificationCode = 'NBX-2026-ARCHIVE'
  } = data;

  // 1. Deep Space Cosmic Background
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#05070F');
  bgGrad.addColorStop(0.3, '#0B1120');
  bgGrad.addColorStop(0.65, '#14102E');
  bgGrad.addColorStop(1, '#070B16');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Cosmic Nebulae Radial Glows
  const drawNebula = (cx, cy, r, color) => {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  };

  drawNebula(260, 220, 360, 'rgba(124, 58, 237, 0.18)');
  drawNebula(1340, 900, 380, 'rgba(56, 189, 248, 0.16)');
  drawNebula(800, 560, 320, 'rgba(37, 99, 235, 0.12)');

  // 3. Crisp Starfield Particles (deterministic placement based on index)
  for (let i = 0; i < 180; i++) {
    const sx = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
    const sy = (Math.cos(i * 93.9898 + 34.233) * 43758.5453) % 1;
    const x = Math.abs(sx) * width;
    const y = Math.abs(sy) * height;
    const r = (i % 5 === 0) ? 2.2 : (i % 2 === 0) ? 1.4 : 0.9;
    const alpha = 0.25 + ((i % 10) / 10) * 0.7;

    ctx.fillStyle = i % 4 === 0 ? `rgba(56, 189, 248, ${alpha})` : (i % 7 === 0 ? `rgba(251, 191, 36, ${alpha})` : `rgba(255, 255, 255, ${alpha})`);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 4. Double Geometric HUD Borders
  // Outer Border (Cyan Electric Blue)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(45, 45, width - 90, height - 90);

  // Inner Border (Gold)
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(58, 58, width - 116, height - 116);

  // Corner Brackets (Gold & Cyan)
  const bracketLen = 50;
  const drawCornerBracket = (bx, by, dx, dy) => {
    ctx.strokeStyle = '#FBBF24';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(bx + dx * bracketLen, by);
    ctx.lineTo(bx, by);
    ctx.lineTo(bx, by + dy * bracketLen);
    ctx.stroke();

    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bx + dx * (bracketLen - 8), by + dy * 12);
    ctx.lineTo(bx + dx * 12, by + dy * 12);
    ctx.lineTo(bx + dx * 12, by + dy * (bracketLen - 8));
    ctx.stroke();
  };

  drawCornerBracket(45, 45, 1, 1);
  drawCornerBracket(width - 45, 45, -1, 1);
  drawCornerBracket(45, height - 45, 1, -1);
  drawCornerBracket(width - 45, height - 45, -1, -1);

  // Micro Technical HUD Corner Markings
  ctx.font = '10px "DM Mono", monospace';
  ctx.fillStyle = '#64748B';
  ctx.textAlign = 'left';
  ctx.fillText('// NSSDCA MASTER ARCHIVE REGISTRY // VERIFIED RECORD //', 75, 80);
  ctx.textAlign = 'right';
  ctx.fillText('// LAT-LON SURFACE COORDINATES VALIDATED // NASA SPACE APPS //', width - 75, 80);

  // 5. Top Crest Emblem
  const centerX = width / 2;
  const crestY = 135;

  // Orbital rings
  ctx.save();
  ctx.translate(centerX, crestY);

  ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(0, 0, 48, 18, Math.PI / 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
  ctx.beginPath();
  ctx.ellipse(0, 0, 48, 18, -Math.PI / 4, 0, Math.PI * 2);
  ctx.stroke();

  // Central Gold Star Core
  ctx.fillStyle = '#FBBF24';
  ctx.shadowColor = '#FBBF24';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(0, 0, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();

  // Top Crest Typography
  ctx.textAlign = 'center';
  ctx.font = '500 13px "DM Mono", monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.letterSpacing = '0.22em';
  ctx.fillText('2026 NASA SPACE APPS CHALLENGE • NSSDCA VERIFIED ARCHIVE', centerX, 190);

  ctx.font = '700 24px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#38BDF8';
  ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
  ctx.shadowBlur = 12;
  ctx.fillText('NEBULA X — THE FORGOTTEN SPACE ARCHIVE', centerX, 226);
  ctx.shadowBlur = 0;

  // Divider Line with Center Diamond
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - 350, 250);
  ctx.lineTo(centerX - 20, 250);
  ctx.moveTo(centerX + 20, 250);
  ctx.lineTo(centerX + 350, 250);
  ctx.stroke();

  ctx.fillStyle = '#FBBF24';
  ctx.beginPath();
  ctx.moveTo(centerX, 244);
  ctx.lineTo(centerX + 8, 250);
  ctx.lineTo(centerX, 256);
  ctx.lineTo(centerX - 8, 250);
  ctx.closePath();
  ctx.fill();

  // 6. Main Certificate Heading
  ctx.font = '500 13px "DM Mono", monospace';
  ctx.fillStyle = '#FBBF24';
  ctx.fillText('OFFICIAL DIPLOMA OF RECOGNITION', centerX, 292);

  ctx.font = '700 50px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(56, 189, 248, 0.55)';
  ctx.shadowBlur = 24;
  ctx.fillText('CERTIFICATE OF SPACE ARCHAEOLOGY', centerX, 355);
  ctx.shadowBlur = 0;

  ctx.font = '500 14px "DM Mono", monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('THIS CERTIFICATION IS PROUDLY CONFERRED UPON', centerX, 400);

  // 7. Student Display Name
  const displayName = (name && name.trim()) ? name.trim().toUpperCase() : 'SPACE EXPLORER';
  ctx.font = '800 60px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#FBBF24';
  ctx.shadowColor = 'rgba(251, 191, 36, 0.6)';
  ctx.shadowBlur = 25;
  ctx.fillText(displayName, centerX, 475);
  ctx.shadowBlur = 0;

  // Underline Accent with end nodes
  const textWidth = Math.max(ctx.measureText(displayName).width, 420);
  const startX = centerX - textWidth / 2 - 40;
  const endX = centerX + textWidth / 2 + 40;

  const lineGrad = ctx.createLinearGradient(startX, 0, endX, 0);
  lineGrad.addColorStop(0, 'rgba(251, 191, 36, 0)');
  lineGrad.addColorStop(0.2, '#FBBF24');
  lineGrad.addColorStop(0.8, '#FBBF24');
  lineGrad.addColorStop(1, 'rgba(251, 191, 36, 0)');

  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(startX, 502);
  ctx.lineTo(endX, 502);
  ctx.stroke();

  // 8. Commendation Description
  ctx.font = '500 18px "Manrope", sans-serif';
  ctx.fillStyle = '#CBD5E1';
  ctx.fillText('For demonstrated analytical excellence in digital planetary archaeology, telemetry examination,', centerX, 545);
  ctx.fillText("and grounded historical inquiry into humanity's discarded space hardware across the Moon, Mars, and Deep Space.", centerX, 575);

  // 9. Achievement Summary Panels (3 Glassmorphic HUD Cards)
  const panelY = 625;
  const panelH = 135;
  const panelW = 340;
  const gap = 45;
  const totalW = panelW * 3 + gap * 2;
  const p1X = centerX - totalW / 2;
  const p2X = p1X + panelW + gap;
  const p3X = p2X + panelW + gap;

  const drawHudCard = (x, y, w, h, label, mainVal, subVal, accentColor) => {
    // Background fill
    ctx.fillStyle = 'rgba(11, 17, 32, 0.82)';
    ctx.fillRect(x, y, w, h);

    // Border
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);

    // Corner accents
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(x + 12, y); ctx.lineTo(x, y); ctx.lineTo(x, y + 12);
    ctx.moveTo(x + w - 12, y + h); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w, y + h - 12);
    ctx.stroke();

    // Text content
    ctx.textAlign = 'center';
    ctx.font = '500 11px "DM Mono", monospace';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText(label, x + w / 2, y + 32);

    ctx.font = '700 24px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(mainVal, x + w / 2, y + 74);

    ctx.font = '600 11px "DM Mono", monospace';
    ctx.fillStyle = accentColor;
    ctx.fillText(subVal, x + w / 2, y + 104);
  };

  drawHudCard(p1X, panelY, panelW, panelH, 'OFFICIAL EXPLORER RANK', rank, 'MERIT CLASSIFICATION', '#38BDF8');
  drawHudCard(p2X, panelY, panelW, panelH, 'CATALOGED ARTIFACTS', `${scannedCount} / ${totalCount} DISCOVERED`, 'MOON · MARS · DEEP SPACE', '#FBBF24');
  drawHudCard(p3X, panelY, panelW, panelH, 'RESEARCH MERIT POINTS', `${xp} XP ACCUMULATED`, 'NSSDCA LOCAL RECORD', '#A78BFA');

  // 10. Footer Signatures & Official Gold Seal
  const footerY = 880;

  // Left Block: Verification Metadata
  ctx.textAlign = 'left';
  ctx.font = '500 12px "DM Mono", monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText(`DATE OF ISSUANCE:   ${date.toUpperCase()}`, 100, footerY + 20);
  ctx.fillText(`VERIFICATION CODE:  ${verificationCode}`, 100, footerY + 46);
  ctx.fillText('CATALOG CITATION:   NASA NSSDC MASTER CATALOGUE', 100, footerY + 72);
  ctx.fillStyle = '#38BDF8';
  ctx.fillText('STATUS: VERIFIED & SEALED BY NEBULA X ARCHIVE', 100, footerY + 98);

  // Center Block: Official Gold Seal
  const sealX = centerX;
  const sealY = footerY + 55;

  ctx.save();
  ctx.translate(sealX, sealY);

  // Outer radial teeth
  ctx.strokeStyle = '#FBBF24';
  ctx.lineWidth = 2;
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 44, Math.sin(a) * 44);
    ctx.lineTo(Math.cos(a) * 52, Math.sin(a) * 52);
    ctx.stroke();
  }

  // Concentric rings
  ctx.beginPath();
  ctx.arc(0, 0, 44, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
  ctx.beginPath();
  ctx.arc(0, 0, 36, 0, Math.PI * 2);
  ctx.stroke();

  // 8-Point Compass Star in Seal Core
  ctx.fillStyle = '#FBBF24';
  ctx.beginPath();
  for (let s = 0; s < 8; s++) {
    const angle = (s * Math.PI) / 4;
    const rOut = s % 2 === 0 ? 24 : 12;
    const px = Math.cos(angle) * rOut;
    const py = Math.sin(angle) * rOut;
    if (s === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();

  ctx.restore();

  ctx.textAlign = 'center';
  ctx.font = '700 9px "DM Mono", monospace';
  ctx.fillStyle = '#FBBF24';
  ctx.fillText('OFFICIAL ARCHIVE SEAL', sealX, sealY + 70);

  // Right Block: Official Sign-off
  const sigX = width - 100;
  ctx.textAlign = 'right';

  // Calligraphic cursive signature representation
  ctx.font = 'italic 26px "Space Grotesk", cursive';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Dr. Elena Vance & Dr. Marcus Thorne', sigX, footerY + 30);

  ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(sigX - 340, footerY + 45);
  ctx.lineTo(sigX, footerY + 45);
  ctx.stroke();

  ctx.font = '700 12px "DM Mono", monospace';
  ctx.fillStyle = '#38BDF8';
  ctx.fillText('NEBULA X CURATORIAL BOARD', sigX, footerY + 68);

  ctx.font = '500 11px "DM Mono", monospace';
  ctx.fillStyle = '#64748B';
  ctx.fillText('NASA SPACE APPS CHALLENGE · NSSDCA VALIDATOR', sigX, footerY + 90);
}
