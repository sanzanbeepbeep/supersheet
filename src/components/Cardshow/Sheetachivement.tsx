import Image from 'next/image'

export function AchivementCard() {
  return (
    <div className='h-60 bg-white w-40 rounded-elarge mx-4'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div>
            <Image src="/trophy.png" alt='Logo' width={90} height={100}/>
        </div>
        <button className='border-primary border-2 bg-primary px-2 rounded-full text-white hover:scale-125 duration-300'>share</button>
      </div>
    </div>
  );
}