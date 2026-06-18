/* ============================================================
   CultureMed — Three.js ambient background
   Soft floating "care" particles + drifting organic blobs in
   sage/cream tones. Reacts gently to pointer + scroll.
   Lightweight, fixed behind content, pointer-events: none.
   ============================================================ */
(function () {
  const canvas = document.querySelector("[data-three]");
  if (!canvas || typeof THREE === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
  camera.position.z = 14;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  const palette = [0x2f6fc0, 0x5a93d8, 0x8fb9e6, 0xbcd6f0, 0x163a72];

  // ---- Floating particle field ----
  const COUNT = 220;
  const positions = new Float32Array(COUNT * 3);
  const speeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 38;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 26;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    speeds[i] = 0.15 + Math.random() * 0.5;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const sprite = makeDotTexture();
  const pMat = new THREE.PointsMaterial({
    size: 0.5, map: sprite, transparent: true, opacity: 0.55,
    color: 0x5a93d8, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // ---- Drifting soft blobs (icosahedron, wobbly, flat-shaded) ----
  const blobs = [];
  for (let i = 0; i < 5; i++) {
    const geo = new THREE.IcosahedronGeometry(THREE.MathUtils.randFloat(1.6, 3.2), 1);
    const mat = new THREE.MeshStandardMaterial({
      color: palette[i % palette.length],
      transparent: true, opacity: 0.16, roughness: 0.9, metalness: 0,
      flatShading: true
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((Math.random() - 0.5) * 26, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * -6 - 2);
    mesh.userData = {
      rot: new THREE.Vector3((Math.random() - 0.5) * 0.0015, (Math.random() - 0.5) * 0.0015, 0),
      floatOffset: Math.random() * Math.PI * 2,
      floatAmp: 0.4 + Math.random() * 0.6,
      base: mesh.position.clone()
    };
    scene.add(mesh);
    blobs.push(mesh);
  }

  const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(5, 8, 6); scene.add(key);
  scene.add(new THREE.AmbientLight(0xbcd6f0, 0.7));

  // ---- Interaction ----
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener("pointermove", (e) => {
    pointer.tx = (e.clientX / innerWidth - 0.5);
    pointer.ty = (e.clientY / innerHeight - 0.5);
  });
  let scrollY = 0;
  addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();
    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;

    // particle drift upward + reset
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 1] += speeds[i] * 0.01;
      pos[i * 3] += Math.sin(t * 0.3 + i) * 0.002;
      if (pos[i * 3 + 1] > 14) pos[i * 3 + 1] = -14;
    }
    pGeo.attributes.position.needsUpdate = true;
    points.rotation.y = pointer.x * 0.3;

    blobs.forEach((b, i) => {
      b.rotation.x += b.userData.rot.x; b.rotation.y += b.userData.rot.y + 0.001;
      b.position.y = b.userData.base.y + Math.sin(t * 0.4 + b.userData.floatOffset) * b.userData.floatAmp;
      b.position.x = b.userData.base.x + pointer.x * (1 + i * 0.4);
    });

    camera.position.x += (pointer.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (-pointer.y * 1.5 - scrollY * 0.0008 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();

  function makeDotTexture() {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(180,210,245,0.7)");
    g.addColorStop(1, "rgba(180,210,245,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c); return tex;
  }
})();
