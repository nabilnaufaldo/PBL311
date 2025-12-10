// app/history/page.tsx
"use client";

import Sidebar from '@/components/layout/sidebar'
import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  FileText, 
  FileSpreadsheet, 
  FileCode,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Users,
  Calendar,
  DoorOpen,
  CheckCircle,
  XCircle,
  Clock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

type LogAkses = {
  id: string;
  namaPengguna: string;
  pintu: string;
  tipeAkses: string;
  status: 'berhasil' | 'gagal';
  waktu: string;
  waktuRelatif: string;
};

type Laporan = {
  id: string;
  judul: string;
  deskripsi: string;
};

type DataAnalitik = {
  waktu: string;
  akses: number;
};

export default function HalamanHistoryAnalitik() {
  // State untuk filter
  const [rentangTanggal, setRentangTanggal] = useState({ mulai: '', akhir: '' });
  const [pintuTerpilih, setPintuTerpilih] = useState('Semua Pintu');
  const [tipeAksesTerpilih, setTipeAksesTerpilih] = useState('Semua Tipe');
  const [rentangWaktuTerpilih, setRentangWaktuTerpilih] = useState<'harian' | 'mingguan' | 'bulanan'>('harian');
  
  // State untuk data
  const [logAkses, setLogAkses] = useState<LogAkses[]>([
    { id: '1', namaPengguna: 'Paul Pogba', pintu: 'Pintu Lab XII.2', tipeAkses: 'Pengenalan Wajah', status: 'berhasil', waktu: '2024-01-15T08:15:00', waktuRelatif: 'Hari ini, 08:15' },
    { id: '2', namaPengguna: 'Adams Blanca', pintu: 'Pintu Lab XII.3', tipeAkses: 'Kartu Akses', status: 'berhasil', waktu: '2024-01-15T07:45:00', waktuRelatif: 'Hari ini, 07:45' },
    { id: '3', namaPengguna: 'Meiza Mola', pintu: 'Pintu Lab XII.4', tipeAkses: 'Pengenalan Wajah', status: 'gagal', waktu: '2024-01-15T07:20:00', waktuRelatif: 'Hari ini, 07:20' },
    { id: '4', namaPengguna: 'Vanessa Martinez', pintu: 'Pintu Lab XII.4', tipeAkses: 'Kode PIN', status: 'gagal', waktu: '2024-01-15T07:20:00', waktuRelatif: 'Hari ini, 07:20' },
    { id: '5', namaPengguna: 'Sistem', pintu: 'Semua Pintu', tipeAkses: 'Kunci Terjadwal', status: 'berhasil', waktu: '2024-01-14T21:00:00', waktuRelatif: 'Kemarin, 21:00' },
    { id: '6', namaPengguna: 'John Doe', pintu: 'Pintu Lab XII.2', tipeAkses: 'Aplikasi Mobile', status: 'berhasil', waktu: '2024-01-14T18:30:00', waktuRelatif: 'Kemarin, 18:30' },
    { id: '7', namaPengguna: 'Jane Smith', pintu: 'Pintu Lab XII.3', tipeAkses: 'Kartu Akses', status: 'gagal', waktu: '2024-01-14T15:45:00', waktuRelatif: 'Kemarin, 15:45' },
    { id: '8', namaPengguna: 'Robert Johnson', pintu: 'Pintu Lab XII.4', tipeAkses: 'Biometrik', status: 'berhasil', waktu: '2024-01-14T12:15:00', waktuRelatif: 'Kemarin, 12:15' },
  ]);
  
  const [laporan, setLaporan] = useState<Laporan[]>([
    { id: '1', judul: 'Laporan Aktivitas Pengguna', deskripsi: 'Ringkasan aktivitas akses pengguna' },
    { id: '2', judul: 'Tingkat Keberhasilan Akses', deskripsi: 'Perbandingan percobaan akses berhasil vs gagal' },
    { id: '3', judul: 'Waktu Akses Puncak', deskripsi: 'Analisis jam akses tersibuk' },
    { id: '4', judul: 'Laporan Insiden Keamanan', deskripsi: 'Percobaan akses gagal dan peringatan keamanan' },
  ]);
  
  // Data analitik untuk tampilan harian (sesuai gambar)
  const [dataAnalitik, setDataAnalitik] = useState<DataAnalitik[]>([
    { waktu: '12AM', akses: 2 },
    { waktu: '4AM', akses: 4 },
    { waktu: '8AM', akses: 14 },
    { waktu: '12PM', akses: 10 },
    { waktu: '4PM', akses: 8 },
    { waktu: '8PM', akses: 6 },
  ]);
  
  const [logTersaring, setLogTersaring] = useState<LogAkses[]>(logAkses);
  const [istilahPencarian, setIstilahPencarian] = useState('');
  const [laporanDiperluas, setLaporanDiperluas] = useState<string | null>(null);
  
  // Opsi filter
  const opsiPintu = ['Semua Pintu', 'Pintu Lab XII.2', 'Pintu Lab XII.3', 'Pintu Lab XII.4'];
  const opsiTipeAkses = ['Semua Tipe', 'Pengenalan Wajah', 'Kartu Akses', 'Kode PIN', 'Aplikasi Mobile', 'Biometrik', 'Kunci Terjadwal'];
  
  // Filter log berdasarkan kriteria
  useEffect(() => {
    let logs = [...logAkses];
    
    // Filter berdasarkan pencarian
    if (istilahPencarian) {
      logs = logs.filter(log => 
        log.namaPengguna.toLowerCase().includes(istilahPencarian.toLowerCase()) ||
        log.pintu.toLowerCase().includes(istilahPencarian.toLowerCase()) ||
        log.tipeAkses.toLowerCase().includes(istilahPencarian.toLowerCase())
      );
    }
    
    // Filter berdasarkan pintu
    if (pintuTerpilih !== 'Semua Pintu') {
      logs = logs.filter(log => log.pintu === pintuTerpilih);
    }
    
    // Filter berdasarkan tipe akses
    if (tipeAksesTerpilih !== 'Semua Tipe') {
      logs = logs.filter(log => log.tipeAkses === tipeAksesTerpilih);
    }
    
    // Filter berdasarkan rentang tanggal
    if (rentangTanggal.mulai && rentangTanggal.akhir) {
      const tanggalMulai = new Date(rentangTanggal.mulai);
      const tanggalAkhir = new Date(rentangTanggal.akhir);
      tanggalAkhir.setHours(23, 59, 59, 999);
      
      logs = logs.filter(log => {
        const tanggalLog = new Date(log.waktu);
        return tanggalLog >= tanggalMulai && tanggalLog <= tanggalAkhir;
      });
    }
    
    setLogTersaring(logs);
  }, [istilahPencarian, pintuTerpilih, tipeAksesTerpilih, rentangTanggal, logAkses]);
  
  // Fungsi untuk ekspor data
  const handleEkspor = (format: 'pdf' | 'excel' | 'csv') => {
    alert(`Mengekspor data sebagai ${format.toUpperCase()}...`);
    // Di sini Anda bisa menambahkan logika ekspor sebenarnya
  };
  
  // Fungsi untuk generate data analitik berdasarkan rentang waktu
  const generateDataAnalitik = (rentang: 'harian' | 'mingguan' | 'bulanan') => {
    if (rentang === 'mingguan') {
      setDataAnalitik([
        { waktu: 'Sen', akses: 45 },
        { waktu: 'Sel', akses: 52 },
        { waktu: 'Rab', akses: 48 },
        { waktu: 'Kam', akses: 60 },
        { waktu: 'Jum', akses: 55 },
        { waktu: 'Sab', akses: 30 },
        { waktu: 'Min', akses: 25 },
      ]);
    } else if (rentang === 'bulanan') {
      setDataAnalitik([
        { waktu: 'Jan', akses: 1200 },
        { waktu: 'Feb', akses: 1350 },
        { waktu: 'Mar', akses: 1100 },
        { waktu: 'Apr', akses: 1250 },
        { waktu: 'Mei', akses: 1400 },
        { waktu: 'Jun', akses: 1300 },
      ]);
    } else {
      // Tampilan harian - sesuai gambar
      setDataAnalitik([
        { waktu: '12AM', akses: 2 },
        { waktu: '4AM', akses: 4 },
        { waktu: '8AM', akses: 14 },
        { waktu: '12PM', akses: 10 },
        { waktu: '4PM', akses: 8 },
        { waktu: '8PM', akses: 6 },
      ]);
    }
  };
  
  // Hitung statistik
  const totalAkses = logTersaring.length;
  const aksesBerhasil = logTersaring.filter(log => log.status === 'berhasil').length;
  const aksesGagal = logTersaring.filter(log => log.status === 'gagal').length;
  const tingkatKeberhasilan = totalAkses > 0 ? ((aksesBerhasil / totalAkses) * 100).toFixed(1) : '0.0';
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Area Konten Utama */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">History & Analytics</h1>
            </div>
          </div>
          
          {/* Statistik Ringkas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DoorOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Akses</p>
                  <p className="text-2xl font-bold text-gray-800">{totalAkses}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Berhasil</p>
                  <p className="text-2xl font-bold text-gray-800">{aksesBerhasil}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gagal</p>
                  <p className="text-2xl font-bold text-gray-800">{aksesGagal}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tingkat Keberhasilan</p>
                  <p className="text-2xl font-bold text-gray-800">{tingkatKeberhasilan}%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bagian Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-6 h-6 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* Rentang Tanggal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rentang Tanggal</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={rentangTanggal.mulai}
                    onChange={(e) => setRentangTanggal({...rentangTanggal, mulai: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              </div>
              
              {/* Pilih Pintu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pintu</label>
                <select
                  value={pintuTerpilih}
                  onChange={(e) => setPintuTerpilih(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg w-full"
                >
                  {opsiPintu.map(opsi => (
                    <option key={opsi} value={opsi}>{opsi}</option>
                  ))}
                </select>
              </div>
              
              {/* Pilih Tipe Akses */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Akses</label>
                <select
                  value={tipeAksesTerpilih}
                  onChange={(e) => setTipeAksesTerpilih(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg w-full"
                >
                  {opsiTipeAkses.map(opsi => (
                    <option key={opsi} value={opsi}>{opsi}</option>
                  ))}
                </select>
              </div>
              
              {/* Pencarian */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cari</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari log..."
                    value={istilahPencarian}
                    onChange={(e) => setIstilahPencarian(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setRentangTanggal({ mulai: '', akhir: '' });
                  setPintuTerpilih('Semua Pintu');
                  setTipeAksesTerpilih('Semua Tipe');
                  setIstilahPencarian('');
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
              >
                Hapus Filter
              </button>
            </div>
          </div>
          
          {/* Konten Utama - Layout Vertikal */}
          <div className="space-y-6">
            {/* Log Akses */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h2 className="text-lg font-semibold text-gray-800">Log Akses</h2>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {logTersaring.length} catatan
                  </span>
                </div>
                
                {/* Tombol Ekspor */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEkspor('pdf')}
                    className="px-3 py-2 text-red-600 border border-red-200 rounded-lg font-medium flex items-center gap-2 hover:bg-red-50"
                  >
                    <FileText className="w-4 h-4" />
                    PDF
                  </button>
                  <button
                    onClick={() => handleEkspor('excel')}
                    className="px-3 py-2 text-green-600 border border-green-200 rounded-lg font-medium flex items-center gap-2 hover:bg-green-50"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    Excel
                  </button>
                  <button
                    onClick={() => handleEkspor('csv')}
                    className="px-3 py-2 text-blue-600 border border-blue-200 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50"
                  >
                    <FileCode className="w-4 h-4" />
                    CSV
                  </button>
                </div>
              </div>
              
              {/* Daftar Log */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {logTersaring.map(log => (
                  <div key={log.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div className={`p-1 rounded-full ${log.status === 'berhasil' ? 'bg-green-100' : 'bg-red-100'}`}>
                            {log.status === 'berhasil' ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-800">{log.namaPengguna}</span>
                              <span className="text-sm text-gray-500">•</span>
                              <span className="text-sm text-gray-600">{log.pintu}</span>
                              <span className="text-sm text-gray-500">•</span>
                              <span className="text-sm text-gray-600">{log.tipeAkses}</span>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                log.status === 'berhasil' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {log.status === 'berhasil' ? 'Berhasil' : 'Gagal'}
                              </span>
                              <span className="text-sm text-gray-500">{log.waktuRelatif}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {logTersaring.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Tidak ada log akses yang sesuai dengan filter Anda
                  </div>
                )}
              </div>
            </div>
            
            {/* Analitik Akses dengan Recharts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  <h2 className="text-lg font-semibold text-gray-800">Analitik Akses</h2>
                </div>
                
                {/* Toggle Rentang Waktu */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {(['harian', 'mingguan', 'bulanan'] as const).map(rentang => (
                    <button
                      key={rentang}
                      onClick={() => {
                        setRentangWaktuTerpilih(rentang);
                        generateDataAnalitik(rentang);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-medium capitalize ${
                        rentangWaktuTerpilih === rentang
                          ? 'bg-white text-gray-800 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {rentang === 'harian' ? 'Harian' : rentang === 'mingguan' ? 'Mingguan' : 'Bulanan'}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Chart dengan Recharts */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataAnalitik}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
                    <XAxis 
                      dataKey="waktu" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      domain={[0, 16]}
                      ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value} akses`, 'Akses']}
                      labelFormatter={(label) => `Waktu: ${label}`}
                      contentStyle={{ 
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        backgroundColor: 'white'
                      }}
                    />
                    <Bar 
                      dataKey="akses" 
                      radius={[4, 4, 0, 0]}
                    >
                      {dataAnalitik.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill="url(#gradienWarna)"
                        />
                      ))}
                    </Bar>
                    <defs>
                      <linearGradient id="gradienWarna" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Laporan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-orange-500" />
                <h2 className="text-lg font-semibold text-gray-800">Laporan</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {laporan.map(lap => (
                  <div key={lap.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                      onClick={() => setLaporanDiperluas(laporanDiperluas === lap.id ? null : lap.id)}
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">{lap.judul}</h3>
                        <p className="text-sm text-gray-600 mt-1">{lap.deskripsi}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Mengunduh ${lap.judul}...`);
                          }}
                          className="p-2 text-gray-600 hover:text-blue-600"
                          title="Unduh Laporan"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        {laporanDiperluas === lap.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {laporanDiperluas === lap.id && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          {lap.id === '1' && (
                            <div>
                              <p className="mb-2">Laporan ini mencakup:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Pola login/akses pengguna</li>
                                <li>Jam paling aktif</li>
                                <li>Pintu yang sering diakses</li>
                                <li>Analisis perilaku pengguna</li>
                              </ul>
                            </div>
                          )}
                          {lap.id === '2' && (
                            <div>
                              <p className="mb-2">Analisis tingkat keberhasilan:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Tingkat keberhasilan keseluruhan: {tingkatKeberhasilan}%</li>
                                <li>Breakdown akses gagal</li>
                                <li>Analisis tren waktu</li>
                                <li>Perbandingan dengan periode sebelumnya</li>
                              </ul>
                            </div>
                          )}
                          {lap.id === '3' && (
                            <div>
                              <p className="mb-2">Analisis waktu akses puncak:</p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Jam tersibuk: {dataAnalitik.reduce((max, data) => data.akses > max.akses ? data : max).waktu}</li>
                                <li>Rata-rata akses harian</li>
                                <li>Pola akhir pekan vs hari kerja</li>
                                <li>Tren musiman</li>
                              </ul>
                            </div>
                          )}
                          {lap.id === '4' && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                <span className="font-medium">Peringatan Keamanan: {aksesGagal} percobaan gagal</span>
                              </div>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Log percobaan akses gagal</li>
                                <li>Deteksi aktivitas mencurigakan</li>
                                <li>Peringatan pelanggaran keamanan</li>
                                <li>Laporan pelanggaran kepatuhan</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}