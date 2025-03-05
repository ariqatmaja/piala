"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePlayerStore } from "../store/playerStore"

function TeamInfo() {
  const { updateTeamInfo, teamInfo } = usePlayerStore()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    teamName: teamInfo?.teamName || "",
    coachName: teamInfo?.coachName || "",
    schoolName: teamInfo?.schoolName || "",
    schoolAddress: teamInfo?.schoolAddress || "",
    contactNumber: teamInfo?.contactNumber || "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Nama tim harus diisi"
    }

    if (!formData.coachName.trim()) {
      newErrors.coachName = "Nama pelatih harus diisi"
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "Nama sekolah harus diisi"
    }

    if (!formData.schoolAddress.trim()) {
      newErrors.schoolAddress = "Alamat sekolah harus diisi"
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Nomor kontak harus diisi"
    } else if (!/^[0-9]{10,13}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Nomor kontak tidak valid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      updateTeamInfo(formData)
      navigate("/player-one")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-500 p-4 text-white">
            <h1 className="text-2xl font-bold text-center">Informasi Tim</h1>
            <p className="text-center text-blue-100">Lengkapi data tim sebelum mendaftarkan pemain</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label htmlFor="teamName" className="block text-gray-700 font-medium mb-2">
                  Nama Tim
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.teamName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Masukkan nama tim"
                />
                {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
              </div>

              <div>
                <label htmlFor="coachName" className="block text-gray-700 font-medium mb-2">
                  Nama Pelatih
                </label>
                <input
                  type="text"
                  id="coachName"
                  name="coachName"
                  value={formData.coachName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.coachName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Masukkan nama pelatih"
                />
                {errors.coachName && <p className="text-red-500 text-sm mt-1">{errors.coachName}</p>}
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-gray-700 font-medium mb-2">
                  Nomor Kontak
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.contactNumber ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Masukkan nomor kontak"
                />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="schoolName" className="block text-gray-700 font-medium mb-2">
                  Nama Sekolah
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.schoolName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Masukkan nama sekolah"
                />
                {errors.schoolName && <p className="text-red-500 text-sm mt-1">{errors.schoolName}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="schoolAddress" className="block text-gray-700 font-medium mb-2">
                  Alamat Sekolah
                </label>
                <textarea
                  id="schoolAddress"
                  name="schoolAddress"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.schoolAddress ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Masukkan alamat sekolah"
                ></textarea>
                {errors.schoolAddress && <p className="text-red-500 text-sm mt-1">{errors.schoolAddress}</p>}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Kembali
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Lanjutkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo

