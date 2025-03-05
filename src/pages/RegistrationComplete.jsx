import { Link } from "react-router-dom"
import { usePlayerStore } from "../store/playerStore"

function RegistrationComplete() {
  const { playerOne, playerTwo } = usePlayerStore()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Registration Complete!</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Player 1 Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <span className="font-medium">Name:</span> {playerOne.name}
              </p>
              <p>
                <span className="font-medium">Age:</span> {playerOne.age}
              </p>
              <p>
                <span className="font-medium">Position:</span> {playerOne.position}
              </p>
              <p>
                <span className="font-medium">Team:</span> {playerOne.team}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Player 2 Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <span className="font-medium">Name:</span> {playerTwo.name}
              </p>
              <p>
                <span className="font-medium">Age:</span> {playerTwo.age}
              </p>
              <p>
                <span className="font-medium">Position:</span> {playerTwo.position}
              </p>
              <p>
                <span className="font-medium">Team:</span> {playerTwo.team}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationComplete

