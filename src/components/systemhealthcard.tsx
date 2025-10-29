export const SystemHealthCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
  <svg className="w-6 h-6 text-[#664AFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14l2-2 2 2 2-2 2 2" />
  </svg>
  <h3 className="text-lg font-semibold text-[#664AFC]">Pemantauan Kesehatan Sistem</h3>
</div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-5 bg-white border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">Door Lock System</span>
          </div>
          <span className="text-sm text-green-600">Operating normally</span>
        </div>
        <div className="flex items-center justify-between p-5 bg-white border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">Camera System</span>
          </div>
          <span className="text-sm text-green-600">Operating normally</span>
        </div>
        <div className="flex items-center justify-between p-5 bg-white border border-yellow-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">Face Recognition</span>
          </div>
          <span className="text-sm text-yellow-600">Low accuracy detected</span>
        </div>
        <div className="flex items-center justify-between p-5 bg-white border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">Network Connection</span>
          </div>
          <span className="text-sm text-green-600">Stable</span>
        </div>
        <div className="flex items-center justify-between p-5 bg-white border border-red-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">Storage</span>
          </div>
          <span className="text-sm text-red-600">85% full - needs attention</span>
        </div>
      </div>
    </div>
  );
};