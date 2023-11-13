import { useContext } from 'react'
import { QuizContext } from '../../App'

const Header = () => {
    const {currQuestion,questions,remainTime}=useContext(QuizContext)

  return (
    <div className='flex justify-between mt-2 mx-2 items-center pb-2 border-b'>
            <div className='bg-zinc-900 text-slate-100 py-2 px-4 rounded'>
              <span> سوال {currQuestion+1} از {questions.length}</span>
            </div>
            <div className='bg-blue-200 p-2 rounded'>
              <span className='text-blue-900 font-medium'>زمان باقیمانده :</span>
              <span className='bg-black text-white py-0.5 px-1 rounded-sm mr-1'>{remainTime>9 ? remainTime : `0${remainTime}`}</span>
            </div>
          </div>
  )
}

export default Header