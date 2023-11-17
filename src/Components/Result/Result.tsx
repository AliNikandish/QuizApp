import{ useContext } from 'react'
import { QuizContext } from '../../App'
import Score from './Score'
import ResultDetails from './ResultDetails'

function Result() {

  return (
    <div dir='rtl' className='flex justify-center items-center bg-blue-800 h-[1000px]'>
          <div className='w-[700px] h-[500px] bg-slate-50 mt-20'>
            <div className="flex flex-col justify-between items-center mt-4 ">

            <div className='mb-8 border-b-2 w-full pb-4'>
              <h3 className='text-4xl text-center text-zinc-700'>نتیجه :</h3>
            </div>

            <Score/>
            <ResultDetails/>
            
            </div>
          </div>
        </div>
  )
}

export default Result