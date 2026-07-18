import {
  AbsoluteFill,
  Composition,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import type { ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/* Brand tokens (kept in sync with src/index.css on the landing page) */
/* ------------------------------------------------------------------ */
const C = {
  bg: '#0E0E0E',
  text: '#F4F1EB',
  muted: '#AFAAA2',
  faint: '#69645E',
  red: '#F04A35',
  accent: '#FF4B35',
  darkRed: '#7A1D16',
  card: '#151515',
  borderSubtle: 'rgba(255,255,255,0.08)',
  borderRed: 'rgba(255,75,53,0.28)',
  green: '#5BD6A0',
};

const FONT_SANS = "'Inter', system-ui, -apple-system, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace";

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function TypeLine({
  text,
  start,
  cps = 32,
  prompt,
  color = C.text,
}: {
  text: string;
  start: number;
  cps?: number;
  prompt?: string;
  color?: string;
}) {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = f - start;
  const visible = Math.max(0, Math.min(text.length, Math.floor((local * cps) / fps)));
  const typing = visible < text.length;
  const caret = typing && Math.floor(f / 12) % 2 === 0;
  return (
    <div style={{ fontFamily: FONT_MONO, fontSize: 26, lineHeight: 1.7, color }}>
      {prompt && <span style={{ color: C.red, marginRight: 10 }}>{prompt}</span>}
      <span>{text.slice(0, visible)}</span>
      {caret && <span style={{ color: C.red }}>▋</span>}
    </div>
  );
}

function RevealLine({
  children,
  start,
  color = C.muted,
  delay = 0,
}: {
  children: ReactNode;
  start: number;
  color?: string;
  delay?: number;
}) {
  const f = useCurrentFrame();
  const local = f - start - delay;
  const opacity = interpolate(local, [0, 14], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const y = interpolate(local, [0, 14], [10, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  if (local < 0) return null;
  return (
    <div style={{ fontFamily: FONT_MONO, fontSize: 24, lineHeight: 1.6, color, opacity, transform: `translateY(${y}px)` }}>
      {children}
    </div>
  );
}

function CheckRow({ label, start }: { label: string; start: number }) {
  const f = useCurrentFrame();
  const local = f - start;
  const on = local > 0;
  const pop = spring({ frame: Math.max(0, local), fps: 30, config: { damping: 14, stiffness: 220 } });
  const opacity = interpolate(local, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, opacity, transform: `scale(${0.9 + pop * 0.1})` }}>
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          background: on ? C.red : 'transparent',
          border: `1.5px solid ${on ? C.red : C.faint}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        {on ? '✓' : ''}
      </span>
      <span style={{ fontFamily: FONT_MONO, fontSize: 23, color: on ? C.text : C.faint }}>{label}</span>
    </div>
  );
}

function Badge({ children, start = 0 }: { children: ReactNode; start?: number }) {
  const f = useCurrentFrame();
  const enter = spring({ frame: Math.max(0, f - start), fps: 30, config: { damping: 16, stiffness: 180 } });
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 16px',
        borderRadius: 999,
        border: `1px solid ${C.borderRed}`,
        background: 'rgba(240,74,53,0.10)',
        color: C.accent,
        fontFamily: FONT_SANS,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 0.5,
        transform: `scale(${enter})`,
        opacity: enter,
      }}
    >
      {children}
    </div>
  );
}

function Mascot({ size = 64, color = C.red }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ color }}>
      <path
        d="M50 8 C28 8 12 24 12 46 L12 72 L20 64 L28 72 L36 64 L44 72 L50 64 L56 72 L64 64 L72 72 L80 64 L88 72 L88 46 C88 24 72 8 50 8Z"
        fill="currentColor"
      />
      <circle cx="38" cy="42" r="5" fill="#fff" />
      <circle cx="62" cy="42" r="5" fill="#fff" />
    </svg>
  );
}

function Window({
  title,
  children,
  start = 0,
  width = 1180,
  height = 560,
}: {
  title: string;
  children: ReactNode;
  start?: number;
  width?: number;
  height?: number;
}) {
  const f = useCurrentFrame();
  const enter = spring({ frame: Math.max(0, f - start), fps: 30, config: { damping: 18, stiffness: 140 } });
  const y = interpolate(enter, [0, 1], [40, 0]);
  return (
    <div
      style={{
        width,
        opacity: enter,
        transform: `translateY(${y}px) scale(${0.94 + enter * 0.06})`,
        background: C.card,
        border: `1px solid ${C.borderSubtle}`,
        borderRadius: 16,
        boxShadow: '0 40px 120px rgba(0,0,0,0.55)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 46,
          display: 'flex',
          alignItems: 'center',
          padding: '0 18px',
          borderBottom: `1px solid ${C.borderSubtle}`,
          background: 'rgba(255,255,255,0.02)',
          gap: 8,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: 999, background: C.red }} />
        <span style={{ width: 12, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.18)' }} />
        <span style={{ width: 12, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.18)' }} />
        <span style={{ marginLeft: 14, fontFamily: FONT_MONO, fontSize: 16, color: C.faint }}>{title}</span>
      </div>
      <div style={{ padding: '26px 30px', height, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Background                                                          */
/* ------------------------------------------------------------------ */
function Background() {
  const f = useCurrentFrame();
  const blobs = [
    { c: 'rgba(240,74,53,0.22)', x: 200, y: 120, s: 520, d: 0 },
    { c: 'rgba(255,75,53,0.16)', x: 1500, y: 700, s: 600, d: 6 },
    { c: 'rgba(122,29,22,0.30)', x: 900, y: 400, s: 700, d: 12 },
  ];
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* faint grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.borderSubtle} 1px, transparent 1px), linear-gradient(90deg, ${C.borderSubtle} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5,
          maskImage: 'radial-gradient(circle at 50% 40%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black, transparent 75%)',
        }}
      />
      {blobs.map((b, i) => {
        const drift = interpolate(f, [0, 450], [0, 60 + i * 20], { extrapolateRight: 'wrap' });
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: b.x,
              top: b.y + drift,
              width: b.s,
              height: b.s,
              borderRadius: 999,
              background: `radial-gradient(circle, ${b.c}, transparent 65%)`,
              filter: 'blur(60px)',
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
}

/* ------------------------------------------------------------------ */
/* Persistent top bar (chapter + progress)                            */
/* ------------------------------------------------------------------ */
function TopBar() {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const act = f < 150 ? 0 : f < 300 ? 1 : 2;
  const chapters = ['INSTALL', 'RUN', 'USE'];
  const progress = interpolate(f, [0, durationInFrames], [0, 100], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: 54, left: 64, right: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Mascot size={40} />
          <span style={{ fontFamily: FONT_SANS, fontWeight: 800, fontSize: 26, color: C.text, letterSpacing: 0.5 }}>
            Phantom
          </span>
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: FONT_MONO, fontSize: 18 }}>
          {chapters.map((ch, i) => (
            <span key={ch} style={{ color: i === act ? C.accent : C.faint, fontWeight: i === act ? 700 : 400 }}>
              {`0${i + 1}`} <span style={{ opacity: 0.5 }}>/</span> {ch}
            </span>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, height: 4, width: `${progress}%`, background: `linear-gradient(90deg, ${C.darkRed}, ${C.red})` }} />
    </AbsoluteFill>
  );
}

/* ------------------------------------------------------------------ */
/* Acts                                                                */
/* ------------------------------------------------------------------ */
function ActInstall() {
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 120 }}>
      <Window title="PowerShell — phantom" start={6} width={1180} height={520}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <TypeLine text="cargo install phantom" start={18} prompt="C:\\dev>" />
          <RevealLine start={52}>Downloading phantom v0.1.0 (crates.io)</RevealLine>
          <RevealLine start={74}>Compiling phantom v0.1.0 (7 crates)</RevealLine>
          <RevealLine start={108} color={C.green}>Finished release [optimized] in 38.2s</RevealLine>
          <RevealLine start={128} color={C.accent}>Installed → ~/.cargo/bin/phantom.exe</RevealLine>
        </div>
      </Window>
      <div style={{ marginTop: 34 }}>
        <Badge start={140}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent }} /> Apache-2.0 · Rust + Python · runs offline
        </Badge>
      </div>
    </AbsoluteFill>
  );
}

function ActRun() {
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 120 }}>
      <Window title="phantom-daemon — background" start={4} width={1180} height={520}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <TypeLine text="phantom-daemon --port 4545" start={14} prompt="C:\\dev>" />
          <RevealLine start={48}>Loading Python LLM service (grpc://127.0.0.1:50051)</RevealLine>
          <RevealLine start={74}>Hidden desktop pool ready — 1 isolated session</RevealLine>
          <RevealLine start={100} color={C.green}>Webhook listener :4545 [live]</RevealLine>
          <RevealLine start={122}>Watching ~/Phantom/Inbox for dropped files</RevealLine>
        </div>
      </Window>
      <div style={{ marginTop: 30, display: 'flex', gap: 16 }}>
        <Badge start={130}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: C.accent }} /> NO FOCUS THEFT
        </Badge>
        <Badge start={140}>runs while you keep using your machine</Badge>
      </div>
    </AbsoluteFill>
  );
}

function ActUse() {
  const f = useCurrentFrame();
  const taskTyped = Math.floor(((f - 12) * 34) / 30);
  const task = 'Tidy Downloads and rename the Q3 report';
  const shownTask = task.slice(0, Math.max(0, Math.min(task.length, taskTyped)));
  const done = taskTyped >= task.length;
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 110 }}>
      <div style={{ width: 1180 }}>
        {/* task card */}
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.borderSubtle}`,
            borderRadius: 16,
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span style={{ fontFamily: FONT_MONO, color: C.red, fontSize: 20 }}>task›</span>
          <span style={{ fontFamily: FONT_SANS, fontSize: 26, color: C.text, fontWeight: 600 }}>
            {shownTask}
            {done ? '' : <span style={{ color: C.red }}>▋</span>}
          </span>
        </div>

        {/* execution list */}
        <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: 8 }}>
          <CheckRow label="observe  → screenshot current desktop" start={done ? 30 : -999} />
          <CheckRow label="plan    → 4 steps, route: fs + desktop" start={done ? 52 : -999} />
          <CheckRow label="execute → move 12 files, rename report" start={done ? 74 : -999} />
          <CheckRow label="verify  → Q3-report-final.pdf in place" start={done ? 96 : -999} />
        </div>
      </div>

      {/* final wordmark */}
      <AbsoluteFill
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 70,
          opacity: interpolate(f, [120, 150], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Mascot size={46} />
            <span style={{ fontFamily: FONT_SANS, fontWeight: 800, fontSize: 38, letterSpacing: 0.5 }}>
              <span style={{ color: C.text }}>Phantom</span>
            </span>
          </div>
          <span style={{ fontFamily: FONT_SANS, fontSize: 22, color: C.muted }}>
            The background-mode agent that works while you don't watch.
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}

/* ------------------------------------------------------------------ */
/* Composition                                                        */
/* ------------------------------------------------------------------ */
export const PhantomDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, fontFamily: FONT_SANS }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
      />
      <Background />
      <TopBar />
      <Sequence from={0} durationInFrames={150}>
        <ActInstall />
      </Sequence>
      <Sequence from={150} durationInFrames={150}>
        <ActRun />
      </Sequence>
      <Sequence from={300} durationInFrames={150}>
        <ActUse />
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PhantomDemo"
      component={PhantomDemo}
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
