import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { MessageCircle, Phone } from 'lucide-react';

export default function Hero({ siteName, tagline, discordUrl, whatsappUrl }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white dark:from-neutral-950/60 dark:via-neutral-950/20 dark:to-neutral-950" />
        <div className="absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Bangun & Belajar Teknologi Bersama Komunitas
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300">
                {tagline} — artikel, proyek, dan diskusi tiap minggu.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['IoT','AI','AIoT','Web','App','Game','Roblox'].map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-emerald-200/60 dark:ring-emerald-800/60">{b}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join Discord
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Phone className="h-4 w-4" />
                  Join WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
