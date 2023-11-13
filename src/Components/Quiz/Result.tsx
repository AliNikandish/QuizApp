import{ useContext } from 'react'
import { QuizContext } from '../../App'

function Result() {
    const {questions,result}=useContext(QuizContext)

  return (
    <div dir='rtl' className='flex justify-center items-center bg-blue-800 h-[1000px]'>
          <div className='w-[700px] h-[500px] bg-slate-50 mt-20'>
            <div className="flex flex-col justify-between items-center mt-4 ">
            <div className='mb-10 border-b-2 w-full pb-4'>
              <h3 className='text-4xl text-center text-zinc-700'>نتیجه :</h3>
            </div>
            <div className='text-zinc-700'>
                <p className='text-lg'>
                  تعداد سوالات: <span>{questions.length}</span>
                </p>
                <p className='text-lg'>
                  امتیاز شما:<span> {result.score}</span>
                </p>
                <p className='text-lg'>
                  پاسخ های صحیح شما:<span> {result.correctAnswers}</span>
                </p>
                <p className='text-lg'>
                  پاسخ های غلط شما:<span> {result.wrongAnswers}</span>
                </p>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Result