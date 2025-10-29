'use client'
import { useState } from 'react'
// import LogoutModal from './LogoutModal'

export default function Header() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  return (
    <>
      <header className="p-3 bg-violet-50 px-6 py-5">
        <div className="bg-white px-4 py-5 rounded-xl flex justify-between items-center shadow-lg">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Welcome,Admin Pandu.</h1>
            <p className="text-gray-800">Securedoor Management System</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsLogoutModalOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  )
}