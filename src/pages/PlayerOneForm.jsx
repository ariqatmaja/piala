"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePlayerStore } from "../store/playerStore"

function PlayerOneForm() {
  const { playerOne, updatePlayerOne, completePlayerOne } = usePlayerStore()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updatePlayerOne({ [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!playerOne.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!playerOne.age) {
      newErrors.age = "Age is required"
    } else if (isNaN(playerOne.age) || playerOne.age < 1) {
      newErrors.age = "Age must be a valid number"
    }

    if (!playerOne.position.trim()) {
      newErrors.position = "Position is required"
    }

    if (!playerOne.team.trim()) {
      newErrors.team = "Team is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      completePlayerOne()
      navigate("/player-two")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Player 1 Information</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={playerOne.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter player name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={playerOne.age}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.age ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter player age"
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={playerOne.position}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.position ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter player position"
              />
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="team" className="block text-gray-700 font-medium mb-2">
                Team
              </label>
              <input
                type="text"
                id="team"
                name="team"
                value={playerOne.team}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.team ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter player team"
              />
              {errors.team && <p className="text-red-500 text-sm mt-1">{errors.team}</p>}
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlayerOneForm

