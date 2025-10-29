export const RecentActivitiesCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-[#664AFC]">
          Aktivitas Akses Terkini
        </h3>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 rounded-lg">
          <span className="font-bold text-gray-600">Nabil Naufaldo</span>
          <span className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm text-white bg-green-600 px-3 rounded-xl">
              Granted
            </span>
            <span className="text-xs text-gray-600">08:37 AM</span>
          </span>
        </div>
        <div className="border-t border-gray-400 my-2"></div>

        <div className="flex justify-between items-center py-2 rounded-lg">
          <span className="font-bold text-gray-600">Ricky Alfiansyah</span>
          <span className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm text-white bg-green-600 px-3 rounded-xl">
              Granted
            </span>
            <span className="text-xs text-gray-600">08:37 AM</span>
          </span>
        </div>
        <div className="border-t border-gray-400 my-2"></div>

        <div className="flex justify-between items-center py-2 rounded-lg">
          <span className="font-bold text-gray-600">Aurellia Azzahra</span>
          <span className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm text-white bg-red-600 px-3 rounded-xl">
              Denied
            </span>
            <span className="text-xs text-gray-600">08:37 AM</span>
          </span>
        </div>
        <div className="border-t border-gray-400 my-1"></div>
        <div className="flex justify-between items-center py-2 rounded-lg">
          <span className="font-bold text-gray-600">Nicholas Jonah</span>
          <span className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm text-white bg-green-600 px-3 rounded-xl">
              Granted
            </span>
            <span className="text-xs text-gray-600">08:37 AM</span>
          </span>
        </div>
        <div className="border-t border-gray-400 my-2"></div>

        <div className="flex justify-between items-center py-2 rounded-lg">
          <span className="font-bold text-gray-600">Zahrah Sakinah</span>
          <span className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm text-white bg-green-600 px-3 rounded-xl">
              Granted
            </span>
            <span className="text-xs text-gray-600">08:37 AM</span>
          </span>
        </div>
        <div className="border-t border-gray-400 my-2"></div>
      </div>
    </div>
  );
};
