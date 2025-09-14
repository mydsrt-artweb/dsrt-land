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
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  )
}
