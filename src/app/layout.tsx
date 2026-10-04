import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './globals.css';
import { Header } from '@/components/layout/header';
import { CommandMenu } from '@/components/layout/command-menu';
import { Experience } from '@/components/layout/experience';
const origin =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  alternates: { canonical: '/' },
  title: { default: 'Akilesh S — Software Systems & Applied AI', template: '%s · Akilesh S' },
  description:
    'Akilesh S, Software Systems student at CIT. Explore practical software systems, applied AI, Digital Twins and full-stack engineering through evidence-backed case studies.',
  openGraph: {
    title: 'Akilesh S — System / Signal / Flow',
    description:
      'Complex problems. Practical software systems. A portfolio of applied AI and full-stack engineering.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Akilesh S',
  },
  twitter: { card: 'summary_large_image' },
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#101314' },
  ],
  colorScheme: 'light dark',
};
const themeScript = `(()=>{try{let p=localStorage.getItem('portfolio-theme');if(!['light','dark','system'].includes(p))p='system';document.documentElement.dataset.motion=localStorage.getItem('portfolio-motion')==='reduce'?'reduce':'system';document.documentElement.dataset.preference=p;document.documentElement.dataset.theme=p==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):p}catch{document.documentElement.dataset.preference='system';document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <CommandMenu />
        <Experience />
      </body>
    </html>
  );
}
