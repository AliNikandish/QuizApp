import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function QuestionBox() {
  return (
    <div dir='rtl' className='flex justify-center items-center bg-blue-800 h-[1000px]'>
    <div className='w-[700px] h-[500px] bg-slate-50 mt-20 flex flex-col justify-between'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  </div>
  )
}

export default QuestionBox