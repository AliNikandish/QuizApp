import { useContext } from 'react'
import Answer from './Answer'
import { QuizContext } from '../../App'


const Main = () => {
    const {question,choices,type}=useContext(QuizContext)

  return (
    <div className='p-3 text-3xl'>
          <p className=' font-bold'>{question} <span className='bg-emerald-200 text-emerald-900 text-sm px-1 py-px rounded'>{type}</span></p> 
          <div className='mt-6'>

            {choices.map((choice,index)=>{
                return <Answer key={index} choice={choice} index={index}/>

            })}
          </div>
        </div>
  )
}

export default Main