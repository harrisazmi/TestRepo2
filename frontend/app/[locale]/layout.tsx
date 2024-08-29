import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import Providers from './providers/providers';
import Masthead from '@/components/common/Header/Masthead';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, poppins.variable)}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            {/* TODO */}
            <Suspense>
              <Providers>
                <Masthead></Masthead>
                {children}
              </Providers>
            </Suspense>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
