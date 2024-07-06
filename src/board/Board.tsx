import { useState } from "react"
import { Target } from "./Target"

interface Props {
  targets: number[]
  setTargets: React.Dispatch<React.SetStateAction<number[]>>
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  endGame: () => void
}

export const Board: React.FC<Props> = ({
  score,
  setScore,
  endGame,
  targets,
  setTargets,
}) => {
  return (
    <div onClick={endGame} className="relative h-96 w-96 border border-black">
      {targets.map((target) => (
        <Target key={target} score={score} setScore={setScore} />
      ))}
    </div>
  )
}
