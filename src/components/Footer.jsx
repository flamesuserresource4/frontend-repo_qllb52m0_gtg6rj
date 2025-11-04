import { Github, Youtube, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer({ socials, email }) {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/5 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} BonggXz Tech Journal. All rights reserved.
            </p>
            <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
              <a href="#" className="hover:underline">Sitemap</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:underline">RSS</a>
              <span className="mx-2">·</span>
              <a href={`mailto:${email}`} className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Github className="h-5 w-5" />
              </a>
            )}
            {socials.youtube && (
              <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Youtube className="h-5 w-5" />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label="Email" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
