<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	let canvasContainer: HTMLDivElement;

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let points: THREE.Points;
	let lines: THREE.LineSegments;
	let controls: OrbitControls;
	let animationFrameId: number;

	function init() {
		scene = new THREE.Scene();

		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;

		camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.z = 30;

		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(width, height);
		canvasContainer.appendChild(renderer.domElement);

		// OrbitControls
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableZoom = true;
		controls.enablePan = false;
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 1.5;

		window.addEventListener('resize', onWindowResize);

		const particleCount = 120;
		const positions = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount; i++) {
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(Math.random() * 2 - 1);
			const radius = 10 + Math.random() * 5;
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		const material = new THREE.PointsMaterial({
			color: new THREE.Color(0xffd700),
			size: 0.6,
			transparent: true,
			opacity: 0.9,
			sizeAttenuation: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});

		points = new THREE.Points(geometry, material);
		scene.add(points);

		const lineGeometry = new THREE.BufferGeometry();
		const linePositions = [];

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

		lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
		const lineMaterial = new THREE.LineBasicMaterial({
			color: 0xffd700,
			opacity: 0.15,
			transparent: true
		});

		lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lines);

		animate();
	}

	function animate() {
		animationFrameId = requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}

	function onWindowResize() {
		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	onMount(() => {
		if (browser) {
			init();
		}
	});

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', onWindowResize);
			renderer.dispose();
			controls.dispose();
		}
	});
</script>

<div bind:this={canvasContainer} class="h-full w-full"></div>

<style>
	:global(canvas) {
		display: block;
		cursor: grab;
	}
</style>
