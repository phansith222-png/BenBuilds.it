"use client";

import { useRef, useEffect } from "react";

interface DotGridProps {
  spacing?: number;
  dotRadius?: number;
  influenceRadius?: number;
  maxScale?: number;
  lerpFactor?: number;
  className?: string;
}

const FAR_DOT_COLOR = "rgba(255,255,255,0.10)";

function interpolateColor(t: number): string {
  if (t <= 0.4) {
    const s = t / 0.4;
    const r = Math.round(253 + 2 * s);
    const g = Math.round(111 + 144 * s);
    const b = Math.round(255 * s);
    const a = (1 - s * 0.75).toFixed(3);
    return `rgba(${r},${g},${b},${a})`;
  }
  const s = (t - 0.4) / 0.6;
  const a = (0.25 - s * 0.15).toFixed(3);
  return `rgba(255,255,255,${a})`;
}

export function DotGrid({
  spacing = 28,
  dotRadius = 1.5,
  influenceRadius = 140,
  maxScale = 3.5,
  lerpFactor = 0.08,
  className,
}: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const smoothRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const containerEl = containerRef.current;
    const canvasEl = canvasRef.current;
    if (!containerEl || !canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const container: HTMLDivElement = containerEl;
    const canvas: HTMLCanvasElement = canvasEl;
    const context: CanvasRenderingContext2D = ctx;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const dpr = window.devicePixelRatio ?? 1;
    const radiusSq = influenceRadius * influenceRadius;

    const resize = () => {
      canvas.width = Math.floor(container.offsetWidth * dpr);
      canvas.height = Math.floor(container.offsetHeight * dpr);
      context.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Listen on window so events over the photo and navbar are captured too.
    // Calculate position relative to the canvas bounds; reset when outside.
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorRef.current =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
          ? { x, y }
          : { x: -9999, y: -9999 };
    };

    if (!isTouch) {
      window.addEventListener("mousemove", onMouseMove);
    }

    const draw = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      const smooth = smoothRef.current;
      const cursor = cursorRef.current;
      smooth.x += (cursor.x - smooth.x) * lerpFactor;
      smooth.y += (cursor.y - smooth.y) * lerpFactor;

      context.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing;
          const y = row * spacing;
          const dx = x - smooth.x;
          const dy = y - smooth.y;
          const distSq = dx * dx + dy * dy;

          context.beginPath();
          if (isTouch || distSq > radiusSq) {
            context.arc(x, y, dotRadius, 0, Math.PI * 2);
            context.fillStyle = FAR_DOT_COLOR;
          } else {
            const t = Math.sqrt(distSq) / influenceRadius;
            const scale = 1 + (maxScale - 1) * Math.pow(1 - t, 2);
            context.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
            context.fillStyle = interpolateColor(t);
          }
          context.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
      if (!isTouch) {
        window.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [spacing, dotRadius, influenceRadius, maxScale, lerpFactor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className ?? ""}`}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
