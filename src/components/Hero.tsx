import { motion } from 'motion/react';
import { Terminal, Ghost } from 'lucide-react';
import { BackgroundShapes } from './BackgroundShapes';

const marqueeItems = [
  "Windows-first", "Invisible desktop", "UIA-first input", "Headless browser",
  "Safe mode", "Hero mode", "Neutral schema", "Offline mock", "NVIDIA NIM",
  "Rust core", "gRPC", "PowerShell", "No focus theft", "No cursor hijack"
];

export function Hero() {
  return (
    <div className="relative pt-32 overflow-hidden bg-phantom-red">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-phantom-bg mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-grid-red opacity-50 z-10 pointer-events-none" />
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-100">
        <BackgroundShapes 
          width={2000} 
          height={1000} 
          colors={['rgba(255,255,255,0.8)', 'rgba(0,0,0,0.6)']} 
          cellSize={60}
          strokeWidth={4}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[780px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-phantom-text/20 bg-black/20 backdrop-blur text-xs font-mono text-white/80 mb-8">
            <div className="w-2 h-2 rounded-full bg-phantom-text animate-pulse" />
            BACKGROUND COMPUTER-USE
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-8">
            No focus theft.<br />No waiting.
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Phantom plans, routes, and executes tasks through a headless browser, local files, PowerShell, and an invisible Windows desktop — while you keep using your machine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://github.com/RavaniRoshan/phantom" 
              className="inline-flex items-center justify-center gap-2 bg-black text-white  px-8 py-4 rounded-full font-medium hover:opacity-90  transition-colors border border-transparent  shadow-lg "
            >
              View GitHub
            </a>
            <a 
              href="https://github.com/RavaniRoshan/phantom#run" 
              className="inline-flex items-center justify-center gap-2 bg-phantom-text/10 text-white backdrop-blur px-8 py-4 rounded-full font-medium hover:bg-phantom-text/20 transition-colors border border-phantom-text/10"
            >
              Run locally
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
            <span>Windows-first</span>
            <span className="w-1 h-1 rounded-full bg-phantom-text/40" />
            <span>Rust core</span>
            <span className="w-1 h-1 rounded-full bg-phantom-text/40" />
            <span>Python LLM service</span>
            <span className="w-1 h-1 rounded-full bg-phantom-text/40" />
            <span>Neutral schema</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] items-center justify-center hidden md:flex pb-20"
        >
          <div className="absolute top-20 right-0 w-[500px] h-[400px] bg-black/40 backdrop-blur-md border border-phantom-text/10 rounded-lg shadow-2xl transform rotate-2 opacity-50 overflow-hidden">
             <div className="h-8 border-b border-phantom-text/10 flex items-center px-4"><div className="w-2 h-2 rounded-full bg-phantom-text/20" /></div>
          </div>
          
          <div className="relative w-full max-w-lg bg-black border border-border-red rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-phantom-card dark:bg-[#151515]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-phantom-muted" />
                <span className="text-xs font-mono text-phantom-muted">phantom-core</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-3 mb-6 text-phantom-accent">
                <Ghost className="w-5 h-5" />
                <span className="font-bold tracking-widest uppercase">OmniAgent</span>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-phantom-faint">status:</span>
                  <span className="text-green-400">active loop</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-phantom-faint">cycle:</span>
                  <span>observe → decide → execute</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-phantom-faint">backend:</span>
                  <span className="text-phantom-accent">desktop (invisible)</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-phantom-faint">mode:</span>
                  <span className="text-blue-400">safe</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-phantom-faint">provider:</span>
                  <span>mock</span>
                </div>
              </div>
              <div className="mt-6 bg-white dark:bg-[#0a0a0a] rounded p-4 border border-border-subtle shadow-inner ">
                <div className="text-xs text-phantom-muted mb-2">Streaming output:</div>
                <div className="text-phantom-faint leading-relaxed">
                  &gt; Calling CreateDesktopW("PhantomDesktop")...<br/>
                  &gt; Desktop created. Launching target app...<br/>
                  &gt; Running UIA query for input field...
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-border-red bg-black py-3 overflow-hidden relative z-20">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-8 text-xs font-mono uppercase tracking-wider text-phantom-muted w-max"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-phantom-red" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
