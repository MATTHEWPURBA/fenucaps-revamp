import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';


export const metadata: Metadata = {
  title: 'ASI Booster Fenucaps - Science Based Lactation Supplement',
  description: 'Tingkatkan produksi ASI hingga 103% dengan kandungan fenugreek, jahe, dan kunyit. Aman untuk ibu dan bayi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
// src/app/layout.tsx
