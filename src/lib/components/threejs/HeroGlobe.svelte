<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	let canvasContainer: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let controls: OrbitControls;
	let animationFrameId: number;

	const globeRadius = 30;

	const points: [number, number][] = [
		[10, 50], // Europa
		[-100, 40], // Nordamerika
		[-60, -20], // Südamerika
		[20, -10], // Afrika
		[100, 35], // Asien
		[135, -25], // Australien
		[0, -90] // Antarktis
	];

	// Speichert Kurven und zugehörige Punkte für Bewegung
	const flows: { curve: THREE.CatmullRomCurve3; point: THREE.Mesh }[] = [];

	function latLonToVector3(lat: number, lon: number, radius: number) {
		const phi = (90 - lat) * (Math.PI / 180);
		const theta = (lon + 180) * (Math.PI / 180);
		const x = -radius * Math.sin(phi) * Math.cos(theta);
		const y = radius * Math.cos(phi);
		const z = radius * Math.sin(phi) * Math.sin(theta);
		return new THREE.Vector3(x, y, z);
	}

	function init() {
		scene = new THREE.Scene();
		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;

		camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
		camera.position.z = 100;

		renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(width, height);
		canvasContainer.appendChild(renderer.domElement);

		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.enableRotate = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.2;
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;

		window.addEventListener('resize', onWindowResize);

		// Kugel
		const globeGeom = new THREE.SphereGeometry(globeRadius, 32, 32);
		const globeMat = new THREE.MeshBasicMaterial({
			color: 0xffd700,
			wireframe: true,
			transparent: true,
			opacity: 0.15
		});
		const globeMesh = new THREE.Mesh(globeGeom, globeMat);
		scene.add(globeMesh);

		// Geo-Points
		const vectors = points.map(([lon, lat]) => latLonToVector3(lat, lon, globeRadius));
		const nodeGeom = new THREE.SphereGeometry(0.8, 12, 12);
		const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
		vectors.forEach((vec) => {
			const node = new THREE.Mesh(nodeGeom, nodeMat);
			node.position.copy(vec);
			scene.add(node);
		});

		// Verbindungen + Datenpunkte
		const infoMat = new THREE.MeshBasicMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.8
		});
		const infoGeom = new THREE.SphereGeometry(0.25, 8, 8);

		vectors.forEach((start, i) => {
			vectors.forEach((end, j) => {
				if (j <= i) return;

				const mid = new THREE.Vector3()
					.addVectors(start, end)
					.normalize()
					.multiplyScalar(globeRadius * 1.6);

				const curve = new THREE.CatmullRomCurve3([start, mid, end]);
				const pts = curve.getPoints(100);
				const geom = new THREE.BufferGeometry().setFromPoints(pts);

				const lineMat = new THREE.LineDashedMaterial({
					color: 0xffffff,
					dashSize: 1,
					gapSize: 1,
					transparent: true,
					opacity: 0.4
				});

				const line = new THREE.Line(geom, lineMat);
				line.computeLineDistances();
				scene.add(line);

				// Info-Punkt (einzeln pro Linie)
				const infoDot = new THREE.Mesh(infoGeom, infoMat.clone());
				scene.add(infoDot);

				flows.push({ curve, point: infoDot });
			});
		});

		animate();
	}

	function animate() {
		const time = performance.now() * 0.0002;

		flows.forEach(({ curve, point }, idx) => {
			const t = (time + idx * 0.1) % 1;
			const pos = curve.getPointAt(t);
			point.position.copy(pos);
		});

		controls.update();
		renderer.render(scene, camera);
		animationFrameId = requestAnimationFrame(animate);
	}

	function onWindowResize() {
		const width = canvasContainer.offsetWidth;
		const height = canvasContainer.offsetHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}

	onMount(() => {
		if (browser) init();
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
		cursor: default;
	}
</style>
