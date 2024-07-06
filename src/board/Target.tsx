import { useState } from "react"

interface Props {
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}

export const Target: React.FC<Props> = ({ score, setScore }) => {
  const [count, setCount] = useState(0)
  const getRandomNumber = (min: number = 4, max: number = 96): number =>
    Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="select-none absolute h-6 w-6 translate-x-1/2 translate-y-1/2 rounded-full bg-red-600"
      style={{
        bottom: `${getRandomNumber()}%`,
        right: `${getRandomNumber()}%`,
      }}
    />
    
  )
}
