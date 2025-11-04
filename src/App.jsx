import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

const SITE_NAME = 'BonggXz Tech Journal';
const TAGLINE = 'IoT • AI • AIoT • Web • App • Game • Roblox';
const DISCORD_URL = 'https://discord.gg/xxxxx';
const WHATSAPP_URL = 'https://chat.whatsapp.com/xxxxx';
const SOCIALS = {
  github: 'https://github.com/yourname',
  youtube: 'https://youtube.com/@yourchannel',
  twitter: 'https://twitter.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourprofile',
};
const EMAIL_CONTACT = 'hello@domainkamu.com';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-emerald-600 px-3 py-2 text-white">Skip to content</a>
      <Navbar
        brand={SITE_NAME}
        discordUrl={DISCORD_URL}
        links={[
          { label: 'Blog', href: '#' },
          { label: 'Proyek', href: '#' },
          { label: 'Tentang', href: '#' },
          { label: 'Kontak', href: '#' },
        ]}
      />
      <main id="main">
        <Hero siteName={SITE_NAME} tagline={TAGLINE} discordUrl={DISCORD_URL} whatsappUrl={WHATSAPP_URL} />
        <Highlights />
      </main>
      <Footer socials={SOCIALS} email={EMAIL_CONTACT} />
    </div>
  );
}
