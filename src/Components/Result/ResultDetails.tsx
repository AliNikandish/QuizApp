import { useContext } from 'react'
import { QuizContext } from '../../App'

function ResultDetails() {
    const {questions,result}=useContext(QuizContext)

  return (
    <div className='mt-6 result bg-blue-50 w-[500px] h-[200px] rounded-md border-2 border-blue-100'>
              <div className="top border-b-2 flex justify-between">

                <div className='topright  w-[500px] h-[100px] flex flex-col justify-between p-2'>
                  <div className=' flex  gap-x-8'>
                    <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
                    <div className='text-3xl text-blue-600'>{questions.length}</div>
                  </div>
                  <p className='text-gray-400'>تعداد کل سوالات</p>
                </div>
                <div className='toprleft  w-[500px] h-[100px] flex flex-col justify-between border-r-2 p-2'>
                  <div className=' flex  gap-x-8'>
                    <div className='w-3 h-3 bg-green-600 rounded-full'></div>
                    <div className='text-3xl text-green-600'>{result.correctAnswers}</div>
                  </div>
                  <p className='text-gray-400'>تعداد پاسخ صحیح شما</p>
                </div>

              </div>
              <div className="bottom flex justify-between">

              <div className='bottomright  w-[500px] h-[100px] flex flex-col justify-between p-2'>
                  <div className=' flex  gap-x-8'>
                    <div className='w-3 h-3 bg-red-600 rounded-full'></div>
                    <div className='text-3xl text-red-600'>{questions.length}</div>
                  </div>
                  <p className='text-gray-400'>پاسخ های غلط شما</p>
                </div>
                <div className='bottomleft  w-[500px] h-[100px] flex flex-col justify-between border-r-2 p-2'>
                  <div className=' flex  gap-x-8'>
                    <div className='w-3 h-3 bg-orange-600 rounded-full'></div>
                    <div className='text-3xl text-orange-600'>{(result.correctAnswers/questions.length)*100}%</div>
                  </div>
                  <p className='text-gray-400'>درصد پاسخ صحیح</p>
                </div>

              </div>
            </div>
  )
}

export default ResultDetails