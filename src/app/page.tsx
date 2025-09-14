'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import LoginModal from '../components/LoginModal'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import ThreeBg from '../components/ThreeBg'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ThreeBg />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onLoginClick={() => setModalOpen(true)} />
        <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <main className="flex-1 flex flex-col">
          <HeroSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
