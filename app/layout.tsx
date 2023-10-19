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
    default: 'musefully',
    template: '%s | musefully',
  },
  description: 'Musefully browse the art world.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.jpg',
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
