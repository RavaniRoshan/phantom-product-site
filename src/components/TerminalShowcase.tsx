import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "What is Phantom?",
    a: "Phantom is a Windows-first background-mode computer-use agent. It plans tasks, routes them to browser, file, shell, or desktop backends, and executes them through a neutral LLM action schema."
  },
  {
    q: "Does Phantom run fully offline?",
    a: "The execution stack runs locally. Phantom also includes a mock provider for fully offline demos and CI. For real model reasoning, you can use local providers like Ollama or remote providers such as Claude, OpenAI, Gemini, or NVIDIA NIM."
  },
  {
    q: "How does Phantom avoid focus theft?",
    a: "The desktop backend uses a hidden Win32 desktop and UI Automation-first input. It can invoke controls and set values without moving the visible cursor or stealing focus from your active session."
  },
  {
    q: "What is Safe mode?",
    a: "Safe mode is the default mode. It allows broad reads but restricts writes to configured allowed folders. Hero mode grants full system access when explicitly selected."
  },
  {
    q: "Which providers are supported?",
    a: "Phantom supports Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, and mock mode through one neutral action schema."
  },
  {
    q: "What is the architecture?",
    a: "Rust phantom-core owns the OmniAgent loop, routing, security, and backend execution. A Python LLM service handles provider calls over gRPC and normalizes all outputs into the shared schema."
  },
  {
    q: "Is Phantom open source?",
    a: "Yes. Phantom is Apache-2.0 licensed and available on GitHub."
  },
  {
    q: "What platform does it target?",
    a: "Phantom targets Windows with x86_64-pc-windows-msvc. Shared crates can type-check elsewhere, but the full runtime is Windows-first."
  }
];

export function TerminalShowcase() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-phantom-bg pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Built for Operators Terminal */}
        <div className="mb-40">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Built for operators.</h2>
          
          <div className="relative max-w-5xl mx-auto flex gap-6 lg:gap-12 flex-col lg:flex-row items-center">
             {/* Side labels left */}
             <div className="hidden lg:flex flex-col gap-8 text-right w-40 text-xs font-mono text-phantom-muted">
                <div className="relative">Rust core<div className="absolute right-[-24px] top-1/2 w-4 h-[1px] bg-phantom-red" /></div>
                <div className="relative">gRPC service<div className="absolute right-[-24px] top-1/2 w-4 h-[1px] bg-border-subtle" /></div>
                <div className="relative">Neutral schema<div className="absolute right-[-24px] top-1/2 w-4 h-[1px] bg-border-subtle" /></div>
             </div>

             {/* Main Terminal */}
             <div className="flex-1 w-full bg-phantom-bg border border-border-subtle rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.03)] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-phantom-card dark:bg-[#111]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-xs font-mono text-phantom-muted mx-auto">phantom-cli</div>
                </div>
                <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-phantom-text/90">
                  <div className="text-phantom-faint mb-4">rig://localhost becomes: <br/><span className="text-phantom-text">phantom://localhost · background</span></div>
                  <div className="flex gap-2 mb-6">
                    <span className="text-phantom-red">λ</span>
                    <span>phantom init</span>
                  </div>
                  <pre className="text-phantom-accent text-xs md:text-sm font-bold mb-6">
{` ____  _   _    _    _   _ _____ ___  __  __ 
|  _ \\| | | |  / \\  | \\ | |_   _/ _ \\|  \\/  |
| |_) | |_| | / _ \\ |  \\| | | || | | | |\\/| |
|  __/|  _  |/ ___ \\| |\\  | | || |_| | |  | |
|_|   |_| |_/_/   \\_\\_| \\_| |_| \\___/|_|  |_|`}
                  </pre>
                  <div className="space-y-1 mb-6 text-phantom-muted">
                    <div>&gt; Starting Python LLM service...</div>
                    <div>&gt; Provider: mock</div>
                    <div>&gt; Mode: safe</div>
                    <div className="text-phantom-text">&gt; Loading neutral schema OK</div>
                    <div>&gt; Indexing allowed folders</div>
                    <div>&gt; Backend: desktop | browser | fs</div>
                    <div className="text-green-400">✓ Ready. Network: optional · Focus theft: OFF</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-phantom-red">λ</span>
                    <span>summarize the top story at example.com</span>
                    <span className="w-2 h-4 bg-phantom-text animate-pulse" />
                  </div>
                </div>
             </div>

             {/* Side labels right */}
             <div className="hidden lg:flex flex-col gap-8 text-left w-40 text-xs font-mono text-phantom-muted">
                <div className="relative">Windows desktop<div className="absolute left-[-24px] top-1/2 w-4 h-[1px] bg-phantom-red" /></div>
                <div className="relative">Safe / Hero<div className="absolute left-[-24px] top-1/2 w-4 h-[1px] bg-border-subtle" /></div>
                <div className="relative">Mock CI<div className="absolute left-[-24px] top-1/2 w-4 h-[1px] bg-border-subtle" /></div>
             </div>
          </div>
        </div>

        {/* Use-case demo video */}
        <section id="demo" className="mb-40">
          <div className="text-center mb-12">
            <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">See it run</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Install. Launch. Watch it work.</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-border-red bg-black shadow-[0_0_60px_rgba(240,74,53,0.12)]">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src="/phantom-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
            <p className="text-center text-sm text-phantom-faint mt-4 font-mono">
              Offline demo · mock provider · on-brand 16:9 showcase
            </p>
          </div>
        </section>

        {/* Ready to Clone */}
        <div className="mb-40 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Phantom is ready to clone.</h2>
          <p className="text-xl text-phantom-muted mb-10">
            Run the Python service. Launch the TUI. Give it a task. Keep using your machine while Phantom works in the background.
          </p>
          
          <div className="bg-phantom-card dark:bg-[#111] border border-border-subtle rounded-lg p-6 mb-10 text-left font-mono text-sm overflow-x-auto">
            <div className="text-phantom-faint mb-2"># Install target and build</div>
            <div className="text-phantom-text mb-4">rustup target add x86_64-pc-windows-msvc<br/>cargo build --release</div>
            <div className="text-phantom-faint mb-2"># Run services</div>
            <div className="text-phantom-text">python -m phantom_llm.server<br/>cargo run -p phantom-cli --release</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            {/* Decorative lines for CTA */}
            <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-phantom-red hidden sm:block" />
            <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-phantom-red hidden sm:block" />
            
            <a href="https://github.com/RavaniRoshan/phantom" className="inline-flex items-center justify-center gap-2 bg-phantom-red text-phantom-text px-8 py-4 rounded-full font-medium hover:bg-phantom-dark-red transition-colors">
              View GitHub
            </a>
            <a href="https://github.com/RavaniRoshan/phantom#readme" className="inline-flex items-center justify-center gap-2 bg-phantom-text/5 text-phantom-text px-8 py-4 rounded-full font-medium hover:bg-phantom-text/10 transition-colors border border-border-subtle">
              Read README
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto" id="faq">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently asked questions.</h2>
          
          <div className="border-t border-border-subtle">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border-subtle">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-phantom-red">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="text-lg font-medium group-hover:text-phantom-text transition-colors">{faq.q}</span>
                  </div>
                  <div className="text-phantom-muted group-hover:text-phantom-text transition-colors">
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-10 pr-4 text-phantom-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
