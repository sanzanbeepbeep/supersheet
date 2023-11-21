import React from "react";
import { useSession } from 'next-auth/react'
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";


const LoginSession = () => {
    const {data: session} = useSession()

    if (session) {
        return (
            <div>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut({callbackUrl: '/'})}>Sign out</button>
            </div>
        )
    }

    return (
        <button onClick={() => signIn()} className='px-8 py-2 bg-primary text-white font-semibold duration-300 hover:bg-black'>เข้าสู่ระบบ</button>
    )
}

export default LoginSession