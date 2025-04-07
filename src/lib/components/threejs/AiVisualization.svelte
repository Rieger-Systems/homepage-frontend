<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let canvasContainer: HTMLDivElement;

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let points: THREE.Points;
	let lines: THREE.LineSegments;
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

		window.addEventListener('resize', onWindowResize);

		// Generate points
		const particleCount = 100;
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
			color: 0xffd700,
			size: 0.5,
			transparent: true,
			opacity: 0.9
		});

		points = new THREE.Points(geometry, material);
		scene.add(points);

		// Add random connections
		const lineGeometry = new THREE.BufferGeometry();
		const linePositions = [];

		for (let i = 0; i < particleCount; i++) {
			for (let j = i + 1; j < particleCount; j++) {
				if (Math.random() < 0.03) {
					// Low chance for random connection
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
			opacity: 0.3,
			transparent: true
		});

		lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lines);

		animate();
	}

	function animate() {
		animationFrameId = requestAnimationFrame(animate);
		points.rotation.y += 0.002;
		points.rotation.x += 0.001;
		lines.rotation.y += 0.002;
		lines.rotation.x += 0.001;
		renderer.render(scene, camera);
	}

	function onWindowResize() {
		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	onMount(init);

	onDestroy(() => {
		cancelAnimationFrame(animationFrameId);
		window.removeEventListener('resize', onWindowResize);
		renderer.dispose();
	});
</script>

<div bind:this={canvasContainer} class="h-[400px] w-full"></div>
