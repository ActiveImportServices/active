import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Active Contracting & Import Co. | Leading Construction Company in Qatar',
  description:
    'Active Contracting and Import Co. - Leading contracting company in Qatar since 2004. Specialized in limestone aggregate, road construction, excavation, and large-scale infrastructure projects.',
  keywords:
    'construction Qatar, contracting company Qatar, limestone aggregate, road construction, excavation Qatar, Active Contracting',
  authors: [{ name: 'Active Contracting & Import Co.' }],
  openGraph: {
    title:
      'Active Contracting & Import Co. | Leading Construction Company in Qatar',
    description:
      'Breaking Ground To Success - Premium construction and contracting services in Qatar since 2004',
    url: 'https://activecontracting.net',
    siteName: 'Active Contracting & Import Co.',
    images: [
      {
        url: 'https://activecontracting.net/wp-content/uploads/2013/03/thumb.jpg',
        width: 248,
        height: 88,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Active Contracting & Import Co.',
    description: 'Leading Construction Company in Qatar Since 2004',
  },
  icons: {
    icon: 'http://activecontracting.net/wp-content/uploads/2013/10/favicon3.ico',
    apple:
      'http://activecontracting.net/wp-content/uploads/2013/10/favicon1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
