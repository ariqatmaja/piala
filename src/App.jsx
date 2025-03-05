import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import TeamInfo from "./pages/TeamInfo"
import PlayerOneForm from "./pages/PlayerOneForm"
import PlayerTwoForm from "./pages/PlayerTwoForm"
import RegistrationComplete from "./pages/RegistrationComplete"
import { usePlayerStore } from "./store/playerStore"

function App() {
  const { playerOneCompleted, teamInfo } = usePlayerStore()

  // Check if team info is completed
  const isTeamInfoCompleted = () => {
    return teamInfo.teamName && teamInfo.coachName && teamInfo.schoolName
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team-info" element={<TeamInfo />} />
          <Route
            path="/player-one"
            element={isTeamInfoCompleted() ? <PlayerOneForm /> : <Navigate to="/team-info" />}
          />
          <Route path="/player-two" element={playerOneCompleted ? <PlayerTwoForm /> : <Navigate to="/player-one" />} />
          <Route path="/complete" element={<RegistrationComplete />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

