import { create } from "zustand"

export const usePlayerStore = create((set) => ({
  teamInfo: {
    teamName: "",
    coachName: "",
    schoolName: "",
    schoolAddress: "",
    contactNumber: "",
  },
  playerOne: {
    name: "",
    age: "",
    position: "",
    team: "",
  },
  playerTwo: {
    name: "",
    age: "",
    position: "",
    team: "",
  },
  playerOneCompleted: false,
  playerTwoCompleted: false,

  updateTeamInfo: (data) =>
    set((state) => ({
      teamInfo: { ...state.teamInfo, ...data },
    })),

  updatePlayerOne: (data) =>
    set((state) => ({
      playerOne: { ...state.playerOne, ...data },
    })),

  updatePlayerTwo: (data) =>
    set((state) => ({
      playerTwo: { ...state.playerTwo, ...data },
    })),

  completePlayerOne: () => set({ playerOneCompleted: true }),

  completePlayerTwo: () => set({ playerTwoCompleted: true }),

  resetPlayers: () =>
    set({
      teamInfo: {
        teamName: "",
        coachName: "",
        schoolName: "",
        schoolAddress: "",
        contactNumber: "",
      },
      playerOne: {
        name: "",
        age: "",
        position: "",
        team: "",
      },
      playerTwo: {
        name: "",
        age: "",
        position: "",
        team: "",
      },
      playerOneCompleted: false,
      playerTwoCompleted: false,
    }),
}))

