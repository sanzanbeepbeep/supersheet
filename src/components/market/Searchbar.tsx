import React, { useEffect, useState } from 'react'
import Universities from '../../data/Universities.json'
import sheetItems from '../../data/MOCK_DATA.json'
import {Sheetitem} from '../Cardshow/Sheetitem'

const Searchbar = () => {
    const[selectedUniversity,setSelectedUniversity] = useState<string|''>('')
    const[selectedYear,setSelectedYear] = useState<string|''>('')
    const[selectedSemester,setSelectedSemester] = useState<string|''>('')
    const[selectedType,setSelectedType] = useState<string|''>('')
    const[selectedSort,setSelectedSort] = useState<string|''>('')

    const[search,setSearch] = useState<string>('')

    


    const filterItems = () => {
        return sheetItems.filter((item) => {
            if(search === '')
                {if(selectedUniversity === '' || selectedUniversity === item.university){
                    if(selectedYear === '' || parseInt(selectedYear) === item.year){
                        // if(selectedSemester === '' || selectedSemester === item.semester){
                        //     if(selectedType === '' || selectedType === item.type){
                        //         return item
                        //     }
                        // }
                        return item
                        }
                    }
                }
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
                {if(selectedUniversity === '' || selectedUniversity === item.university){
                    if(selectedYear === '' || parseInt(selectedYear) === item.year){
                        // if(selectedSemester === '' || selectedSemester === item.semester){
                        //     if(selectedType === '' || selectedType === item.type){
                        //         return item
                        //     }
                        // }
                        return item
                        }
                    }
                }
            }
        })
    }
    
    const sortItems = () => {
        if(selectedSort === 'Latest'){
            return filterItems().sort((a,b) => b.id - a.id)
        }
        // else if(selectedSort === 'Sale'){
        //     return filterItems().sort((a,b) => b.sale - a.sale)
        // }
        else if(selectedSort === 'PriceLowest'){
            return filterItems().sort((a,b) => a.price - b.price)
        }
        else if(selectedSort === 'PriceHighest'){
            return filterItems().sort((a,b) => b.price - a.price)
        }
        else{
            return filterItems()
        }
    }

    const filteredItems = sortItems()


    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.id
        const value = e.target.value
        if(id === 'university'){
            setSelectedUniversity(value)
        }
        else if(id === 'year'){
            setSelectedYear(value)
        }
        else if(id === 'semester'){
            setSelectedSemester(value)
        }
        else if(id === 'type'){
            setSelectedType(value)
        }
        else if(id === 'sort'){
            setSelectedSort(value)
        }
    }



    return (
        <>
            <div className='flex flex-row justify-evenly border-y-4 border-black py-2 '>
                <label className="relative block">
                    <span className='sr-only'>Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24"/>
                    </span>
                    <input onChange={
                        (e) => {
                            setSearch(e.target.value)
                        }
                    } className="placeholder:italie block bg-white w-full border-black border-2 rounded-full py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                </label>
                <div className='w-1/12'>
                    <select onChange={selectChange}  id="university" className='' placeholder=''>
                        <option value='' selected>University</option>
                        {Universities.map((item) => (<option key={item.value} value={item.value} label={item.value}></option>))}
                    </select>
                </div>
                <div className='border-l-2 border-black pl-2 w-1/12'>
                    <select onChange={selectChange} id="year" className=''>
                        <option value='' selected>Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                    <p className='text-gray-400 text-xs'>Ex.2022,2021</p>
                </div>
                <div className='border-l-2 border-black pl-2 w-1/12'>
                    <select id="semester" className=''>
                        <option value='' selected>Semester</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">Summer</option>
                    </select>
                    <p className='text-gray-400 text-xs'>Ex.1,2</p>
                </div>
                <div className='border-l-2 border-black pl-2 w-1/12'>
                    <select id="type" className=''>
                        <option value='' selected>All Type</option>
                        <option value="Midterm">Midterm</option>
                        <option value="Final">Final</option>
                    </select>
                    <p className='text-gray-400 text-xs'>Ex.มิดเทอม,ไฟนอล</p>
                </div>
                <div className='border-l-2 border-black pl-2 w-1/12'>
                    <select id="sort" onChange={selectChange} className=''>
                        <option value='' selected>Sort</option>
                        <option value="Latest">Latest</option>
                        <option value="Sale">Sale</option>
                        <option value="PriceLowest">Price ↓</option>
                        <option value="PriceHighest">Price ↑</option>
                    </select>
                    <p className='text-gray-400 text-xs'>Ex.ล่าสุด,ยอดขาย,ราคา</p>
                </div>

            </div>
            <div className='flex justify-center'>
            <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-1 place-content-baseline justify-items-center lg:w-8/12 md:w-10/12'>
                {filteredItems.map((item) => (
                <div className='h-64 text-left w-48' key={item.id}><Sheetitem{...item}></Sheetitem></div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Searchbar;



