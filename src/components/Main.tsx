import React from 'react'
import Searchsheet from './Searchby/SearchsheetMain'
import Searchsheetbyuni from './Searchby/Searchsheetbyuni'
import Bestmonthlysell from './Searchby/Bestmonthlysell'




const Home = () => {
  return (
    <>
        <div className='flex flex-row justify-around border-b-2 border-b-black pb-4'>
            <div className='w-1/3 flex flex-col gap-10'>
                <div className='mb-4'>  
                    <h1 className={` font-extrabold text-8xl`}>WELCOME!</h1>
                </div>
                <div>
                    <p>เพราะการเรียนรู้ไม่มีที่สิ้นสุด พวกเรา supersheet จึงพร้อม</p>
                    <p>จะเป็นสื่อกลางเพื่อช่วยให้คุณไปในจุดที่สูงที่สุดเช่นกัน พร้อม</p>
                    <p>แล้วเลือกชีทของคุณได้เลย!</p>
                </div>
                <div className='grid grid-flow-col justify-stretch gap-4'>
                    <form>
                        <button className='border-2 border-primary bg-primary w-full text-white text-center py-4 trasition ease-in-out duration-300 hover:bg-darkerprimary hover:scale-110'>
                            ซื้อชีท
                        </button>
                    </form>
                    <form>
                        <button className='border-2 border-black w-full text-center py-4 trasition ease-in-out duration-300 hover:scale-110'>
                            ขายชีท
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-1/3'>
            IMG
            </div>
        </div> 
        <Searchsheet/>
        <Searchsheetbyuni/>
        <Bestmonthlysell/>
    </>
  )
}

export default Home