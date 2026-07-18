import { Ghost } from 'lucide-react';
import PixelLiquidBg from './ui/pixel-liquid-bg';

export function Footer() {
  return (
    <>
      {/* Final Vortex CTA */}
      <div className="relative bg-phantom-bg dark:bg-[#050505] overflow-hidden pt-32 pb-40 border-t border-border-subtle">
        
        {/* Pixel Liquid Background */}
        <div className="absolute inset-0 z-0">
          <PixelLiquidBg
            className="w-full h-full opacity-100"
            pixelSize={12}
            resolution={0.6}
            mouseForce={18}
            cursorSize={180}
            autoDemo={true}
            darkPalette={["#050101", "#4d0000", "#7A1D16", "#F04A35", "#FF6B59"]}
          />
        </div>
        
        {/* CSS Vortex Grid fallback/addition */}
        <div className="absolute inset-0 flex items-end justify-center perspective-grid opacity-30 pointer-events-none">
           <div className="w-[200vw] h-[100vh] border-t border-phantom-red/50 bg-grid-red [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black_80%)]" />
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-phantom-red/20 blur-[120px] rounded-full pointer-events-none" />

        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
           <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-phantom-bg/50 border border-phantom-red/30 backdrop-blur flex items-center justify-center shadow-[0_0_30px_rgba(240,74,53,0.2)]">
                 <Ghost className="w-8 h-8 text-phantom-red" />
              </div>
           </div>
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-phantom-text drop-shadow-2xl">
             Break free from<br/>focus-stealing agents.
           </h2>
           <p className="text-xl text-phantom-text/70 mb-12 max-w-2xl mx-auto">
             Local-first execution. Provider-neutral reasoning. Your desktop stays yours.
           </p>
           <a 
              href="https://github.com/RavaniRoshan/phantom" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-phantom-red dark:bg-phantom-text text-white dark:text-black font-semibold text-lg hover:bg-phantom-dark-red dark:hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(240,74,53,0.3)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(240,74,53,0.4)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              View GitHub
            </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-phantom-bg dark:bg-[#050505] border-t border-border-subtle pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-phantom-text">
              <Ghost className="w-5 h-5" />
              <span className="font-bold text-lg tracking-tight">phantom</span>
            </div>
            <p className="text-sm text-phantom-faint">
              The agent that works while you don't watch.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm font-mono text-phantom-text dark:text-phantom-muted">
            <a href="https://github.com/RavaniRoshan/phantom" className="hover:text-phantom-red transition-colors">GitHub</a>
            <a href="https://github.com/RavaniRoshan/phantom#readme" className="hover:text-phantom-red transition-colors">README</a>
            <a href="https://github.com/RavaniRoshan/phantom/blob/main/LICENSE" className="hover:text-phantom-red transition-colors">License</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 text-center md:text-left text-xs font-mono text-phantom-faint">
          © {new Date().getFullYear()} Phantom
        </div>
      </footer>
    </>
  );
}
