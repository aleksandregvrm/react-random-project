import { useSelector } from "react-redux"

const HintText = ({hint}) => {
    const {  hintsUsed,
    hintsMax} = useSelector((store)=>store.question)
  return (
    <div>{hint}</div>
  )
}

export default HintText