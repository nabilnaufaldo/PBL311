export const DoorStatusCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className=" from-gray-600 to-blue-800 p-6">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <svg
            className="w-6 h-6 text-[#664AFC]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="5" y="4" width="14" height="16" rx="1" strokeWidth="2" />
            <circle cx="16" cy="12" r="1" fill="currentColor" />
          </svg>
          <h1 className="text-lg font-bold text-[#664AFC]">Status Pintu</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-lg font-semibold text-green-400 text-center">
            Door Lab XII.2:
          </h2>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Terbuka
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Lock Control Section */}
        <div className="mb-4">
          <img src="vector.png" alt="" className="mx-auto mb-6 h-53" />
          <div className="flex justify-center space-x-4">
            {/* Lock Door Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-semibold transition-colors flex items-center gap-2">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Kunci
            </button>

            {/* Unlock Button */}
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-3xl font-semibold transition-colors flex items-center gap-2">
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
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              Buka
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
