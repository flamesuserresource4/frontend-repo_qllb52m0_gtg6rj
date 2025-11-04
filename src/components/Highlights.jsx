import { motion } from 'framer-motion';
import { BookOpen, Cpu, Code } from 'lucide-react';

const articles = [
  {
    title: 'Memulai IoT dengan ESP32',
    category: 'IoT',
    date: '2025-01-10',
    readingTime: '6 menit',
  },
  {
    title: 'Dasar AI: From Zero to First Model',
    category: 'AI',
    date: '2025-02-02',
    readingTime: '8 menit',
  },
  {
    title: 'Mengenal AIoT: Edge Intelligence',
    category: 'AIoT',
    date: '2025-02-28',
    readingTime: '7 menit',
  },
];

const projects = [
  {
    title: 'Smart Greenhouse Monitor',
    category: 'IoT',
    stack: ['ESP32', 'MQTT', 'Next.js'],
    status: 'beta',
  },
  {
    title: 'Chatbot Support Komunitas',
    category: 'AI',
    stack: ['Python', 'FastAPI', 'RAG'],
    status: 'alpha',
  },
  {
    title: 'Landing Page Komunitas',
    category: 'Web',
    stack: ['React', 'Tailwind'],
    status: 'production',
  },
];

function Card({ children }) {
  return (
    <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Highlight Terbaru</h2>
          <a href="#" className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline">Lihat semua</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                  <BookOpen className="h-4 w-4" /> {a.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{a.date} • {a.readingTime}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Proyek Terbaru</h3>
          <a href="#" className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline">Lihat semua</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                  <Cpu className="h-4 w-4" /> {p.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 text-xs ring-1 ring-inset ring-neutral-200 dark:ring-neutral-700">{s}</span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-wide">
                  <span className={`h-2 w-2 rounded-full ${p.status === 'production' ? 'bg-emerald-500' : p.status === 'beta' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                  {p.status}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
