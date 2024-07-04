import { useState } from "react"
import { Board } from "./board/Board"
import { Menu } from "./menu/Menu"

export const App: React.FC = () => {
  return (
    <div>
      <Board />
      <Menu />
    </div>
  )
}
