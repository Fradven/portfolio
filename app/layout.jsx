
import './globals.css'
import { Inter } from 'next/font/google'
import { Jost } from 'next/font/google'
import Header from './components/Header'
const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
