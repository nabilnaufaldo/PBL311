import Sidebar from '@/components/layout/sidebar'
import Header from '@/components/layout/header'
import { DoorStatusCard } from '@/components/doorstatuscard'
import { RecentActivitiesCard } from '@/components/recentactivitiescard'
import { LiveCameraCard } from '@/components/livecameracard'
import { SystemHealthCard } from '@/components/systemhealthcard'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 pt-0 bg-violet-50">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6 shadow-xl shadow-blue-300/50">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Pengguna</h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-400 font-medium">+3 dari minggu lalu</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 shadow-xl shadow-green-300/50">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Akses Hari ini</h3>
              <p className="text-3xl font-bold text-green-600">18</p>
              <p className="text-sm text-gray-400 font-medium">+3 dari kemarin</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 shadow-xl shadow-yellow-300/50">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Upaya Gagal</h3>
              <p className="text-3xl font-bold text-yellow-600">3</p>
              <p className="text-sm text-gray-400 font-medium">+1 dari minggu lalu</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 shadow-xl shadow-red-300/50">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Keamanan</h3>
              <p className="text-3xl font-bold text-red-600">1</p>
              <p className="text-sm text-gray-400 font-medium">+0 dari minggu lalu</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="space-y-6">
            {/* Baris 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <DoorStatusCard />
              </div>
              <div className="lg:w-2/3">
                <LiveCameraCard />
              </div>
            </div>

            {/* Baris 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivitiesCard />
              <SystemHealthCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}