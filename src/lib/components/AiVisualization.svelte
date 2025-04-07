<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	let container: HTMLDivElement;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let controls: OrbitControls;
	let animationFrameId: number;

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 4;

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.replaceChildren(renderer.domElement);

		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.5;

		// Punktwolke
		const geometry = new THREE.BufferGeometry();
		const vertices: number[] = [];
		const positions: THREE.Vector3[] = [];
		const r = 1.5;
		for (let i = 0; i < 500; i++) {
			const phi = Math.acos(2 * Math.random() - 1);
			const theta = 2 * Math.PI * Math.random();
			const x = r * Math.sin(phi) * Math.cos(theta);
			const y = r * Math.sin(phi) * Math.sin(theta);
			const z = r * Math.cos(phi);
			vertices.push(x, y, z);
			positions.push(new THREE.Vector3(x, y, z));
		}
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

		const material = new THREE.PointsMaterial({ color: 'gold', size: 0.03 });
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		// Glow (Sprite) an jedem Punkt
		const glowTexture = new THREE.TextureLoader().load(
			'https://threejs.org/examples/textures/sprites/glow.png'
		);
		for (const pos of positions) {
			const spriteMaterial = new THREE.SpriteMaterial({
				map: glowTexture,
				color: 0xffd700,
				transparent: true,
				blending: THREE.AdditiveBlending,
				opacity: 0.3
			});
			const sprite = new THREE.Sprite(spriteMaterial);
			sprite.position.copy(pos);
			sprite.scale.set(0.1, 0.1, 1);
			scene.add(sprite);
		}

		// Verbindungen als Linien
		const lineMaterial = new THREE.LineBasicMaterial({
			color: 0xffd700,
			transparent: true,
			opacity: 0.1
		});
		const lineGeometry = new THREE.BufferGeometry();
		const lineVertices: number[] = [];
		for (let i = 0; i < positions.length; i++) {
			for (let j = i + 1; j < positions.length; j++) {
				const dist = positions[i].distanceTo(positions[j]);
				if (dist < 0.3) {
					lineVertices.push(...positions[i].toArray(), ...positions[j].toArray());
				}
			}
		}
		lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
		const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lineSegments);

		const light = new THREE.PointLight(0xffffff, 1);
		light.position.set(5, 5, 5);
		scene.add(light);

		const handleResize = () => {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		};
		window.addEventListener('resize', handleResize);

		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
			geometry.dispose();
			material.dispose();
			lineGeometry.dispose();
			lineMaterial.dispose();
			controls.dispose();
		};
	});
</script>

<section class="bg-base-100 px-6 py-20">
	<div class="mx-auto max-w-6xl text-center">
		<h2 class="mb-6 text-xl font-semibold">A.M.A.R.A. – Das digitale Nervensystem</h2>
		<div bind:this={container} class="three-container"></div>
	</div>
</section>

<style>
	.three-container {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;
		background-color: var(--fallback-b1, hsl(var(--b1)));
		overflow: hidden;
	}
</style>
