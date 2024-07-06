import { useState } from "react"
import { Board } from "./board/Board"
import { Menu } from "./menu/Menu"

export const App: React.FC = () => {
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState<number[]>([1, 2, 3])
  const startGame = () => {}
  const endGame = () => {}
  return (
    <div className="grid h-full w-full place-content-center gap-1">
      <Board
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
