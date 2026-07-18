import { useForm } from '@formspree/react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Loader2, Github, ShieldCheck } from 'lucide-react';

// Real Formspree form; override via VITE_FORMSPREE_ID if you ever rotate it.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID?.trim() || 'mjgnwkyy';

const badges = ['Apache-2.0', 'Rust + Python', 'runs fully offline'];

export function WaitlistForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const fieldErrors = state.errors?.getAllFieldErrors() ?? [];
  const formErrors = state.errors?.getFormErrors() ?? [];
  const errorMsg = fieldErrors[0]?.[1]?.[0]?.message ?? formErrors[0]?.message;

  return (
    <div className="bg-phantom-bg pt-32 pb-24 relative" id="waitlist">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Early access</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Run Phantom on your machine. First.</h2>
        <p className="text-xl text-phantom-muted mb-8">
          Join the early-access list. We’ll email you the moment your Windows box is ready to run Phantom locally.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-mono text-phantom-text border border-border-subtle bg-phantom-card px-3 py-1.5 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-border-red bg-phantom-red/5 rounded-2xl p-8 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-phantom-red/15 flex items-center justify-center">
                <Check className="w-5 h-5 text-phantom-red" />
              </div>
              <h3 className="text-xl font-semibold text-phantom-text">You’re on the list.</h3>
            </div>
            <p className="text-phantom-muted leading-relaxed mb-6">
              Thanks — we’ve got your email. We’ll reach out when your machine is ready to run Phantom. In the meantime, the agent is already open source.
            </p>
            <a
              href="https://github.com/RavaniRoshan/phantom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-phantom-text text-phantom-bg px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              Star Phantom on GitHub
            </a>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <input type="hidden" name="_subject" value="Phantom early-access request" />
            {/* Spam honeypot — hidden from real users */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
                aria-label="Email address"
                className="flex-1 bg-phantom-card border border-border-subtle rounded-full px-6 py-4 text-phantom-text placeholder-phantom-faint focus:outline-none focus:border-phantom-red transition-colors"
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center gap-2 bg-phantom-red text-white px-8 py-4 rounded-full font-semibold hover:bg-phantom-dark-red transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(240,74,53,0.25)]"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Get early access
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <p className="mt-3 text-sm text-phantom-red text-left px-2">{errorMsg}</p>
            )}

            <p className="mt-5 text-xs text-phantom-faint leading-relaxed flex items-start justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>
                Your email is used only for early access and is stored by our form provider (Formspree), separately from Phantom itself. The agent runs entirely on your machine and never sends your files or tasks anywhere.
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
