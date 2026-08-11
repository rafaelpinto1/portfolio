// hero-3d.js — fundo 3D do hero: céu de partículas cintilantes com constelações esparsas (Three.js).
// Progressive enhancement: se o Three.js não carregar, o hero segue funcional sem o canvas.
(function () {
    'use strict';

    try {
        if (typeof THREE === 'undefined') return;

        const canvas = document.getElementById('hero-canvas');
        const heroSection = document.querySelector('.hero.fullscreen');
        if (!canvas || !heroSection) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 640;

        function isDarkTheme() {
            return document.body.classList.contains('dark');
        }
        function getAccentColor() {
            // No modo claro, o accent puro fica pálido demais em normal-blending
            // sobre fundo quase branco — usamos accent-deep para contraste real.
            const varName = isDarkTheme() ? '--accent' : '--accent-deep';
            return getComputedStyle(document.body).getPropertyValue(varName).trim() || '#1d4ed8';
        }
        function hexToRgb01(hex) {
            const c = new THREE.Color(hex);
            return [c.r, c.g, c.b];
        }

        const STAR_COUNT = isMobile ? 200 : 420;
        const LINK_DISTANCE = isMobile ? 105 : 130;
        const MAX_LINKS = Math.round(STAR_COUNT * 1.6);

        let width = heroSection.clientWidth;
        let height = heroSection.clientHeight;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height, false);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
        camera.position.z = 480;

        const group = new THREE.Group();
        scene.add(group);

        const bounds = { x: width * 0.62, y: height * 0.58, z: 260 };
        const positions = new Float32Array(STAR_COUNT * 3);
        const velocities = [];
        const phases = new Float32Array(STAR_COUNT);
        const sizes = new Float32Array(STAR_COUNT);

        for (let i = 0; i < STAR_COUNT; i++) {
            positions[i * 3]     = (Math.random() * 2 - 1) * bounds.x;
            positions[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
            positions[i * 3 + 2] = (Math.random() * 2 - 1) * bounds.z;
            velocities.push({
                x: (Math.random() - 0.5) * 0.06,
                y: (Math.random() - 0.5) * 0.06,
                z: (Math.random() - 0.5) * 0.04,
            });
            phases[i] = Math.random() * Math.PI * 2;
            sizes[i] = (isMobile ? 4.2 : 5.2) + Math.random() * (isMobile ? 3.6 : 5.2);
        }

        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
        starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

        let accentColor = getAccentColor();
        const starUniforms = {
            uTime: { value: 0 },
            uColor: { value: new THREE.Vector3(...hexToRgb01(accentColor)) },
            uAlphaMul: { value: isDarkTheme() ? 1.0 : 1.0 },
        };

        const starMat = new THREE.ShaderMaterial({
            uniforms: starUniforms,
            transparent: true,
            depthWrite: false,
            blending: isDarkTheme() ? THREE.AdditiveBlending : THREE.NormalBlending,
            vertexShader: `
                attribute float aPhase;
                attribute float aSize;
                uniform float uTime;
                varying float vTwinkle;
                void main() {
                    vTwinkle = 0.5 + 0.5 * sin(uTime * 1.6 + aPhase);
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = aSize * (0.75 + vTwinkle * 0.55) * (420.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform float uAlphaMul;
                varying float vTwinkle;
                void main() {
                    vec2 uv = gl_PointCoord - vec2(0.5);
                    float d = length(uv);
                    float alpha = smoothstep(0.5, 0.0, d);
                    alpha *= (0.7 + vTwinkle * 0.3) * uAlphaMul;
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,
        });
        group.add(new THREE.Points(starGeo, starMat));

        const linePositions = new Float32Array(MAX_LINKS * 2 * 3);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const lineMat = new THREE.LineBasicMaterial({
            color: accentColor,
            transparent: true,
            opacity: isDarkTheme() ? 0.30 : 0.24,
            blending: isDarkTheme() ? THREE.AdditiveBlending : THREE.NormalBlending,
            depthWrite: false,
        });
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        group.add(lines);

        function applyThemeStyle() {
            const dark = isDarkTheme();
            accentColor = getAccentColor();
            const [r, g, b] = hexToRgb01(accentColor);
            starUniforms.uColor.value.set(r, g, b);
            starUniforms.uAlphaMul.value = dark ? 1.0 : 1.0;
            starMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
            starMat.needsUpdate = true;
            lineMat.color.set(accentColor);
            lineMat.opacity = dark ? 0.30 : 0.24;
            lineMat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
            lineMat.needsUpdate = true;
        }

        function updateLinks() {
            let idx = 0;
            const threshold = LINK_DISTANCE * LINK_DISTANCE;
            for (let i = 0; i < STAR_COUNT && idx < MAX_LINKS; i++) {
                for (let j = i + 1; j < STAR_COUNT && idx < MAX_LINKS; j++) {
                    const dx = positions[i * 3] - positions[j * 3];
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                    if (dx * dx + dy * dy + dz * dz < threshold) {
                        const base = idx * 6;
                        linePositions[base]     = positions[i * 3];
                        linePositions[base + 1] = positions[i * 3 + 1];
                        linePositions[base + 2] = positions[i * 3 + 2];
                        linePositions[base + 3] = positions[j * 3];
                        linePositions[base + 4] = positions[j * 3 + 1];
                        linePositions[base + 5] = positions[j * 3 + 2];
                        idx++;
                    }
                }
            }
            lineGeo.setDrawRange(0, idx * 2);
            lineGeo.attributes.position.needsUpdate = true;
        }

        let linkFrameCounter = 0;
        const LINK_UPDATE_EVERY = 6;

        let mouseX = 0;
        let mouseY = 0;
        heroSection.addEventListener('pointermove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        }, { passive: true });

        let rotY = 0;
        let rotX = 0;
        let elapsed = 0;
        let running = false;
        let rafId = null;
        const clock = new THREE.Clock();

        function tick() {
            if (!running) return;
            rafId = requestAnimationFrame(tick);

            const dt = Math.min(clock.getDelta(), 0.1);
            elapsed += dt;
            starUniforms.uTime.value = elapsed;

            for (let i = 0; i < STAR_COUNT; i++) {
                positions[i * 3]     += velocities[i].x;
                positions[i * 3 + 1] += velocities[i].y;
                positions[i * 3 + 2] += velocities[i].z;
                if (Math.abs(positions[i * 3]) > bounds.x) velocities[i].x *= -1;
                if (Math.abs(positions[i * 3 + 1]) > bounds.y) velocities[i].y *= -1;
                if (Math.abs(positions[i * 3 + 2]) > bounds.z) velocities[i].z *= -1;
            }
            starGeo.attributes.position.needsUpdate = true;

            linkFrameCounter++;
            if (linkFrameCounter % LINK_UPDATE_EVERY === 0) updateLinks();

            rotY += (mouseX * 0.05 - rotY) * 0.02;
            rotX += (-mouseY * 0.03 - rotX) * 0.02;
            group.rotation.y = rotY;
            group.rotation.x = rotX;

            renderer.render(scene, camera);
        }

        function start() {
            if (running || prefersReducedMotion) return;
            running = true;
            clock.getDelta();
            tick();
        }

        function stop() {
            running = false;
            if (rafId) cancelAnimationFrame(rafId);
        }

        function renderStaticFrame() {
            updateLinks();
            renderer.render(scene, camera);
        }

        function handleResize() {
            width = heroSection.clientWidth;
            height = heroSection.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
            if (prefersReducedMotion) renderStaticFrame();
        }
        window.addEventListener('resize', handleResize, { passive: true });

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) start();
                else stop();
            });
        }, { threshold: 0.01 });
        io.observe(heroSection);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stop();
            else if (heroSection.getBoundingClientRect().bottom > 0) start();
        });

        const themeToggleInput = document.getElementById('darkModeToggle');
        if (themeToggleInput) {
            themeToggleInput.addEventListener('change', () => {
                applyThemeStyle();
                if (prefersReducedMotion) renderStaticFrame();
            });
        }

        if (prefersReducedMotion) {
            renderStaticFrame();
        } else {
            start();
        }
    } catch (err) {
        // Progressive enhancement — o hero segue funcional sem o canvas 3D.
    }
})();
