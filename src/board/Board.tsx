import { useState } from "react"
import { Target } from "./Target"

interface Props {
  isGameOver: boolean
  targets: number[]
  setTargets: React.Dispatch<React.SetStateAction<number[]>>
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  endGame: () => void
}

export const Board: React.FC<Props> = ({
  isGameOver,
  targets,
  setTargets,
  score,
  setScore,
  endGame,
}) => {
  return (
    <div onClick={endGame} className="relative h-96 w-96 border border-black">
      <>
        {targets.map((target) => (
          <Target
            key={target}
            id={target}
            score={score}
            setScore={setScore}
            targets={targets}
            setTargets={setTargets}
          />
        ))}
      </>
      {isGameOver && (
        <p className="grid h-full w-full place-content-center text-3xl font-bold">
          GAME OVER
        </p>
      )}
    </div>
  )
}
