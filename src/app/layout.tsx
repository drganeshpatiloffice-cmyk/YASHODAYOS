import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CareerProvider } from '@/context/CareerContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YASHODAYOS - Career Guidance Platform',
  description: 'Your Academic Success & Holistic Development is Our Only Success. Comprehensive career guidance for students from Class 9 to Post-Graduation.',
  keywords: ['career guidance', 'education', 'scholarships', 'exams', 'skills'],
  authors: [{ name: 'YASHODAYOS Team' }],
  openGraph: {
    type: 'website',
    url: 'https://yashodayos.com',
    title: 'YASHODAYOS - Career Guidance Platform',
    description: 'Discover your future with personalized career guidance',
    siteName: 'YASHODAYOS',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-white`}>
        <CareerProvider>
          {children}
        </CareerProvider>
      </body>
    </html>
  );
}
