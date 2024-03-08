import Header from '@/components/partials/Header';
import { Syne, Poppins } from 'next/font/google';
import '@/assets/styles/globals.scss';
import Hero from '@/components/UI/Hero';

const syne = Syne({ subsets: ['latin'] })
const poppins = Poppins(
  { 
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  },
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <Header />
        <Hero />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
