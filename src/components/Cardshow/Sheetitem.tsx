//import React from 'react'

import Image from "next/image"
// const Sheetitem = () => {
//   return (
//     <div>Sheetitem</div>
//   )
// }

type SheetitemProps = {
    id: number,
    name: string,
    university: string,
    code: string,
    exam: string,
    year: number,
    by: string,
    bycode: string,
    price: number
}




export function Sheetitem({ id, name, university, code, exam, year, by, bycode, price }:SheetitemProps){
    const helper = (university:string) => {
        if (university === "KU") {
            return "text-green-500"
        } else if (university === "CU") {
            return "text-pink-500"
        } else if (university === "MU") {
            return "text-blue-900"
        } else if (university === "TU") {
            return "text-red-500"
        } else if (university === "BU") {
            return "text-yellow-500"
        }
        else{
            return "text-white"
        }
    } 


    return (
        <div className="flex flex-row h-full justify-center">
            <div className="flex flex-col items-center">
                <div className="flex items-end text-white w-48 bg-black h-52">
                    <div className="mx-2 my-2">
                        <p>{name}</p>
                        <hr className="border-0"/>
                        <Image src='/wavylines/test.png' alt="wavy" width={80} height={20}></Image>
                        <p className={`${helper(university)}`}>{university}</p>
                        <p>{code}</p>
                        <p>{exam} | {year}</p>
                        <div>
                        <span className="text-gray-400 text-xs">by</span>
                        <span>{by}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center bg-primary border-primary mt-4 w-1/2 rounded-full text-center text-white hover:scale-125 ease-in-out duration-300">
                    <button>{price}.- | BUY</button>
                </div>
            </div>
        </div>
    )
}