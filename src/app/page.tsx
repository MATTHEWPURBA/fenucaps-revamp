// src/app/page.tsx
import Header from './components/Header'
import Certifications from './components/Certifications'
import Hero from './components/Hero'
import Research from './components/Research'
import Reviews from './components/Reviews'
import Quiz from './components/Quiz'
import Calculator from './components/Calculator'

export default function Home() {
  return (
    <main>
      <Header />
      <Certifications />
      <Hero />
      <Research />
      <Reviews />
      <Quiz />
      <Calculator />
    </main>
  )
}