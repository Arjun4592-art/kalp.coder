import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Kalp Coder — Software Development Agency',
    template: '%s · Kalp Coder',
  },
  description:
    'Kalp Coder is a full-service software development agency helping startups and businesses design, build, and scale digital products that actually work.',
  keywords: [
    'software development agency',
    'web development',
    'mobile app development',
    'MVP development',
    'custom software',
    'Kalp Coder',
  ],
  metadataBase: new URL('https://kalpcoder.dev'),
  openGraph: {
    title: 'Kalp Coder — Software Development Agency',
    description:
      'We build software that moves your business forward — on time, on budget, built to last.',
    siteName: 'Kalp Coder',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f1' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f0d' },
  ],
}

// Runs before hydration so the correct theme (based on the visitor's local
// time, or their saved preference) is applied with zero flash of the wrong theme.
const themeBootstrapScript = `
(function () {
  try {
    var key = "kalpcoder-theme";
    var stored = sessionStorage.getItem(key);
    var theme;
    if (stored === "light" || stored === "dark") {
      theme = stored;
    } else {
      var hour = new Date().getHours();
      theme = hour >= 6 && hour < 18 ? "light" : "dark";
    }
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id='theme-bootstrap'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
        />
      </head>
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
