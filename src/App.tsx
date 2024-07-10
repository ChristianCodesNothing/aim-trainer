import { useState } from "react"
import { Board } from "./board/Board"
import { Menu } from "./menu/Menu"

export const App: React.FC = () => {
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState<number[]>([])
  const [isGameOver, setIsGameOver] = useState(false)

  const startGame = () => {
    setIsGameOver(false)
    setScore(0)
    setTargets([1])
  }
  const endGame = () => {
    if (targets.length === 0) return
    setTargets([])
    setIsGameOver(true)
  }
  return (
    <div className="grid h-full w-full place-content-center gap-1">
      <Board
        isGameOver={isGameOver}
        score={score}
        setScore={setScore}
        targets={targets}
        setTargets={setTargets}
        endGame={endGame}
      />
      <Menu score={score} setScore={setScore} startGame={startGame} />
    </div>
  )
}
