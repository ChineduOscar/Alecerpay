import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import DashboardLayout from './dashboard/DashboardLayout';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'AlecerPay – Global Payment Solutions',
  description:
    'AlecerPay: Everything you need to manage global payments securely and efficiently.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
