"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let gl: WebGLRenderingContext | null = null;

    try {
      gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
    } catch {
      gl = null;
    }

    if (gl) {
      // WebGL Shader implementation for volumetric fluid light smoke
      const vsSource = `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision mediump float;
        uniform vec2 u_resolution;
        uniform float u_time;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
          m = m * m;
          m = m * m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        float fbm(vec2 p) {
          float f = 0.0;
          f += 0.5000 * snoise(p); p *= 2.02;
          f += 0.2500 * snoise(p); p *= 2.03;
          f += 0.1250 * snoise(p); p *= 2.01;
          f += 0.0625 * snoise(p);
          return f;
        }

        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          st.x *= u_resolution.x / u_resolution.y;

          // Slow, hypnotic autonomous smoke drift (NO mouse tracking)
          float t = u_time * 0.09;

          // Multi-octave domain warping for swirling smoke tendrils
          vec2 q = vec2(
            fbm(st * 1.3 + vec2(0.0, 0.0) + vec2(0.02 * t, 0.04 * t)),
            fbm(st * 1.3 + vec2(5.2, 1.3) + vec2(-0.03 * t, 0.03 * t))
          );

          vec2 r = vec2(
            fbm(st * 1.3 + 3.8 * q + vec2(1.7, 9.2) + vec2(0.03 * t, -0.02 * t)),
            fbm(st * 1.3 + 3.8 * q + vec2(8.3, 2.8) + vec2(-0.02 * t, 0.04 * t))
          );

          float smoke = fbm(st * 1.1 + 3.2 * r + vec2(0.01 * t, 0.025 * t));
          smoke = smoothstep(-0.4, 0.8, smoke);

          // PURE RADIANT LIGHT PALETTE
          vec3 bg = vec3(1.0, 1.0, 1.0); // Clean White Canvas

          // Smoke Wisps in delicate light colors
          vec3 vapor = vec3(0.96, 0.98, 1.0);      // Soft pearl mist
          vec3 cyanSmoke = vec3(0.05, 0.70, 0.88);  // Cyan light smoke
          vec3 blueSmoke = vec3(0.20, 0.50, 0.98);  // Azure light smoke
          vec3 mintSmoke = vec3(0.10, 0.80, 0.60);  // Fresh mint smoke

          vec3 smokeColor = mix(vapor, cyanSmoke, clamp(length(q) * 0.35, 0.0, 1.0));
          smokeColor = mix(smokeColor, blueSmoke, clamp(length(r.x) * 0.28, 0.0, 1.0));
          smokeColor = mix(smokeColor, mintSmoke, clamp(length(r.y) * 0.22, 0.0, 1.0));

          // Translucent smoke density (delicate, airy, never dark)
          float density = smoothstep(0.08, 0.85, smoke) * 0.16;
          vec3 finalColor = mix(bg, smokeColor, density);

          // Gentle top ambient illumination wash
          float topWash = smoothstep(1.0, 0.0, gl_FragCoord.y / u_resolution.y);
          finalColor = mix(finalColor, vec3(0.95, 0.98, 1.0), topWash * 0.12);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `;

      const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
        const shader = glCtx.createShader(type);
        if (!shader) return null;
        glCtx.shaderSource(shader, source);
        glCtx.compileShader(shader);
        if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
          glCtx.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

      if (vertShader && fragShader) {
        const program = gl.createProgram();
        if (program) {
          gl.attachShader(program, vertShader);
          gl.attachShader(program, fragShader);
          gl.linkProgram(program);

          if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
              gl.STATIC_DRAW
            );

            const posLoc = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(posLoc);
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

            const resLoc = gl.getUniformLocation(program, "u_resolution");
            const timeLoc = gl.getUniformLocation(program, "u_time");

            const resize = () => {
              const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
              canvas.width = Math.floor(window.innerWidth * dpr * 0.6); // Scaled for lightweight 60-120fps
              canvas.height = Math.floor(window.innerHeight * dpr * 0.6);
              gl!.viewport(0, 0, canvas.width, canvas.height);
              if (resLoc) gl!.uniform2f(resLoc, canvas.width, canvas.height);
            };

            resize();
            window.addEventListener("resize", resize);

            const startTime = performance.now();
            const render = (now: number) => {
              const elapsed = (now - startTime) * 0.001;
              if (timeLoc) gl!.uniform1f(timeLoc, elapsed);
              gl!.drawArrays(gl!.TRIANGLES, 0, 6);
              animId = requestAnimationFrame(render);
            };

            animId = requestAnimationFrame(render);

            return () => {
              cancelAnimationFrame(animId);
              window.removeEventListener("resize", resize);
              if (program) gl?.deleteProgram(program);
            };
          }
        }
      }
    }

    // High-performance 2D Canvas Fallback (if WebGL is unavailable)
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Ethereal light smoke particles
    const smokePuffs = Array.from({ length: 8 }, (_, i) => ({
      x: (width / 8) * i + Math.random() * 100,
      y: height * 0.3 + Math.random() * (height * 0.5),
      radius: 260 + Math.random() * 180,
      vx: 0.15 + Math.random() * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? "rgba(6, 182, 212, 0.07)" : "rgba(37, 99, 235, 0.06)",
    }));

    const render2D = (time: number) => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      smokePuffs.forEach((puff, idx) => {
        puff.x += puff.vx;
        puff.y += Math.sin(time * 0.001 + puff.phase) * 0.3;

        if (puff.x - puff.radius > width) {
          puff.x = -puff.radius;
        }

        const grad = ctx.createRadialGradient(
          puff.x,
          puff.y,
          0,
          puff.x,
          puff.y,
          puff.radius
        );
        grad.addColorStop(0, puff.color);
        grad.addColorStop(0.6, idx % 3 === 0 ? "rgba(16, 185, 129, 0.03)" : "rgba(56, 189, 248, 0.03)");
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render2D);
    };

    animId = requestAnimationFrame(render2D);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* 1. Hardware-Accelerated Volumetric Smoke Canvas (Light colors, 0 mouse tracking) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-md transform-gpu"
        style={{ opacity: 0.92 }}
      />

      {/* 2. Soft Luminous Gradient Sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_-15%,rgba(37,99,235,0.08),transparent_75%)]" />

      {/* 3. Delicate Architectural Structure Micro-Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15, 23, 42, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 95%)",
        }}
      />
    </div>
  );
}
