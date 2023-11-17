import React, { useContext } from 'react'
import { QuizContext } from '../../../App'

function Score() {
    const {result}=useContext(QuizContext)

  return (
    <div className='score'>
              <div className='first bg-blue-500 w-36 h-36 flex justify-center items-center rounded-full'>
                  <div className='second bg-blue-200 w-28 h-28 flex justify-center items-center rounded-full'>
                      <div className='third bg-blue-500 w-24 h-24 flex justify-center items-center rounded-full'>
                          <div className='text-white flex flex-col justify-center items-center'>
                            <span>{result.score}</span>
                            <span>امتیاز شما</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
  )
}

export default Score