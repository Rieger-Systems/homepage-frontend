<template>
  <client-only>
    <div ref="container" class="w-full h-[600px] relative overflow-hidden">
      <div
        v-if="!initialized"
        class="absolute inset-0 flex items-center justify-center z-10 bg-base-100/80 backdrop-blur-sm"
      >
        <span class="loading loading-ring loading-lg text-primary"></span>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as THREE from "three";

const container = ref<HTMLElement | null>(null);
const initialized = ref(false);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let pointGroup: THREE.Group;
let points: THREE.Points;
let animationFrameId: number;

interface Impulse {
  mesh: THREE.Mesh;
  trail: THREE.Line;
  a: THREE.Vector3;
  b: THREE.Vector3;
  t: number;
  active: boolean;
  cooldown: number;
}

const impulses: Impulse[] = [];
const persistentTrails: { line: THREE.Line; age: number }[] = [];

const MAX_TRAILS = 200;
const MAX_IMPULSES = 10;

onMounted(async () => {
  await nextTick();
  if (!container.value) return;

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0d0d1f, 0.3);

  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 0, 4);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.2));
  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(4, 4, 4);
  scene.add(pointLight);

  pointGroup = new THREE.Group();
  scene.add(pointGroup);

  const count = 180;
  const positions = new Float32Array(count * 3);
  const pointVectors: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.4 + Math.random() * 0.2;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    positions.set([x, y, z], i * 3);
    pointVectors.push(new THREE.Vector3(x, y, z));
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: "#e4c57c",
      size: 0.09,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  pointGroup.add(points);

  const impulseMaterial = new THREE.MeshBasicMaterial({
    color: "#fff9c4",
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const impulseGeometry = new THREE.SphereGeometry(0.015, 8, 8);

  for (let i = 0; i < MAX_IMPULSES; i++) {
    const mesh = new THREE.Mesh(impulseGeometry, impulseMaterial.clone());
    mesh.visible = false;
    pointGroup.add(mesh);

    const trailGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
    const trailMat = new THREE.LineBasicMaterial({
      color: "#fffbe0",
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const trail = new THREE.Line(trailGeo, trailMat);
    trail.visible = false;
    pointGroup.add(trail);

    impulses.push({
      mesh,
      trail,
      a: new THREE.Vector3(),
      b: new THREE.Vector3(),
      t: 0,
      active: false,
      cooldown: Math.random() * 3 + 1,
    });
  }

  const animate = () => {
    pointGroup.rotation.y += 0.001;

    for (const trail of persistentTrails) {
      trail.age += 0.01;
      const alpha = Math.max(0, 0.3 - trail.age * 0.02);
      const mat = trail.line.material as THREE.LineBasicMaterial;
      mat.opacity = alpha;
      if (alpha <= 0) {
        pointGroup.remove(trail.line);
      }
    }

    if (persistentTrails.length > MAX_TRAILS) {
      const oldest = persistentTrails.shift();
      if (oldest) pointGroup.remove(oldest.line);
    }

    for (const impulse of impulses) {
      if (impulse.active) {
        impulse.t += 0.015;
        if (impulse.t >= 1) {
          impulse.mesh.visible = false;
          impulse.trail.visible = false;
          impulse.active = false;
          impulse.cooldown = Math.random() * 3 + 1;

          const pathGeo = new THREE.BufferGeometry().setFromPoints([
            impulse.a.clone(),
            impulse.b.clone(),
          ]);
          const pathMat = new THREE.LineBasicMaterial({
            color: "#fde68a",
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
          });
          const pathLine = new THREE.Line(pathGeo, pathMat);
          pointGroup.add(pathLine);
          persistentTrails.push({ line: pathLine, age: 0 });
        } else {
          const pos = new THREE.Vector3().lerpVectors(
            impulse.a,
            impulse.b,
            impulse.t
          );
          impulse.mesh.position.copy(pos);
          impulse.mesh.visible = true;

          const tail = new THREE.Vector3().lerpVectors(
            impulse.a,
            impulse.b,
            impulse.t - 0.1
          );
          impulse.trail.geometry.setFromPoints([tail, pos]);
          impulse.trail.geometry.attributes.position.needsUpdate = true;
          impulse.trail.visible = true;

          const scale = 1 + Math.sin(Date.now() * 0.01) * 0.2;
          impulse.mesh.scale.set(scale, scale, scale);
        }
      } else {
        impulse.cooldown -= 0.016;
        if (impulse.cooldown <= 0) {
          const a =
            pointVectors[Math.floor(Math.random() * pointVectors.length)];
          const b =
            pointVectors[Math.floor(Math.random() * pointVectors.length)];
          if (!a.equals(b)) {
            impulse.a.copy(a);
            impulse.b.copy(b);
            impulse.t = 0;
            impulse.active = true;
            impulse.mesh.visible = true;
            impulse.trail.visible = true;
          }
        }
      }
    }

    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  };

  animate();
  initialized.value = true;
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", handleResize);
  if (renderer && container.value?.contains(renderer.domElement)) {
    renderer.dispose();
    container.value.removeChild(renderer.domElement);
  }
});

function handleResize() {
  if (!container.value || !camera || !renderer) return;
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  position: relative;
}
canvas {
  display: block;
  border-radius: 0.5rem;
}
</style>
