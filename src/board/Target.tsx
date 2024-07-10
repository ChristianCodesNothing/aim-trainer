import { useState } from "react"

interface Props {
  id: number
  targets: number[]
  setTargets: React.Dispatch<React.SetStateAction<number[]>>
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}

export const Target: React.FC<Props> = ({
  id,
  score,
  setScore,
  targets,
  setTargets,
}) => {
  const [count, setCount] = useState(0)

  const getRandomNumber = (min: number = 4, max: number = 96): string =>
    (Math.floor(Math.random() * (max - min + 1)) + min).toString() + "%"
  const [bottom] = useState(getRandomNumber())
  const [right] = useState(getRandomNumber())
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        setScore(score + 1)

        let newTargets = targets
        newTargets.push(newTargets[newTargets.length - 1] + 1)
        setTargets(newTargets.filter((t) => t !== id))
      }}
      className="absolute h-6 w-6 translate-x-1/2 translate-y-1/2 select-none rounded-full bg-red-600 text-white"
      style={{
        bottom,
        right,
      }}
    />
  )
}
