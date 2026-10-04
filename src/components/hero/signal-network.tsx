'use client';
import { isReducedMotion } from '@/lib/motion';
import { useEffect, useRef } from 'react';
export function SignalNetwork() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const context = element.getContext('2d');
    if (!context) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0,
      visible = true,
      last = 0;
    let width = 0,
      height = 0;
    const pointer = { x: -1000, y: -1000 };
    const points = Array.from({ length: 70 }, (_, i) => ({
      angle: i * 2.39996,
      radius: Math.sqrt((i + 1) / 70) * 0.43,
      size: i % 9 === 0 ? 3 : 1.3,
    }));
    function draw(time: number) {
      if (!context || !element) return;
      context.clearRect(0, 0, width, height);
      const dark = document.documentElement.dataset.theme === 'dark';
      const rotation = isReducedMotion() ? 0 : time * 0.000018;
      const nodes = points.map((p) => ({
        x: width / 2 + Math.cos(p.angle + rotation) * p.radius * width,
        y: height / 2 + Math.sin(p.angle + rotation) * p.radius * height * 0.76,
        size: p.size,
      }));
      context.lineWidth = 0.65;
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < width * 0.155) {
            context.strokeStyle = dark ? 'rgba(138,166,255,0.17)' : 'rgba(35,79,212,0.17)';
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(q.x, q.y);
            context.stroke();
          }
        }
        const near = Math.hypot(p.x - pointer.x, p.y - pointer.y) < 90;
        context.fillStyle = near
          ? '#e6a957'
          : p.size > 2
            ? '#5887ff'
            : dark
              ? '#7187a4'
              : '#8791a4';
        context.beginPath();
        context.arc(p.x, p.y, near ? p.size + 2 : p.size, 0, Math.PI * 2);
        context.fill();
      }
      if (!isReducedMotion() && visible)
        frame = requestAnimationFrame((t) => {
          if (t - last > 30) {
            last = t;
            draw(t);
          } else frame = requestAnimationFrame(draw);
        });
    }
    const resize = () => {
      const rect = element.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(devicePixelRatio, 2);
      element.width = width * ratio;
      element.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      cancelAnimationFrame(frame);
      draw(0);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    const visibility = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) draw(0);
    });
    visibility.observe(element);
    const move = (e: PointerEvent) => {
      if (isReducedMotion() || e.pointerType !== 'mouse') return;
      const r = element.getBoundingClientRect();
      pointer.x = e.clientX - r.x;
      pointer.y = e.clientY - r.y;
    };
    const leave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };
    element.addEventListener('pointermove', move);
    element.addEventListener('pointerleave', leave);
    const update = () => {
      cancelAnimationFrame(frame);
      draw(0);
    };
    media.addEventListener('change', update);
    window.addEventListener('portfolio-theme', update);
    window.addEventListener('portfolio-motion', update);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', leave);
      media.removeEventListener('change', update);
      window.removeEventListener('portfolio-theme', update);
      window.removeEventListener('portfolio-motion', update);
    };
  }, []);
  return (
    <div className="signal-network" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <canvas ref={canvas} />
      <span className="network-tag network-tag-one">SYSTEM</span>
      <span className="network-tag network-tag-two">SIGNAL</span>
      <span className="network-tag network-tag-three">FLOW</span>
      <div className="network-center">
        <span>AS</span>
        <i />
      </div>
    </div>
  );
}
