
import sheetItems from '../../data/MOCK_DATA.json'
import {Sheetitem} from './Sheetitem'
 

const Card = () => {


  return (
    <div className='flex justify-center'>
      <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-1 place-content-baseline justify-items-center lg:w-8/12 md:w-10/12'>
        {sheetItems.map((item) => (
          <div className='h-64 text-left w-48' key={item.id}><Sheetitem{...item}></Sheetitem></div>
        ))}
        
      </div>
    </div>
  )
}

export default Card