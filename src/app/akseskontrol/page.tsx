'use client'

import Sidebar from '@/components/layout/sidebar'
import { useState } from "react";
import { 
  Lock, 
  Unlock, 
  AlertTriangle, 
  Clock, 
  Users, 
  Calendar,
  Search,
  Edit,
  Trash2,
  Plus,
  Check,
  X
} from "lucide-react";

type StatusPintu = 'terkunci' | 'terbuka';
type Pintu = {
  id: string;
  nama: string;
  status: StatusPintu;
  jadwalKunci?: string;
  jadwalBuka?: string;
};

type Jadwal = {
  id: string;
  nama: string;
  pintu: string[];
  waktu: string;
  status: 'aktif' | 'nonaktif';
  hari: string;
};

type IzinPengguna = {
  idPengguna: string;
  namaPengguna: string;
  pintu: {
    [key: string]: boolean;
  };
};

export default function HalamanKontrolAkses() {
  // State untuk Emergency Access Override
  const [overrideDarurat, setOverrideDarurat] = useState(false);
  
  // State untuk Kontrol Pintu
  const [pintu, setPintu] = useState<Pintu[]>([
    { id: 'pintu1', nama: 'Pintu Lab XII.2', status: 'terbuka', jadwalKunci: 'Jadwal Kunci', jadwalBuka: 'Jadwal Buka' },
    { id: 'pintu2', nama: 'Pintu Lab XII.3', status: 'terkunci', jadwalKunci: 'Jadwal Kunci', jadwalBuka: 'Jadwal Buka' },
    { id: 'pintu3', nama: 'Pintu Lab XII.4', status: 'terbuka', jadwalKunci: 'Jadwal Kunci', jadwalBuka: 'Jadwal Buka' },
  ]);
  
  // State untuk Jadwal
  const [jadwal, setJadwal] = useState<Jadwal[]>([
    { id: 'jadwal1', nama: 'Buka Pagi', pintu: ['Pintu Lab XII.2', 'Pintu Lab XII.3'], waktu: '07:00', status: 'aktif', hari: 'Sen-Jum' },
    { id: 'jadwal2', nama: 'Akses Akhir Pekan', pintu: ['Pintu Lab XII.2', 'Pintu Lab XII.3', 'Pintu Lab XII.4'], waktu: '09:00 - 20:00', status: 'nonaktif', hari: 'Sab-Min' },
    { id: 'jadwal3', nama: 'Buka Pagi', pintu: ['Pintu Lab XII.2', 'Pintu Lab XII.3'], waktu: '07:00', status: 'aktif', hari: 'Sen-Jum' },
    { id: 'jadwal4', nama: 'Akses Akhir Pekan', pintu: ['Pintu Lab XII.2', 'Pintu Lab XII.3', 'Pintu Lab XII.4'], waktu: '09:00 - 20:00', status: 'nonaktif', hari: 'Sab-Min' },
    { id: 'jadwal5', nama: 'Buka Pagi', pintu: ['Pintu Lab XII.2', 'Pintu Lab XII.3'], waktu: '07:00', status: 'aktif', hari: 'Sen-Jum' },
  ]);
  
  // State untuk Izin Akses
  const [izin, setIzin] = useState<IzinPengguna[]>([
    { idPengguna: 'P001', namaPengguna: 'John Doe', pintu: { 'Pintu Lab XII.2': true, 'Pintu Lab XII.3': false, 'Pintu Lab XII.4': true } },
    { idPengguna: 'P002', namaPengguna: 'Jane Smith', pintu: { 'Pintu Lab XII.2': true, 'Pintu Lab XII.3': true, 'Pintu Lab XII.4': false } },
    { idPengguna: 'P003', namaPengguna: 'Bob Johnson', pintu: { 'Pintu Lab XII.2': false, 'Pintu Lab XII.3': true, 'Pintu Lab XII.4': true } },
    { idPengguna: 'P004', namaPengguna: 'Alice Brown', pintu: { 'Pintu Lab XII.2': true, 'Pintu Lab XII.3': true, 'Pintu Lab XII.4': true } },
  ]);
  
  const [istilahPencarian, setIstilahPencarian] = useState('');
  const [tabAktif, setTabAktif] = useState<'pengguna' | 'pintu' | 'waktu'>('pengguna');
  const [jadwalBaru, setJadwalBaru] = useState({
    nama: '',
    pintu: [] as string[],
    waktu: '',
    hari: 'Sen-Jum',
    status: 'aktif' as 'aktif' | 'nonaktif'
  });

  // Fungsi untuk toggle status pintu
  const toggleStatusPintu = (pintuId: string) => {
    setPintu(pintuSebelum => 
      pintuSebelum.map(pintu => 
        pintu.id === pintuId 
          ? { ...pintu, status: pintu.status === 'terkunci' ? 'terbuka' : 'terkunci' }
          : pintu
      )
    );
  };

  // Fungsi untuk toggle izin pengguna
  const toggleIzin = (idPengguna: string, namaPintu: string) => {
    setIzin(sebelum => 
      sebelum.map(pengguna => 
        pengguna.idPengguna === idPengguna 
          ? { 
              ...pengguna, 
              pintu: { 
                ...pengguna.pintu, 
                [namaPintu]: !pengguna.pintu[namaPintu]
              }
            }
          : pengguna
      )
    );
  };

  // Fungsi untuk menambahkan jadwal baru
 const tambahJadwalBaru = () => {
  if (jadwalBaru.nama && jadwalBaru.waktu) {
    const jadwalBaruObjek: Jadwal = {
      id: `jadwal${jadwal.length + 1}`,
      nama: jadwalBaru.nama,
      pintu: jadwalBaru.pintu,
      waktu: jadwalBaru.waktu,
      status: jadwalBaru.status,
      hari: jadwalBaru.hari
    };
    setJadwal([...jadwal, jadwalBaruObjek]);
    setJadwalBaru({
      nama: '',
      pintu: [],
      waktu: '',
      hari: 'Sen-Jum',
      status: 'aktif'
    });
  }
};

  // Filter izin berdasarkan istilah pencarian
  const izinTersaring = izin.filter(pengguna =>
    pengguna.idPengguna.toLowerCase().includes(istilahPencarian.toLowerCase()) ||
    pengguna.namaPengguna.toLowerCase().includes(istilahPencarian.toLowerCase())
  );

  // Daftar nama pintu untuk dropdown
  const opsiPintu = ['Pintu Lab XII.2', 'Pintu Lab XII.3', 'Pintu Lab XII.4'];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6 bg-gray-50 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Kontrol Akses</h1>
        </div>

        {/* Kartu Emergency Access Override */}
        <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h2 className="text-lg font-semibold text-gray-800">Override Akses Darurat</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Aktifkan akses darurat untuk mengesampingkan semua kunci pintu dan protokol keamanan.
          </p>
          <button
            onClick={() => setOverrideDarurat(!overrideDarurat)}
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
              overrideDarurat
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            {overrideDarurat ? (
              <>
                <X className="w-4 h-4" />
                Akses Darurat Aktif
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                Aktifkan Akses Darurat
              </>
            )}
          </button>
        </div>

        {/* Bagian Kontrol Kunci Pintu */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-800">Kontrol Kunci Pintu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pintu.map(pintu => (
              <div key={pintu.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-gray-800">{pintu.nama}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pintu.status === 'terkunci' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {pintu.status === 'terkunci' ? 'Terkunci' : 'Terbuka'}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Jadwal Kunci:</span>
                    <span className="text-gray-800">{pintu.jadwalKunci}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Jadwal Buka:</span>
                    <span className="text-gray-800">{pintu.jadwalBuka}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleStatusPintu(pintu.id)}
                  className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    pintu.status === 'terkunci'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {pintu.status === 'terkunci' ? (
                    <>
                      <Unlock className="w-4 h-4" />
                      Buka Pintu
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Kunci Pintu
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Jadwal Kunci/Buka */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-gray-800">Jadwal Kunci/Buka</h2>
          </div>
          
          {/* Form Tambah Jadwal Baru */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-3">Tambah Jadwal Baru</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Nama Jadwal"
                value={jadwalBaru.nama}
                onChange={(e) => setJadwalBaru({...jadwalBaru, nama: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Waktu (contoh: 07:00)"
                value={jadwalBaru.waktu}
                onChange={(e) => setJadwalBaru({...jadwalBaru, waktu: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={jadwalBaru.hari}
                onChange={(e) => setJadwalBaru({...jadwalBaru, hari: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Sen-Jum">Senin-Jumat</option>
                <option value="Sab-Min">Sabtu-Minggu</option>
                <option value="Harian">Setiap Hari</option>
                <option value="Kustom">Hari Kustom</option>
              </select>
              <button
                onClick={tambahJadwalBaru}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Tambah Jadwal
              </button>
            </div>
          </div>
          
          {/* Daftar Jadwal */}
          <div className="space-y-3">
            {jadwal.map(jadwal => (
              <div key={jadwal.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-800">{jadwal.nama}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      jadwal.status === 'aktif' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {jadwal.status === 'aktif' ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    <span>{jadwal.pintu.join(', ')}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">{jadwal.waktu}</div>
                  <div className="text-sm text-gray-600">{jadwal.hari}</div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Manajemen Izin Akses */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold text-gray-800">Manajemen Izin Akses</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setTabAktif('pengguna')}
              className={`px-4 py-2 font-medium transition-colors ${tabAktif === 'pengguna' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Pengguna
            </button>
            <button
              onClick={() => setTabAktif('pintu')}
              className={`px-4 py-2 font-medium transition-colors ${tabAktif === 'pintu' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Pintu
            </button>
            <button
              onClick={() => setTabAktif('waktu')}
              className={`px-4 py-2 font-medium transition-colors ${tabAktif === 'waktu' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Berdasarkan Waktu
            </button>
          </div>
          
          {/* Bar Pencarian */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pengguna..."
                value={istilahPencarian}
                onChange={(e) => setIstilahPencarian(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          {/* Tabel Izin */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Pengguna</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Pintu Lab XII.2</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Pintu Lab XII.3</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Pintu Lab XII.4</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {izinTersaring.map(pengguna => (
                  <tr key={pengguna.idPengguna} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <div className="font-medium text-gray-800">{pengguna.namaPengguna}</div>
                        <div className="text-sm text-gray-600">{pengguna.idPengguna}</div>
                      </div>
                    </td>
                    {opsiPintu.map(pintu => (
                      <td key={pintu} className="px-4 py-3">
                        <button
                          onClick={() => toggleIzin(pengguna.idPengguna, pintu)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            pengguna.pintu[pintu]
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-red-100 text-red-700 hover:bg-red-200'
                          }`}
                        >
                          {pengguna.pintu[pintu] ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    ))}
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}