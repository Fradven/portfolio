
import './globals.css'
import { Inter } from 'next/font/google'
import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
