import React from 'react'
import Navbartop from '../components/navbar/NavbarTop'
import Universities from '../data/Universities.json'

const sellsheet: React.FunctionComponent = () => {
    const [option,setOption] = React.useState("")

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value)
    }


    return (
    <>
        <Navbartop/>
        <div>
            ลงชีทง่าย
        </div>
        <div className='flex flex-row justify-around'>
            <div className='flex flex-col  w-1/3 justify-center'>
                <h1 className='text-xl font-bold text-center'>อัพโหลดไฟล์ชีท</h1>
                <div className='flex flex-row justify-center mb-8'>
                    <p>อัพโหลดไฟล์ PDF:</p>
                    <label className='ml-4 bg-primary px-1 hover:scale-110 duration-300'>
                        <input className='hidden' type="file" name="file" />
                        <span className='text-white underline'>คลิกเพื่ออัพโหลดไฟล์</span>
                    </label>
                </div>
                <div className='flex justify-center items-center '>
                    <label className='bg-primary w-10/12 pb-48 hover:bg-darkerprimary duration-300'>
                        <input className='hidden' type="file" name='photo' />
                        <p className='text-white underline text-center w-full'>อัพโหลดรูปภาพ</p>
                    </label>
                </div>
            </div>
            <div className='flex flex-col w-1/3'>
                <h1 className='text-xl font-bold text-center'>ข้อมูลชีท</h1>
                <div className='flex flex-col'>
                    <h1>ชื่อสถาบัน:</h1>
                    <input type='text' placeholder='เลือกมหาวิทยาลัยของคุณ' list='universities' className='bg-gray-300 border border-gray-300 rounded-md mb-4 w-10/12' style={{backgroundImage: 'none'}}/>
                    <datalist id='universities' className=''>
                        <option value='' disabled selected>เลือกมหาวิทยาลัยของคุณ</option>
                        {Universities.map((item) => (<option key={item.value} value={item.value} label={item.label}></option>))}
                    </datalist>
                    <h1>ชื่อวิชารหัสวิชา:</h1>
                    <input className='bg-gray-300 border border-gray-300 rounded-md mb-4 w-10/12' type='text'/>
                </div>
                <div className='flex flex-row'>
                    <h1>ภาคเรียน:</h1>
                    <select className='bg-gray-300 border border-gray-300 rounded-md mb-4'>
                        <option>1</option>
                        <option>2</option>
                        <option>summer</option>
                    </select>
                </div>
                <div className='flex flex-row'>
                    <h1>ปีการศึกษา:</h1>
                    <select className='bg-gray-300 border border-gray-300 rounded-md mb-4'>
                        <option>2563</option>
                        <option>2564</option>
                        <option>2565</option>
                        <option>2566</option>
                    </select>
                </div>
                <div className='flex flex-row'>
                    <h1>ราคา:</h1>
                    <input className='bg-gray-300 border border-gray-300 rounded-md mb-4' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
                </div>
            </div>
            <div className='flex flex-col w-1/3'>
                <h1 className='text-xl font-bold text-center'>ข้อมูลชีท2</h1>
                <div>
                    <h1>คำอธิบายเกี่ยวกับชีท (ข้อความถึงคนซื้อ)</h1>
                    <textarea className='bg-gray-300 border border-gray-300 rounded-md mb-4 w-full'/>
                </div>
                <div>
                    <h1>ข้อความถึงผู้ตรวจสอบ:</h1>
                    <textarea className='bg-gray-300 border border-gray-300 rounded-md mb-4 w-full'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default sellsheet