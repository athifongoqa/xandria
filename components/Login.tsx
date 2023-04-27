'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import CodeLogo from '../public/code.png'

function Login() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-center">
        <Image 
        src={CodeLogo.src}
        width={300}
        height={300}
        alt="logo"
        />
        <button 
        onClick={() => signIn('google')} 
        className="text-white font-bold text-3xl animate-pulse"
        >
            Sign In to use Xandria
        </button>
    </div>
  )
}

export default Login