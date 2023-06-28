import Image from "next/image"
import Link from "next/link"

type UniversityitemProps = {
    image: string,
    university: string
}

export function Universityitem({image,university}:UniversityitemProps){
    return (
        <Link href='/market'>
            <Image src={image} width={80} height={100} alt="u_icon"/>
        </Link>
    )
}