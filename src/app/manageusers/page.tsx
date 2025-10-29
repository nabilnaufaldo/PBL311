// app/manageusers/page.tsx
'use client'
import Sidebar from '@/components/layout/sidebar'
import { useState } from 'react'

// Mock data untuk users
const mockUsers = [
  {
    id: 1,
    name: 'Paul Pogba',
    email: 'paul62@henson-sweeney.com',
    role: 'Owner',
    faceRegistration: 'Registered',
    status: 'Inactive',
    lastAccess: 'Today, 11:45 AM'
  },
  {
    id: 2,
    name: 'Adams Bianca',
    email: 'adamabianca@gmail.com',
    role: 'User',
    faceRegistration: 'Not Registered',
    status: 'Active',
    lastAccess: 'Today, 08:45 AM'
  },
  {
    id: 3,
    name: 'Metza Mola',
    email: 'zmaza@taylor.com',
    role: 'Owner',
    faceRegistration: 'Registered',
    status: 'Active',
    lastAccess: 'Today, 07:45 AM'
  },
  {
    id: 4,
    name: 'Vanessa Martinez',
    email: 'vanessamartinez@bowman-brown.net',
    role: 'User',
    faceRegistration: 'Registered',
    status: 'Active',
    lastAccess: 'Today, 07:21 AM'
  },
  {
    id: 5,
    name: 'Miranda Andrew',
    email: 'mirandaandrew@hotmail.com',
    role: 'Owner',
    faceRegistration: 'Registered',
    status: 'Inactive',
    lastAccess: 'Yesterday, 08:45 AM'
  },
  {
    id: 6,
    name: 'Tina Williams',
    email: 'tinawilliams@massey-weber.com',
    role: 'Owner',
    faceRegistration: 'Registered',
    status: 'Active',
    lastAccess: '3 days ago'
  },
  {
    id: 7,
    name: 'Miles Penny',
    email: 'milespenny@yahoo.com',
    role: 'User',
    faceRegistration: 'Not Registered',
    status: 'Active',
    lastAccess: '5 days ago'
  },
  {
    id: 8,
    name: 'Andrew Herman',
    email: 'andrewherman@hotmail.com',
    role: 'Owner',
    faceRegistration: 'Registered',
    status: 'Inactive',
    lastAccess: '1 week ago'
  }
]

export default function ManageUsers() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [statusFilter, setStatusFilter] = useState('All status')

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === 'All Roles' || user.role === roleFilter
    const matchesStatus = statusFilter === 'All status' || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ))
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        {/* Main Content */}
        <main className="flex-1 p-6 bg-violet-50">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">User Management</h1>
          </div>

          {/* Card 1: Search and Filter */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            {/* Search and Filter Section */}
            <div className="mb-6">
              {/* Search and Filter Row */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4 items-end">
                {/* Search Input dengan Icon */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Users</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-violet-100 text-gray-700"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Role Dropdown */}
                <div className="w-full lg:w-48">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <div className="relative">
                    <select 
                      className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-violet-100 text-gray-700"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option>All Roles</option>
                      <option>Owner</option>
                      <option>User</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Status Dropdown */}
                <div className="w-full lg:w-48">
  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
  <div className="relative">
    <select 
      className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-violet-100 text-gray-700"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option className="text-gray-600">All status</option>
      <option className="text-gray-600">Active</option>
      <option className="text-gray-600">Inactive</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

                {/* Filter Button dengan Icon */}
                <div className="w-full lg:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-2 invisible">Filter</label>
                  <button className="w-full lg:w-32 px-4 py-2 bg-violet-100 text-gray-600 rounded-lg hover:bg-[#7277F1] transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                    </svg>
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Users Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#664AFC]">Daftar Pengguna</h3>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-400 bg-violet-100">
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">User</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Face Registration</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Last Access</th>
                    <th className="text-left py-3 px-4 text-sm font-bold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === 'Owner' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.faceRegistration === 'Registered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.faceRegistration}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{user.lastAccess}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => toggleUserStatus(user.id)}
                            className={`px-3 py-1 rounded text-xs font-medium ${
                              user.status === 'Active' 
                                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                            }`}
                          >
                            {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                          </button>
                          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 pt-4 border-b border-gray-200">
              <button className="px-4 py-2 bg-[#D9D9D9] border border-gray-300 rounded-lg text-[#7277F1] hover:bg-gray-50 transition-colors">
                Previous
              </button>
              
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-[#7277F1] text-white rounded-lg">1</button>
                <button className="w-8 h-8 border border-gray-300 rounded-lg text-[#7277F1] hover:bg-gray-50">2</button>
              </div>
              
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-[#7277F1] hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}