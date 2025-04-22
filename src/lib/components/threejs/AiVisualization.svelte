<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

	export let color = '#ffd700';
	export let autoRotate = true;
	export let autoRotateSpeed = 0.0015;
	export let particleCount = 120;

	let canvasContainer: HTMLDivElement;

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let points: THREE.Points;
	let lines: THREE.LineSegments;
	let controls: TrackballControls;
	let animationFrameId: number;
	let lastInteractionTime = 0;
	let initialized = false;

	const idleDelay = 0;
	let lastProps = { color, particleCount, autoRotate, autoRotateSpeed };

	function init() {
		initialized = true;
		scene = new THREE.Scene();

		const width = canvasContainer.offsetWidth || 600;
		const height = canvasContainer.offsetHeight || 400;

		camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.z = 30;

		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);
		renderer.domElement.style.opacity = '0';
		renderer.domElement.style.transition = 'opacity 1s ease';
		canvasContainer.appendChild(renderer.domElement);

		controls = new TrackballControls(camera, renderer.domElement);
		controls.rotateSpeed = 4.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.2;

		renderer.domElement.addEventListener('pointerdown', () => {
			lastInteractionTime = Date.now();
		});

		window.addEventListener('resize', onWindowResize);

		const positions = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount; i++) {
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(Math.random() * 2 - 1);
			const radius = 10 + Math.random() * 5;
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);
		}

		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		const particleMaterial = new THREE.PointsMaterial({
			color: new THREE.Color(color),
			size: 0.6,
			transparent: true,
			opacity: 0.6,
			sizeAttenuation: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});

		points = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(points);

		const linePositions: number[] = [];
		for (let i = 0; i < particleCount; i++) {
			for (let j = i + 1; j < particleCount; j++) {
				if (Math.random() < 0.035) {
					linePositions.push(
						positions[i * 3],
						positions[i * 3 + 1],
						positions[i * 3 + 2],
						positions[j * 3],
						positions[j * 3 + 1],
						positions[j * 3 + 2]
					);
				}
			}
		}

		const lineGeometry = new THREE.BufferGeometry();
		lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

		const lineMaterial = new THREE.LineBasicMaterial({
			color: new THREE.Color(color),
			opacity: 0.15,
			transparent: true
		});

		lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lines);

		requestAnimationFrame(() => {
			renderer.domElement.style.opacity = '1';
		});

		animate();
	}

	function cleanup() {
		cancelAnimationFrame(animationFrameId);
		window.removeEventListener('resize', onWindowResize);
		controls?.dispose();
		renderer?.dispose();
		renderer?.forceContextLoss?.();
		renderer?.domElement?.remove();
		points?.geometry.dispose();
		lines?.geometry.dispose();
	}

	function reinit() {
		if (!canvasContainer || !browser) return;
		cleanup();
		init();
	}

	function animate() {
		animationFrameId = requestAnimationFrame(animate);
		if (autoRotate && Date.now() - lastInteractionTime > idleDelay) {
			const delta = autoRotateSpeed;
			points.rotation.y += delta;
			lines.rotation.y += delta;
		}
		controls.update();
		renderer.render(scene, camera);
	}

	function onWindowResize() {
		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
		controls.handleResize();
	}

	onMount(() => {
		if (browser) init();
	});

	// 🔁 Nur reinitialisieren bei tatsächlicher Änderung
	$: if (
		browser &&
		initialized &&
		(color !== lastProps.color || particleCount !== lastProps.particleCount)
	) {
		lastProps = { color, particleCount, autoRotate, autoRotateSpeed };
		reinit();
	}

	onDestroy(() => {
		if (browser) cleanup();
	});
</script>

<div bind:this={canvasContainer} class="h-full w-full bg-transparent"></div>
