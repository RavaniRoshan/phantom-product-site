import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { TerminalShowcase } from './components/TerminalShowcase';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-phantom-bg font-sans text-phantom-text overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Architecture />
      <TerminalShowcase />
      <Footer />
    </div>
  );
}
