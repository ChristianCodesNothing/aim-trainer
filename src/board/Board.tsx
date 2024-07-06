import { Target } from "./Target"

interface Props {
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}

export const Board: React.FC<Props> = ({ score, setScore }) => {
  return (
    <div className="relative h-96 w-96 border border-black">
      <Target score={score} setScore={setScore} />
    </div>
  )
}
