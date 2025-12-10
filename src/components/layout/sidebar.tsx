'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Handle body scroll lock
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }
  }, [isMobile, isSidebarOpen])

  const navItems = [
    { 
      href: '/dashboard', 
      text: 'Dashboard', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: '/manageusers', 
      text: 'Pengguna',
      icon: (
        // <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="users">
        //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" />
        //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 20a6 6 0 0112 0v1H2v-1zM22 20v-1a6 6 0 00-5-5.917" />
        //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        // </svg>
        // <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="users filled">
        //   <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm8 8v-1a5 5 0 00-5-5H7a5 5 0 00-5 5v1h18zM20 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        // </svg>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      )
    },
    { 
      href: '/akseskontrol', 
      text: 'Akses Kontrol',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      href: '/history', 
      text: 'Riwayat & Analisis',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      href: '#', 
      text: 'Manajemen Kamera',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      href: '#', 
      text: 'Pengaturan Sistem',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ]

  const isActive = (href: string) => {
    return pathname === href 
      ? 'bg-[#7277F1] text-white shadow-md' 
      : 'text-[#666666] hover:bg-[#B5B2FF] hover:text-[#7277F1]'
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleNavClick = () => {
    if (isMobile) {
      toggleSidebar()
    }
  }

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 rounded-md bg-[#7277F1] text-white hover:bg-[#5B61E0] lg:hidden ${
          isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay - Mobile Only */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 z-40
        w-64 bg-[#C4BFFF] shadow-lg min-h-screen
        transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex justify-center flex-1">
              <div className="relative flex justify-center">
                <Image
                  src="/dash-logo.png"
                  alt="Dashboard Logo"
                  width={230}
                  height={100}
                  className="rounded-lg mx-auto"
                  priority
                />
              </div>
            </div>
            
            {/* Close Button for Mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md text-[#666666] hover:bg-[#B5B2FF] hover:text-[#7277F1]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium ${isActive(item.href)}`}
                onClick={handleNavClick}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}