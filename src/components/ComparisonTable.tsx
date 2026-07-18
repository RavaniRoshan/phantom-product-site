import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

type Cell = boolean | string;

const rows: { label: string; chatgpt: Cell; claude: Cell; phantom: Cell }[] = [
  {
    label: "Runs locally on your machine",
    chatgpt: "Cloud sandbox",
    claude: "Mac only (research preview)",
    phantom: "Windows, local"
  },
  {
    label: "Invisible / no focus theft",
    chatgpt: false,
    claude: false,
    phantom: "UIA-first"
  },
  {
    label: "Works offline (mock mode)",
    chatgpt: false,
    claude: false,
    phantom: true
  },
  {
    label: "Bring your own LLM",
    chatgpt: "OpenAI only",
    claude: "Anthropic only",
    phantom: "6 adapters"
  },
  {
    label: "Safety modes (bounded writes)",
    chatgpt: "Limited",
    claude: "Limited",
    phantom: "Safe / Hero"
  },
  {
    label: "Open source",
    chatgpt: false,
    claude: false,
    phantom: true
  }
];

function CellValue({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`w-5 h-5 ${highlight ? "text-phantom-red" : "text-green-400"}`} />
    ) : (
      <X className="w-5 h-5 text-phantom-faint" />
    );
  }
  return <span className="text-sm text-phantom-text">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="bg-phantom-bg pt-32 pb-24 relative" id="compare">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <div className="text-phantom-accent font-mono text-sm mb-4 tracking-wider uppercase">Why Phantom</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why not <span className="text-gradient">Operator</span> or Claude Computer Use?</h2>
          <p className="text-xl text-phantom-muted">
            The big labs ship powerful computer-use — but in the cloud, on one OS, or locked to one model. Phantom occupies the cell they leave open.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block border border-border-subtle rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-phantom-card border-b border-border-subtle">
            <div className="p-5 text-sm font-mono text-phantom-muted">Capability</div>
            <div className="p-5 text-sm font-semibold text-phantom-text text-center">ChatGPT Agent</div>
            <div className="p-5 text-sm font-semibold text-phantom-text text-center">Claude Computer Use</div>
            <div className="p-5 text-sm font-semibold text-phantom-red text-center bg-phantom-red/5 border-x border-border-red/40">Phantom</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-border-subtle last:border-b-0"
            >
              <div className="p-5 text-sm font-medium text-phantom-text">{row.label}</div>
              <div className="p-5 flex items-center justify-center text-center text-phantom-muted">{<CellValue value={row.chatgpt} />}</div>
              <div className="p-5 flex items-center justify-center text-center text-phantom-muted">{<CellValue value={row.claude} />}</div>
              <div className="p-5 flex items-center justify-center text-center bg-phantom-red/5 border-x border-border-red/40">{<CellValue value={row.phantom} highlight />}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div key={row.label} className="border border-border-subtle rounded-xl p-5 bg-phantom-card">
              <div className="text-sm font-semibold text-phantom-text mb-4">{row.label}</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-phantom-muted">ChatGPT Agent</span>
                  <span className="flex items-center gap-2">{<CellValue value={row.chatgpt} />}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-phantom-muted">Claude Computer Use</span>
                  <span className="flex items-center gap-2">{<CellValue value={row.claude} />}</span>
                </div>
                <div className="flex items-center justify-between border-t border-border-subtle pt-2">
                  <span className="font-medium text-phantom-red">Phantom</span>
                  <span className="flex items-center gap-2 font-medium">{<CellValue value={row.phantom} highlight />}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs font-mono text-phantom-faint leading-relaxed">
          “Works offline” = mock mode runs the full agent loop with zero network. Real tasks use your chosen local or cloud LLM. Capability comparisons reflect publicly documented behavior at time of writing.
        </p>
      </div>
    </div>
  );
}
