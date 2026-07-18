import { motion } from 'motion/react';
import { EyeOff, Layers, ShieldAlert, WifiOff, Monitor, Lock, Chrome, TerminalSquare } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const problems = [
  {
    title: "They steal your focus.",
    body: "Visible automation moves your cursor, changes windows, and interrupts the work you're doing.",
    meta: "FOCUS HIJACK 001",
    icon: <EyeOff className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "They bind you to one model.",
    body: "Provider-specific tool calls make behavior hard to compare, test, or swap.",
    meta: "SCHEMA DRIFT 002",
    icon: <Layers className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "They blur safety boundaries.",
    body: "Desktop agents need clear write limits, explicit power modes, and predictable execution.",
    meta: "UNBOUNDED ACCESS 003",
    icon: <ShieldAlert className="w-5 h-5 text-phantom-accent" />
  },
  {
    title: "They fail without the network.",
    body: "Cloud-only loops break demos, CI, tests, and local development workflows.",
    meta: "CLOUD DEPENDENCY 004",
    icon: <WifiOff className="w-5 h-5 text-phantom-accent" />
  }
];

export function Features() {
  return (
    <div className="bg-phantom-bg pt-32 pb-24 relative" id="problem">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
      
      {/* Problem Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-40">
        <div className="mb-16">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">The problem</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Your agent shouldn't<br/>take over your machine.</h2>
          <p className="text-xl text-phantom-muted max-w-2xl">
            Most computer-use tools fight for your cursor, your focus, your browser, and your trust. Phantom is built to work in the background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Subtle crosshair center lines */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border-subtle -translate-y-1/2" />
          <div className="hidden md:block absolute left-1/2 top-0 w-[1px] h-full bg-border-subtle -translate-x-1/2" />
          
          <div className="absolute -left-3 top-1/2 w-1.5 h-1.5 rounded-full bg-phantom-red animate-pulse hidden md:block" />

          {problems.map((item, i) => (
            <SpotlightCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* Local Loop Diagram Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-40" id="loop">
        <div className="text-center mb-20">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Introducing Phantom</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Everything routed.<br/>Nothing steals focus.</h2>
          <p className="text-xl text-phantom-muted max-w-2xl mx-auto">
            One agent loop. Three execution surfaces. Six provider adapters. Phantom keeps the work behind the scenes and the control in your hands.
          </p>
        </div>

        {/* Diagram Built with HTML/CSS */}
        <div className="relative max-w-4xl mx-auto border border-border-subtle bg-phantom-section rounded-2xl p-8 md:px-16 md:pb-16 md:pt-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid-red opacity-10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="bg-phantom-card border border-border-subtle p-4 text-center rounded text-sm font-medium">User task</motion.div>
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="bg-phantom-card border border-border-subtle p-4 text-center rounded text-sm font-medium">TUI</motion.div>
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1.0 }} className="bg-phantom-card border border-border-subtle p-4 text-center rounded text-sm font-medium">Settings</motion.div>
              <motion.div animate={{ borderColor: ['var(--color-border-red)', 'rgba(240,74,53,0.8)', 'var(--color-border-red)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="bg-phantom-card border border-border-red text-phantom-red bg-phantom-red/5 p-4 text-center rounded text-sm font-mono flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Safe mode
              </motion.div>
            </div>

            {/* Center Core */}
            <div className="relative flex-1 flex flex-col items-center justify-center min-h-[200px]">
               {/* Connections */}
               <div className="absolute top-1/2 -left-12 w-12 h-[1px] bg-border-subtle overflow-hidden">
                 <motion.div animate={{ x: [-50, 50] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-6 h-full bg-phantom-red shadow-[0_0_8px_#F04A35]" />
               </div>
               <div className="absolute top-1/2 -right-12 w-12 h-[1px] bg-border-subtle overflow-hidden">
                 <motion.div animate={{ x: [-50, 50] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.5 }} className="w-6 h-full bg-phantom-red shadow-[0_0_8px_#F04A35]" />
               </div>
               
               <div className="absolute -top-12 left-1/2 w-[1px] h-12 bg-border-subtle overflow-hidden">
                 <motion.div animate={{ y: [50, -50] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.2 }} className="h-6 w-full bg-phantom-red shadow-[0_0_8px_#F04A35]" />
               </div>
               <div className="absolute -bottom-12 left-1/2 w-[1px] h-12 bg-border-subtle overflow-hidden">
                 <motion.div animate={{ y: [-50, 50] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.7 }} className="h-6 w-full bg-phantom-red shadow-[0_0_8px_#F04A35]" />
               </div>

               <motion.div 
                 animate={{ y: [-5, 5, -5], boxShadow: ['0 0 30px rgba(240,74,53,0.2)', '0 0 50px rgba(240,74,53,0.4)', '0 0 30px rgba(240,74,53,0.2)'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-phantom-bg border border-phantom-red p-8 rounded-xl text-center relative z-20 min-w-[200px]"
               >
                 <div className="font-bold text-2xl tracking-widest mb-2 text-phantom-text">PHANTOM</div>
                 <div className="text-[10px] font-mono text-phantom-red flex items-center justify-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-phantom-red animate-pulse" /> BACKGROUND LOOP ACTIVE
                 </div>
               </motion.div>

               <div className="absolute -top-20 text-xs font-mono text-phantom-muted bg-phantom-card border border-border-subtle px-3 py-1 rounded">Provider-neutral schema</div>
               <div className="absolute -bottom-20 text-xs font-mono text-phantom-muted bg-phantom-card border border-border-subtle px-3 py-1 rounded">Observe → Decide → Execute</div>
            </div>

            {/* Right Outputs */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="bg-phantom-card border border-border-subtle p-4 rounded text-sm font-medium flex items-center gap-3">
                <Chrome className="w-5 h-5 text-phantom-muted" /> Headless browser
              </motion.div>
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} className="bg-phantom-card border border-border-subtle p-4 rounded text-sm font-medium flex items-center gap-3">
                <TerminalSquare className="w-5 h-5 text-phantom-muted" /> Files + PowerShell
              </motion.div>
              <motion.div animate={{ borderColor: ['var(--color-border-subtle)', 'var(--color-border-red)', 'var(--color-border-subtle)'] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} className="bg-phantom-card border border-border-subtle p-4 rounded text-sm font-medium flex items-center gap-3">
                <Monitor className="w-5 h-5 text-phantom-muted" /> Invisible desktop
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 border border-dashed border-border-subtle px-4 py-2 rounded text-xs font-mono text-phantom-muted flex items-center gap-2 hidden md:flex">
            LLM provider optional
            <div className="w-2 h-2 rounded-full border border-phantom-muted" />
          </div>
          <div className="absolute top-6 left-6 text-xs font-mono text-phantom-muted hidden md:block z-20">
            <div className="text-phantom-text mb-1">Your rules</div>
            <div>Writes follow Safe mode</div>
            <div>UIA input avoids focus theft</div>
          </div>
        </div>
      </div>

      {/* Background Work Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 border-t border-border-subtle pt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Work in the background.</h2>
          <p className="text-xl text-phantom-muted max-w-2xl mx-auto">
            Hidden desktops, headless browsers, and file operations run without interrupting your visible session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-phantom-text">Hide the desktop</h3>
            <p className="text-phantom-muted leading-relaxed">CreateDesktopW runs a separate Windows desktop off-screen. PrintWindow captures state. UIA-first input operates controls without focus theft.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-phantom-text">Keep the browser headless</h3>
            <p className="text-phantom-muted leading-relaxed">Chromium CDP handles web tasks without opening a visible window or breaking your flow.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-phantom-text">Bound the filesystem</h3>
            <p className="text-phantom-muted leading-relaxed">Safe mode restricts writes to allowed folders. Hero mode is explicit when you need full access.</p>
          </div>
        </div>

        {/* CSS Tunnel Visual */}
        <div className="h-[400px] w-full bg-phantom-section rounded-2xl border border-border-subtle overflow-hidden relative flex items-center justify-center">
           {/* Tunnel rings */}
           <div className="absolute inset-0 flex items-center justify-center perspective-grid opacity-60">
             <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[800px] h-[800px] rounded-full border border-phantom-red/20" />
             <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute w-[600px] h-[600px] rounded-full border border-phantom-red/30" />
             <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute w-[400px] h-[400px] rounded-full border border-phantom-red/40 bg-phantom-red/5" />
           </div>
           
           {/* Center payload */}
           <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-64 h-40 bg-phantom-bg border border-phantom-red/50 rounded-xl shadow-[0_0_50px_rgba(240,74,53,0.3)] flex items-center justify-center flex-col">
              <Monitor className="w-8 h-8 text-phantom-red mb-3" />
              <div className="text-xs font-mono text-phantom-red/80">OFF-SCREEN RENDER</div>
           </motion.div>
           
           <div className="absolute inset-0 bg-gradient-to-t from-phantom-section via-transparent to-phantom-section pointer-events-none" />
        </div>

        {/* Use-case demo video */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <div className="text-phantom-accent font-mono text-sm mb-3 tracking-wider uppercase">See it run</div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Install. Launch. Watch it work.</h3>
          </div>
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
          <p className="text-center text-sm text-phantom-faint mt-4 font-mono">Offline demo · mock provider · on-brand 16:9 showcase</p>
        </div>
      </div>

    </div>
  );
}
