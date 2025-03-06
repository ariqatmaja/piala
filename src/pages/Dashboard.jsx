"use client"

import { MapPin, LogOut, ExternalLink, ChevronRight, FileText, Users, Video, Trophy, School, Award } from "lucide-react"
import { usePlayerStore } from "../store/playerStore"
import { Link } from "react-router-dom"
import { useState } from "react"

function Dashboard() {
  const { resetPlayers } = usePlayerStore()
  const [schoolLogoError, setSchoolLogoError] = useState(false)
  const [tournamentLogoError, setTournamentLogoError] = useState(false)

  // Fungsi untuk menangani error loading gambar
  const handleImageError = (setter) => {
    setter(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen p-5">
          {/* Sidebar Content in its own border */}
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              {schoolLogoError ? (
                // Fallback icon jika gambar error
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <School className="w-5 h-5 text-blue-500" />
                </div>
              ) : (
                <img
                  src="/images/school-logo.jpg"
                  alt="School Logo"
                  className="w-8 h-8"
                  onError={() => handleImageError(setSchoolLogoError)}
                />
              )}
              <h2 className="text-sm font-medium">SMA 1 Banjarmasin</h2>
            </div>

            <nav className="space-y-1">
              <button className="flex items-center w-full px-3 py-2 text-sm text-blue-600 border-l-2 border-blue-600 bg-blue-50">
                Dashboard
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Piala by.U Banjarmasin
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Kontak Tim Piala by.U
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </nav>
          </div>
          {/* Empty space below sidebar content */}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header Card */}
          <div className="bg-green-50/70 rounded-xl p-6 relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className="w-full h-full transform rotate-45 translate-x-16 -translate-y-16">
                <div className="w-full h-full bg-gradient-to-r from-green-500/20 to-green-500/10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-green-600/20"
                      style={{
                        width: "200%",
                        left: "-50%",
                        top: `${i * 8}px`,
                        transform: "rotate(-45deg)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start bg-white rounded-lg p-3 shadow-sm mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Banjarmasin, 11 - 14 Juli 2024</h2>
                  <div className="flex items-center text-gray-500 mt-1 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>GOR PANGSUMA</span>
                  </div>
                </div>
                {tournamentLogoError ? (
                  // Fallback icon jika gambar error
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-500" />
                  </div>
                ) : (
                  <img
                    src="/images/tournament-logo.jpg"
                    alt="Tournament Logo"
                    className="w-12 h-12"
                    onError={() => handleImageError(setTournamentLogoError)}
                  />
                )}
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">Status Pendaftaran:</p>
                <h3 className="text-2xl font-bold mt-2 mb-2">
                  Selamat! Sekolah kamu terpilih mengikuti Piala by.U Banjarmasin!
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pengumuman paling lambat pada tanggal 8 Juli 2024 di Instagram dan Web
                </p>
                <Link
                  to="/team-info"
                  className="inline-flex items-center px-6 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors"
                  onClick={resetPlayers}
                >
                  Lengkapi Data Pemain
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6">Timeline</h3>
            <div className="relative flex justify-between items-start">
              {/* Timeline Connector Line */}
              <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-[2.5rem]" />
              <div className="absolute left-0 w-1/4 h-0.5 bg-blue-500 top-[2.5rem]" />

              {/* Timeline Items */}
              {[
                {
                  date: "1 - 15 Mei 2024",
                  title: "Pendaftaran",
                  icon: FileText,
                  active: true,
                },
                {
                  date: "20 Mei 2024",
                  title: "Technical Meeting",
                  icon: Users,
                },
                {
                  date: "22 Mei 2024",
                  title: "Coaching Clinic",
                  icon: Video,
                },
                {
                  date: "23 Mei - 26 Mei 2024",
                  title: "Piala by.U Banjarmasin",
                  icon: Trophy,
                },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center w-1/4">
                  <span className="text-sm text-gray-500 mb-2">{item.date}</span>
                  <div
                    className={`w-5 h-5 rounded-full z-10 flex items-center justify-center ${
                      item.active ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  >
                    {item.active && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <div
                    className={`mt-4 flex items-center gap-2 px-3 py-2 rounded-lg ${
                      item.active ? "bg-blue-50 border border-blue-200" : "bg-white border border-gray-200"
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${item.active ? "text-blue-500" : "text-gray-400"}`} />
                    <div className="flex flex-col">
                      <span className={`text-sm font-medium ${item.active ? "text-blue-700" : "text-gray-700"}`}>
                        {item.title}
                      </span>
                      <span className={`text-xs ${item.active ? "text-blue-600" : "text-gray-500"}`}>
                        Online via web
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6">Berita Terbaru</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="flex gap-3">
                    <img
                      src="/images/news-image.jpg"
                      alt="News"
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-sm mb-1">List Peserta SMP Piala by.U Subang</h4>
                      <p className="text-gray-500 text-xs line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

