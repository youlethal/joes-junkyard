
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}