import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Is it safe?",
    a: "Phantom ships two explicit power modes. Safe mode is the default: it restricts filesystem writes to folders you allow and logs every action so you can audit it. Hero mode grants broader access — but you turn it on deliberately, never by accident."
  },
  {
    q: "Will it delete my files?",
    a: "Not by default. In Safe mode Phantom can only write within allow-listed directories and cannot touch anything outside them without an explicit configuration change from you. Every write is bounded and observable."
  },
  {
    q: "Does it need the internet?",
    a: "No. Mock mode runs the full Rust ↔ Python agent loop with zero network — ideal for CI, demos, and offline development. When you want real reasoning, it calls your chosen LLM, which can be a local model (Ollama) or a cloud provider; that part is your choice."
  },
  {
    q: "Is it production-ready?",
    a: "Early, and honest about it. The core loop, execution backends, and provider adapters work, and it's great for local automation, demos, and testing. It's pre-1.0 and Windows-first — treat it as a powerful preview, not a finished enterprise product yet."
  },
  {
    q: "Windows-only? What about macOS and Linux?",
    a: "Windows-first today. The invisible desktop relies on Windows APIs (CreateDesktopW, PrintWindow, UIA), so that backend is Windows-specific. macOS and Linux are on the roadmap, and the provider-neutral schema and LLM service are already OS-agnostic, so most of the stack travels."
  },
  {
    q: "Which models can I use?",
    a: "Any of the six adapters: Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, or mock. Because every provider normalizes into one ActionDecision schema, switching models is a config change — no rewrites, no provider lock-in."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-phantom-bg pt-32 pb-24 relative" id="faq">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Honest answers<br/>before you <span className="text-gradient">trust</span> it.</h2>
        </div>

        <div className="border-t border-border-subtle">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border-subtle">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-phantom-text group-hover:text-phantom-red transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-phantom-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-phantom-muted leading-relaxed pr-8">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
