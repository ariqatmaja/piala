import { Link } from "react-router-dom"
import { MapPin, LogOut, ExternalLink, ChevronRight } from "lucide-react"
import { usePlayerStore } from "../store/playerStore"

function Dashboard() {
  const { resetPlayers } = usePlayerStore()

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-6">
      {/* Container with padding to prevent content from touching edges */}
      <div className="container mx-auto flex max-w-6xl bg-white rounded-xl shadow-sm p-6">
        {/* Sidebar */}
        <div className="w-1/4 pr-6">
          {/* Sidebar Content in its own border */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <img src="/school-logo.png" alt="School Logo" className="w-10 h-10" />
              <h2 className="font-semibold">SMA 1 Banjarmasin</h2>
            </div>

            <nav className="space-y-3">
              <Link to="/dashboard" className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
                Dashboard
              </Link>
              <button className="flex items-center px-3 py-2 text-gray-600 w-full hover:bg-gray-50 rounded-lg">
                Piala by.U Banjarmasin
              </button>
              <button className="flex items-center justify-between px-3 py-2 text-gray-600 w-full hover:bg-gray-50 rounded-lg">
                Kontak Tim Piala by.U
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="flex items-center px-3 py-2 text-gray-600 w-full hover:bg-gray-50 rounded-lg">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </nav>
          </div>
          {/* Empty space below sidebar content */}
        </div>

        {/* Main Content */}
        <div className="w-3/4 pl-4 space-y-6">
          {/* Header Card */}
          <div className="bg-green-50 rounded-xl shadow-sm p-5 relative overflow-hidden border border-green-100">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
              </svg>
              <defs>
                <pattern id="pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0,10 L10,0" stroke="#22c55e" strokeWidth="1" />
                </pattern>
              </defs>
            </div>

            {/* Date, Location, and Logo in their own border */}
            <div className="flex justify-between items-start border border-gray-200 bg-white rounded-lg p-3 mb-5">
              <div>
                <h2 className="text-xl font-bold">Banjarmasin, 11 - 14 Juli 2024</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>GOR PANGSUMA</span>
                </div>
              </div>
              <img src="/tournament-logo.png" alt="Tournament Logo" className="w-14 h-14" />
            </div>

            {/* Centered content */}
            <div className="text-center">
              <p className="text-gray-600">Status Pendaftaran:</p>
              <h3 className="text-2xl font-bold mt-2">
                Selamat! Sekolah kamu terpilih mengikuti Piala by.U Banjarmasin!
              </h3>
              <p className="text-gray-600 mt-2">
                Pengumuman paling lambat pada tanggal 8 Juli 2024 di Instagram dan Web
              </p>
              <Link
                to="/team-info"
                className="inline-flex items-center px-6 py-3 mt-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                onClick={resetPlayers}
              >
                Lengkapi Data Pemain
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-5">Timeline</h3>
            <div className="relative flex justify-between items-start">
              {/* Timeline Connector Line - Main background line */}
              <div className="absolute left-0 right-0 h-1 bg-gray-200 top-[2.5rem] -z-10"></div>

              {/* Timeline Connector Line - Progress line */}
              <div className="absolute left-0 w-1/4 h-1 bg-blue-500 top-[2.5rem] -z-10"></div>

              {/* Timeline Item 1 - Active */}
              <div className="relative flex flex-col items-center w-1/4 px-2">
                <div className="text-sm text-gray-600 mb-2">1 - 15 Mei 2024</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="mt-4 w-full">
                  <div className="bg-blue-100 border border-blue-500 rounded-lg p-3 flex items-center">
                    <img src="/school-logo.png" alt="Icon" className="w-8 h-8 mr-2" />
                    <div>
                      <span className="font-semibold text-blue-700 block">Pendaftaran</span>
                      <span className="text-xs text-blue-600">Online via web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex flex-col items-center w-1/4 px-2">
                <div className="text-sm text-gray-600 mb-2">20 Mei 2024</div>
                <div className="w-8 h-8 bg-gray-200 rounded-full z-10"></div>
                <div className="mt-4 w-full">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center">
                    <img src="/school-logo.png" alt="Icon" className="w-8 h-8 mr-2" />
                    <div>
                      <span className="font-semibold block">Technical Meeting</span>
                      <span className="text-xs text-gray-600">Online via web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex flex-col items-center w-1/4 px-2">
                <div className="text-sm text-gray-600 mb-2">22 Mei 2024</div>
                <div className="w-8 h-8 bg-gray-200 rounded-full z-10"></div>
                <div className="mt-4 w-full">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center">
                    <img src="/school-logo.png" alt="Icon" className="w-8 h-8 mr-2" />
                    <div>
                      <span className="font-semibold block">Coaching Clinic</span>
                      <span className="text-xs text-gray-600">Online via web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative flex flex-col items-center w-1/4 px-2">
                <div className="text-sm text-gray-600 mb-2">23 Mei - 26 Mei 2024</div>
                <div className="w-8 h-8 bg-gray-200 rounded-full z-10"></div>
                <div className="mt-4 w-full">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center">
                    <img src="/school-logo.png" alt="Icon" className="w-8 h-8 mr-2" />
                    <div>
                      <span className="font-semibold block">Piala by.U Banjarmasin</span>
                      <span className="text-xs text-gray-600">Online via web</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Section - Horizontal Layout */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-5">Berita Terbaru</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* News Item 1 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="p-4">
                  <div className="flex">
                    <img src="/news-image.jpg" alt="News" className="w-20 h-20 object-cover rounded-lg mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">List Peserta SMP Piala by.U Subang</h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="p-4">
                  <div className="flex">
                    <img src="/news-image.jpg" alt="News" className="w-20 h-20 object-cover rounded-lg mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">List Peserta SMP Piala by.U Subang</h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="p-4">
                  <div className="flex">
                    <img src="/news-image.jpg" alt="News" className="w-20 h-20 object-cover rounded-lg mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">List Peserta SMP Piala by.U Subang</h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

