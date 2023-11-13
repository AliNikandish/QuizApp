
import { createContext, useEffect, useState } from 'react'
import './App.css'
import { quiz } from './Questions'
import { QuizContextType, resultType } from './Types/QuizTypes'
import Result from './Components/Quiz/Result'
import QuestionBox from './Components/Quiz/QuestionBox'


export const QuizContext=createContext({} as QuizContextType)

function App() {

  const DefaultRemainTime=10
  const [currQuestion,setCurrQuesion]=useState <number>(0)
  const [selectedAnswer,setSelectedAnswer]=useState <string | Boolean>('')
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState <number | null> (null)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [remainTime,setRemainTime]=useState<number>(DefaultRemainTime)
  const [result, setResult] = useState<resultType>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })


  const {questions}=quiz
  const { question, choices,correctAnswer , type} = questions[currQuestion]



  useEffect(() => {
    const timer = remainTime > 0 &&
      setInterval(() => {
        setRemainTime((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer as number);
  }, [remainTime]);


  useEffect(() => {
    const timer =
    remainTime === 0 &&
      setTimeout(() => {
        const nextQuestion = currQuestion + 1;

        setResult((prev) =>
    selectedAnswer
      ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
      : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )


        setSelectedAnswerIndex(null)
        setSelectedAnswer(false)
        if (nextQuestion < questions.length) {
          setCurrQuesion(nextQuestion);
          setRemainTime(DefaultRemainTime);
        } else {
          setShowResult(true)
        }
      }, 1000);

    return () => clearTimeout(timer as number);

  }, [remainTime, currQuestion]);


  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setRemainTime(DefaultRemainTime)
    setResult((prev) =>
    selectedAnswer
      ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
      : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )

    setSelectedAnswer(false)

    if (currQuestion !== questions.length - 1) {
      setCurrQuesion((prev) => prev + 1)
    } else {
      setCurrQuesion(0)
      setShowResult(true)
    }

  }

  const onAnswerSelected = (answer:string,index:number) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }




  return (
    <>
    <QuizContext.Provider value={{
      questions,question,choices,currQuestion,onClickNext,onAnswerSelected,selectedAnswerIndex,remainTime,type,result

    }}>

      {showResult ? (
        <Result/>
       ) : (
        <QuestionBox/>
       )}
     

      </QuizContext.Provider>
    </>
  )
}
export default App
