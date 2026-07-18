import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StackMarquee } from './components/StackMarquee';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Architecture } from './components/Architecture';
import { TerminalShowcase } from './components/TerminalShowcase';
import { ComparisonTable } from './components/ComparisonTable';
import { WaitlistForm } from './components/WaitlistForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-phantom-bg font-sans text-phantom-text overflow-x-hidden">
      <Header />
      <Hero />
      <StackMarquee />
      <Features />
      <Benefits />
      <Architecture />
      <TerminalShowcase />
      <ComparisonTable />
      <WaitlistForm />
      <FAQ />
      <Footer />

      {/* Global film-grain for depth */}
      <div
        className="bg-noise pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-overlay"
        aria-hidden
      />
    </div>
  );
}
