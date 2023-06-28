import './globals.css'
import Head from "next/head"
import TopBar from './modules/TopBar'
import NavBar from './modules/NavBar'
import '@splidejs/react-splide/css';
import Footer from './modules/Footer';

export const metadata = {
  title: 'Saguaro',
  description: 'Ser Saguaro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='scroll-smooth'>
      <body className='font-soleil scroll-smooth'>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
