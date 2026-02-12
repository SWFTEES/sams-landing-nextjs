'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import StickyBar from '@/components/StickyBar'
import Events from '@/components/Events'
import About from '@/components/About'
import Pillars from '@/components/Pillars'
import VIP from '@/components/VIP'
import Footer from '@/components/Footer'

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setShowStickyBar(rect.bottom < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.scroll-fade')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Hero />
      <StickyBar visible={showStickyBar} />
      <Events />
      <About />
      <Pillars />
      <VIP />
      <Footer />
    </>
  )
}