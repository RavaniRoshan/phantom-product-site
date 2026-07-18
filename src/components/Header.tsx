import { Ghost, Github, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = scrolled ? 'text-phantom-text' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-phantom-bg/80 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${textColorClass}`}>
          <Ghost className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight">phantom</span>
        </div>
        
        <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold ${textColorClass}`}>
          <a href="#problem" className="drop-shadow-md hover:text-phantom-red transition-colors">Problem</a>
          <a href="#loop" className="drop-shadow-md hover:text-phantom-red transition-colors">Local Loop</a>
          <a href="#architecture" className="drop-shadow-md hover:text-phantom-red transition-colors">Architecture</a>
          <a href="#capabilities" className="drop-shadow-md hover:text-phantom-red transition-colors">Capabilities</a>
          <a href="#faq" className="drop-shadow-md hover:text-phantom-red transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-phantom-card transition-colors ${textColorClass}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
             href="https://github.com/RavaniRoshan/phantom" 
             target="_blank" 
             rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm dark:shadow-none ${scrolled ? 'bg-phantom-text text-phantom-bg hover:opacity-90' : 'bg-white text-black hover:bg-gray-200 border border-transparent'}`}
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">View GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
