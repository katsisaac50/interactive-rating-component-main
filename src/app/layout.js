import './globals.css'
import { Inter } from 'next/font/google';
import Checkout from './ceckout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Rating',
  description: 'Challenge from Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {<Checkout />} </body>
    </html>
  )
}
