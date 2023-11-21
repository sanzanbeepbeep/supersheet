import React, { FormEventHandler , useState} from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import toast,{ Toaster } from 'react-hot-toast'


const Loginbox = () => {
    const router = useRouter()
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const handlesubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const res = await signIn('user', {
            "email": info.email,
            "password": info.password,
            redirect: false,
        });

        toast.loading('กำลังเข้าสู่ระบบ...')


        if (res?.error) {
            toast.remove()
            toast.error('เข้าสู่ระบบไม่สำเร็จ')
        }

        else {
            toast.remove()
            toast.success('เข้าสู่ระบบสำเร็จ')
            router.push('/')
        }

    }


    return (
        <>
            <Toaster/>
            <form onSubmit={handlesubmit} className='flex flex-col max-w-md mx-auto gap-6 mt-10'>
                <h1>เข้าสู่ระบบ</h1>
                <h2 className='underline'>เป็นสมาชิกกับเราเพื่อรับประโยชน์สูงสุด !</h2>
                <label className='block'>
                    <span className='block'>Username หรือ Email</span>
                    <input type="text" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})} className='block w-full border-2 rounded bg-gray-200 h-8'/>
                </label>
                <label className='block'>
                    <span className='block'>รหัสผ่าน</span>
                    <input type="password" value={info.password} onChange={(e) => {setInfo({...info, password: e.target.value})}} className='block w-full bg-gray-200 border-2 rounded h-8'/>
                </label>
                <div className='flex row justify-between'>
                    <div>
                        <input type="checkbox" className='mr-2 ' />
                        <span>Remember me</span>
                    </div>
                    <Link legacyBehavior href="/">
                        <a className='underline'>Forgot password</a>
                    </Link>
                </div>
                    <button type='submit' className='border-2 border-primary bg-primary text-white w-1/2 mx-auto font-bold h-10 text-xl hover:bg-darkerprimary duration-300'>เข้าสู่ระบบ</button>
                </form>
                <div className='flex flex-col items-center'>
                    <p>หรือเข้าสู่ระบบด้วย</p>
                    <div className='flex flex-row w-full my-7'>
                        <button onClick={() => signIn('facebook')} className='border-2 border-loginmethod bg-loginmethod text-white w-1/4 mx-auto font-bold h-10 text-md hover:bg-black hover:border-black duration-300'>Facebook</button>
                        <button onClick={() => signIn('google')} className='border-2 border-loginmethod bg-loginmethod text-white w-1/4 mx-auto font-bold h-10 text-md hover:bg-black hover:border-black duration-300'>Google</button>
                    </div>
                    <Link legacyBehavior href="/register">
                        <a className='underline'>ยังไม่มีบัญชีหรอ? สมัครสมาชิกกับเราสิ</a>
                    </Link>
                </div>

        </>
  )
}

export default Loginbox