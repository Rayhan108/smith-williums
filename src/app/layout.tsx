import { Aboreto, Nunito } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./globals.css";
import Providers from '@/Providers/Providers';


// Import fonts
const aboreto = Aboreto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-aboreto',
});

const nunito = Nunito({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Smith-williums',
  description: "Let's build something different",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${nunito.variable} antialiased bg-white`}
        cz-shortcut-listen="true"
      >
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
