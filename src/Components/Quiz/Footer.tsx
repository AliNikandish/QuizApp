import { useContext } from 'react'
import { QuizContext } from '../../App'

const Footer = () => {
    const {onClickNext,questions,currQuestion}=useContext(QuizContext)

  return (
    <div className='flex justify-end mx-2 mb-4'>
    <button className='text-white bg-blue-600 p-1 rounded font-medium' onClick={onClickNext}>{currQuestion===questions.length-1? 'پایان' : 'بعدی'}</button>
  </div>
  )
}

export default Footer