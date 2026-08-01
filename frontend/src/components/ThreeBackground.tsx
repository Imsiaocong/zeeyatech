'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0.15, 2.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const starsGeo = new THREE.BufferGeometry();
    const starsCount = 300;
    const starsPos = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    const palette = [
      new THREE.Color('#3b82f6'), new THREE.Color('#a855f7'),
      new THREE.Color('#22d3ee'), new THREE.Color('#ec4899')
    ];
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPos[i] = (Math.random() - 0.5) * 6;
      starsPos[i + 1] = (Math.random() - 0.5) * 5;
      starsPos[i + 2] = (Math.random() - 0.5) * 3;
      const c = palette[Math.floor(Math.random() * palette.length)];
      starsColors[i] = c.r; starsColors[i + 1] = c.g; starsColors[i + 2] = c.b;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    const starsMat = new THREE.PointsMaterial({
      size: 0.018, vertexColors: true, transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.00015;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
