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

	/**
	 * Initialisiert die Szene, Kamera, Renderer, Controls sowie Partikel und Linien.
	 */
	function init() {
		// Erzeuge Szene und lege Hintergrund fest
		scene = new THREE.Scene();

		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;

		// Kamera einrichten
		camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.z = 30;

		// Renderer konfigurieren
		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(width, height);
		canvasContainer.appendChild(renderer.domElement);

		// OrbitControls konfigurieren
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableZoom = true;
		controls.enablePan = false;
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 1.5;

		// Event-Listener für Fenstergröße
		window.addEventListener('resize', onWindowResize);

		// Partikelerzeugung
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

		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

		const particleMaterial = new THREE.PointsMaterial({
			color: new THREE.Color(0xffd700),
			size: 0.6,
			transparent: true,
			opacity: 0.9,
			sizeAttenuation: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});

		points = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(points);

		// Linien zwischen Partikeln erzeugen
		const linePositions: number[] = [];
		for (let i = 0; i < particleCount; i++) {
			for (let j = i + 1; j < particleCount; j++) {
				// Zufällige Verbindung: ca. 3,5 % der möglichen Kombinationen
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
			color: 0xffd700,
			opacity: 0.15,
			transparent: true
		});

		lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lines);

		// Starten der Animationsschleife
		animate();
	}

	/**
	 * Animationsschleife
	 */
	function animate() {
		animationFrameId = requestAnimationFrame(animate);
		controls.update(); // sorgt für dämpfende Steuerung und Auto-Rotation
		renderer.render(scene, camera);
	}

	/**
	 * Passt die Kamera- und Renderer-Größe beim Ändern der Fenstergröße an.
	 */
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
			// Renderer, Controls und eventuell benutzte Geometrien/Materialien freigeben
			renderer.dispose();
			controls.dispose();
		}
	});
</script>

<!-- Container für die 3D-Visualisierung -->
<div bind:this={canvasContainer} class="h-full w-full"></div>

<style>
	:global(canvas) {
		display: block;
		cursor: grab;
	}
</style>
