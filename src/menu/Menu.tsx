import { useState } from "react"

interface Props {
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  startGame: () => void
}

export const Menu: React.FC<Props> = ({ startGame, score, setScore }) => {
  return (
    <div className="flex justify-between">
      <button className="px-2 py-1 border border-black" onClick={startGame}>
        Start Game
      </button>
      <div className="border border-black py-1 px-2">score: {score}</div>
    </div>
  )
}
