"use client";

import { useEffect, useRef } from "react";

type Stream = {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  fontSize: number;
  chars: string[];
  timer: number;
};

const characters =
  "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let streams: Stream[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 768;

      const columnGap = isMobile ? 30 : 38;
      const columns = Math.ceil(width / columnGap);

      streams = Array.from({ length: columns }, (_, index) => {
        const fontSize = isMobile ? 11 : 13;

        return {
          x: index * columnGap + Math.random() * 10,
          y: Math.random() * height,
          speed: isMobile
            ? 0.3 + Math.random() * 0.5
            : 0.4 + Math.random() * 0.65,
          length: isMobile
            ? 5 + Math.floor(Math.random() * 7)
            : 7 + Math.floor(Math.random() * 11),
          opacity: isMobile
            ? 0.045 + Math.random() * 0.035
            : 0.035 + Math.random() * 0.045,
          fontSize,
          chars: Array.from(
            { length: 20 },
            () =>
              characters[
                Math.floor(Math.random() * characters.length)
              ]
          ),
          timer: Math.random() * 100,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      context.font = "13px monospace";
      context.textAlign = "center";

      for (const stream of streams) {
        stream.timer += 1;

        if (stream.timer > 8) {
          stream.timer = 0;

          const randomIndex = Math.floor(
            Math.random() * stream.chars.length
          );

          stream.chars[randomIndex] =
            characters[Math.floor(Math.random() * characters.length)];
        }

        for (let i = 0; i < stream.length; i++) {
          const y = stream.y - i * stream.fontSize;

          if (y < -20 || y > height + 20) {
            continue;
          }

          const character = stream.chars[i % stream.chars.length];
          const fade = 1 - i / stream.length;

          context.fillStyle = `rgba(34, 197, 94, ${
            stream.opacity * fade
          })`;

          context.fillText(character, stream.x, y);
        }

        stream.y += stream.speed;

        if (stream.y - stream.length * stream.fontSize > height) {
          stream.y = -Math.random() * 250;
          stream.speed = 0.35 + Math.random() * 0.65;
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90"
    />
  );
}