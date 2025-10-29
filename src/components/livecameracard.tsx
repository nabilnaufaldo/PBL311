export const LiveCameraCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-6 h-6 text-[#664AFC]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8v.01M17 12v.01M17 16v.01"
          />
        </svg>
        <h3 className="text-lg font-semibold text-[#664AFC]">
          Live Camera Feed
        </h3>
      </div>
      <div className="bg-[#323232] rounded-lg p-30 text-center mb-2">
        <div className="text-gray-400 mb-2">
          <svg
            className="w-12 h-12 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-gray-400 font-medium">Kamera tidak tersedia</p>
      </div>
      <div className="flex justify-center space-x-3 mt-[14px]">
        {/* Play Button */}
        <button className="bg-blue-600 hover:bg-blue-300 text-white hover:text-blue-600 border border-blue-600 px-8 py-2 rounded-3xl font-medium transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Mulai
        </button>

        {/* Record Button */}
        <button className="bg-white hover:bg-red-500 text-red-500 hover:text-white border border-red-500 px-8 py-2 rounded-3xl font-medium transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" />
          </svg>
          Rekam
        </button>

        {/* Fullscreen Button */}
        <button className="bg-white hover:bg-gray-500 text-gray-500 hover:text-white border border-gray-500 px-8 py-2 rounded-3xl font-medium transition-all duration-300 hover:scale-105 transform flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          Layar Penuh
        </button>
      </div>
    </div>
  );
};
