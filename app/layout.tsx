import { Inter } from 'next/font/google';

import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Collections Interactive',
    template: '%s | Collections Interactive',
  },
  description: 'Collections Interactive using Sanity & Next.js',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/favicon/apple-touch-icon-180x180.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body className="bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <main className="min-h-screen p-8">{children}</main>
      </body>
    </html>
  );
}
