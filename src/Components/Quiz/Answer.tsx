import { useContext } from "react"
import { QuizContext } from "../../App"
import { answerProp } from "../../Types/QuizTypes"


const Answer = ({choice,index}:answerProp) => {
    const {onAnswerSelected,selectedAnswerIndex}=useContext(QuizContext)

    const clickHandler=(event: any): void=>{
        onAnswerSelected(event.target.innerText,index)
    }
  return (
    <button className={`font-VazirMedium text-2xl w-full border-2 border-blue-200 mt-4 break-words p-1 ${index===selectedAnswerIndex ? 'bg-blue-700 text-white':' bg-blue-100  text-blue-950'}`} onClick={(event)=>clickHandler(event)}>{choice}</button>
    )
}

export default Answer
