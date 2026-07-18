import { motion } from 'motion/react';

const stack = [
  'Rust',
  'Python',
  'Windows API',
  'gRPC',
  'CDP',
  'UIA',
  'Apache-2.0',
  'Ollama',
  'Claude',
  'OpenAI',
  'Gemini',
  'NVIDIA NIM'
];

export function StackMarquee() {
  return (
    <div className="bg-phantom-bg border-y border-border-subtle py-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-5 text-center text-xs font-mono text-phantom-faint uppercase tracking-[0.2em]">
        Built to run on your machine
      </div>
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
        className="relative z-10 flex whitespace-nowrap items-center gap-8 text-sm font-mono uppercase tracking-wider text-phantom-muted w-max"
      >
        {[...stack, ...stack, ...stack].map((s, i) => (
          <div key={i} className="flex items-center gap-8">
            <span>{s}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-phantom-red" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
