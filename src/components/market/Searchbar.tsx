import React, { useState } from 'react'
import Searchbox from './Searchbox'
import Universities from '../../data/Universities.json'


const Searchbar = () => {
    const [selectedOption, setSelectedOption] = useState<string>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        
    };


    return (
        <div className='flex flex-row justify-evenly border-y-4 border-black py-2 '>
            <Searchbox />
            <div className='w-1/12'>
                <select onChange={selectChange} id="university" className='' placeholder=''>
                    <option value='' disabled selected>University</option>
                    {Universities.map((item) => (<option key={item.value} value={item.value} label={item.value}></option>))}
                </select>
            </div>
            <div className='border-l-2 border-black pl-2 w-1/12'>
                <select onChange={selectChange} id="year" className=''>
                    <option value='' disabled selected>Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
                <p className='text-gray-400 text-xs'>Ex.2022,2021</p>
            </div>
            <div className='border-l-2 border-black pl-2 w-1/12'>
                <select id="semester" className=''>
                    <option value='' disabled selected>Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">Summer</option>
                </select>
                <p className='text-gray-400 text-xs'>Ex.1,2</p>
            </div>
            <div className='border-l-2 border-black pl-2 w-1/12'>
                <select id="type" className=''>
                    <option value='' disabled selected>All Type</option>
                    <option value="Midterm">Midterm</option>
                    <option value="Final">Final</option>
                </select>
                <p className='text-gray-400 text-xs'>Ex.มิดเทอม,ไฟนอล</p>
            </div>
            <div className='border-l-2 border-black pl-2 w-1/12'>
                <select id="sort" className=''>
                    <option value='' disabled selected>Sort</option>
                    <option value="Latest">Latest</option>
                    <option value="Sale">Sale</option>
                    <option value="Price">Price</option>
                </select>
                <p className='text-gray-400 text-xs'>Ex.ล่าสุด,ยอดขาย,ราคา</p>
            </div>
        </div>
    )
}

export default Searchbar;
