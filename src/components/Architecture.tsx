import { motion } from 'motion/react';
import { Monitor, Chrome, TerminalSquare, Layers, Settings2, WifiOff } from 'lucide-react';

const capabilities = [
  {
    num: "01",
    title: "Invisible desktop.",
    body: "Run native Windows work on a hidden desktop through CreateDesktopW, PrintWindow, and UIA-first input.",
    icon: <Monitor className="w-8 h-8 text-phantom-red" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  },
  {
    num: "02",
    title: "Headless browser.",
    body: "Drive Chromium through CDP with screenshots, navigation, and web task execution.",
    icon: <Chrome className="w-6 h-6 text-phantom-red" />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-bl from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  },
  {
    num: "03",
    title: "Files + Shell.",
    body: "Search, read, write, and transform files with Safe-mode boundaries.",
    icon: <TerminalSquare className="w-6 h-6 text-phantom-red" />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-tr from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  },
  {
    num: "04",
    title: "Provider-neutral.",
    body: "Swap Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, or mock mode without changing the loop.",
    icon: <Layers className="w-6 h-6 text-phantom-red" />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-tl from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  },
  {
    num: "05",
    title: "TUI control room.",
    body: "Watch plans, actions, streamed reasoning, and model config.",
    icon: <Settings2 className="w-6 h-6 text-phantom-red" />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-br from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  },
  {
    num: "06",
    title: "Offline mock mode.",
    body: "Run the full Rust ↔ Python contract in CI and demos without a network.",
    icon: <WifiOff className="w-6 h-6 text-phantom-red" />,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-bl from-phantom-card to-phantom-bg dark:from-[#151515] dark:to-[#0A0A0A]"
  }
];

export function Architecture() {
  return (
    <div className="bg-phantom-bg pt-24 pb-32" id="architecture">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Architecture Section */}
        <div className="mb-40">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Architecture</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Purpose beats takeover.</h2>
          <p className="text-xl text-phantom-muted max-w-2xl mb-16">
            Phantom is not a screen-sharing trick. It is a coordinated system: Rust core, Python LLM service, neutral schema, and execution backends designed for background computer-use.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-phantom-red bg-phantom-red/10 px-2 py-1 rounded">01</span>
                  A Rust core that owns the loop.
                </h3>
                <p className="text-phantom-muted leading-relaxed pl-11">
                  phantom-core runs OmniAgent, routing, security policy, retries, and execution coordination.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-phantom-red bg-phantom-red/10 px-2 py-1 rounded">02</span>
                  A neutral schema every provider must obey.
                </h3>
                <p className="text-phantom-muted leading-relaxed pl-11">
                  Claude, OpenAI, Gemini, Ollama, NVIDIA NIM, and mock mode normalize into the same ActionDecision shape.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                  <span className="text-xs font-mono text-phantom-red bg-phantom-red/10 px-2 py-1 rounded">03</span>
                  Backends engineered for real work.
                </h3>
                <p className="text-phantom-muted leading-relaxed pl-11">
                  CDP for browser, file + PowerShell for local operations, and an invisible Windows desktop for native app control.
                </p>
              </div>
            </div>

            {/* Architecture Panel UI */}
            <div className="bg-white dark:bg-[#0a0a0a] border border-border-subtle rounded-xl p-6 font-mono text-sm shadow-xl">
              <div className="flex gap-8 border-b border-border-subtle pb-6 mb-6">
                <div className="flex-1 space-y-3">
                  <div className="text-phantom-text/60">src/</div>
                  <div className="pl-4 border-l border-border-subtle text-phantom-accent">phantom-core/</div>
                  <div className="pl-4 border-l border-border-subtle text-phantom-text/80">phantom-browser/</div>
                  <div className="pl-4 border-l border-border-subtle text-phantom-text/80">phantom-fs/</div>
                  <div className="pl-4 border-l border-border-subtle text-phantom-text/80">phantom-desktop/</div>
                  <div className="pl-4 border-l border-border-subtle text-phantom-text/80">phantom-cli/</div>
                  <div className="pl-4 border-l border-border-subtle text-blue-500 dark:text-blue-400">python/phantom_llm/</div>
                </div>
                <div className="flex-1 border-l border-border-subtle pl-8 relative">
                   <div className="absolute top-1/4 -left-[1px] w-[2px] h-12 bg-phantom-red" />
                   <div className="text-phantom-muted mb-4">gRPC Flow</div>
                   <div className="space-y-4">
                     <div className="bg-phantom-card border border-border-subtle p-2 rounded">PlanTask()</div>
                     <div className="flex justify-center text-phantom-red">↓</div>
                     <div className="bg-phantom-card border border-border-subtle p-2 rounded">DecideAction()</div>
                     <div className="flex justify-center text-phantom-red">↓</div>
                     <div className="bg-phantom-red/10 border border-phantom-red/30 p-2 rounded text-phantom-red">ActionSchema.json</div>
                   </div>
                </div>
              </div>

              {/* Comparison Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-phantom-muted mb-2">
                    <span>Execution surfaces</span>
                    <span>Browser | Files | Desktop</span>
                  </div>
                  <div className="h-1 bg-border-subtle rounded w-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-phantom-red" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-phantom-muted mb-2">
                    <span>Provider adapters</span>
                    <span>Claude | OpenAI | Gemini | Ollama | NVIDIA | Mock</span>
                  </div>
                  <div className="h-1 bg-border-subtle rounded w-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-phantom-text/40" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-phantom-muted mb-2">
                    <span>Safety modes</span>
                    <span>Safe | Hero</span>
                  </div>
                  <div className="h-1 bg-border-subtle rounded w-[50%] overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div id="capabilities" className="mb-32">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Your machine, unblocked.</h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:auto-rows-[minmax(260px,auto)]">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border border-border-subtle p-6 rounded-xl hover:-translate-y-1 transition-transform group flex flex-col h-full ${cap.className}`}
              >
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-phantom-card dark:bg-black/50 border border-border-subtle dark:border-white/10 rounded-lg group-hover:border-phantom-red/50 transition-colors shadow-sm dark:shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(240,74,53,0.15)]">
                      {cap.icon}
                    </div>
                    <span className="font-mono text-sm text-phantom-muted dark:text-white/40">[{cap.num}]</span>
                  </div>
                  <h3 className={`font-semibold text-phantom-text dark:text-white mb-2 ${i === 0 ? 'text-3xl' : 'text-xl'}`}>{cap.title}</h3>
                </div>
                <p className={`text-phantom-muted dark:text-white/70 leading-relaxed mt-2 ${i === 0 ? 'text-lg max-w-sm' : 'text-sm'}`}>{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border-subtle divide-x divide-border-subtle">
          <div className="p-8 text-center">
            <div className="text-4xl md:text-5xl font-mono font-bold text-phantom-text mb-2">0</div>
            <div className="text-sm font-medium text-phantom-text mb-1">focus stolen</div>
            <div className="text-xs text-phantom-muted">UIA-first background input</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl md:text-5xl font-mono font-bold text-phantom-text mb-2">100%</div>
            <div className="text-sm font-medium text-phantom-text mb-1">user-controlled modes</div>
            <div className="text-xs text-phantom-muted">Safe / Hero modes</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl md:text-5xl font-mono font-bold text-phantom-text mb-2">6</div>
            <div className="text-sm font-medium text-phantom-text mb-1">provider adapters</div>
            <div className="text-xs text-phantom-muted">Claude to Mock</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl md:text-5xl font-mono font-bold text-phantom-text mb-2">Local</div>
            <div className="text-sm font-medium text-phantom-text mb-1">execution backends</div>
            <div className="text-xs text-phantom-muted">Browser, FS, Desktop</div>
          </div>
        </div>

      </div>
    </div>
  );
}
