import { motion } from 'motion/react';
import { Hand, Shuffle, Lock, FileLock2, EyeOff, FlaskConical } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const outcomes = [
  {
    title: "Reclaim your machine.",
    body: "Phantom runs in the background. Your cursor, your windows, and your focus stay exactly where you left them.",
    meta: "OUTCOME 001",
    icon: <Hand className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "Swap any LLM without rewrites.",
    body: "Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, or mock — all normalize into one schema. Change providers with a config flag.",
    meta: "OUTCOME 002",
    icon: <Shuffle className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "Run air-gapped.",
    body: "No cloud sandbox required. Execute locally behind your firewall; the agent loop never leaves your machine.",
    meta: "OUTCOME 003",
    icon: <Lock className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "Bounded, auditable writes.",
    body: "Safe mode restricts writes to allowed folders and logs every action. Hero mode is explicit — never the default.",
    meta: "OUTCOME 004",
    icon: <FileLock2 className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "Invisible by default.",
    body: "A hidden Windows desktop (CreateDesktopW + PrintWindow) and UIA-first input do the work off-screen, with no focus theft.",
    meta: "OUTCOME 005",
    icon: <EyeOff className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "Test deterministically offline.",
    body: "Mock mode runs the full Rust ↔ Python contract in CI and demos with zero network and no flaky API calls.",
    meta: "OUTCOME 006",
    icon: <FlaskConical className="w-5 h-5 text-phantom-accent" />
  }
];

export function Benefits() {
  return (
    <div className="bg-phantom-bg pt-32 pb-24 relative" id="benefits">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Outcomes</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What you get<br/>when it stays in the <span className="text-gradient">background</span>.</h2>
          <p className="text-xl text-phantom-muted">
            Phantom is built around one promise: your machine keeps working the way you expect, and the agent does its job behind the scenes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <SpotlightCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group bg-phantom-card border border-border-subtle p-8 hover:border-border-red transition-colors relative overflow-hidden rounded-xl h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-phantom-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-8">
                  {item.icon}
                  <div className="text-[10px] font-mono text-phantom-red border border-phantom-red/30 px-2 py-1 rounded bg-phantom-red/10">
                    {item.meta}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-phantom-muted leading-relaxed">{item.body}</p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
