// import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import  ThemeToggle from './ThemeToggle'
import { buttonVariants } from './ui/Button'
import SignOutButton from "@/components/SignOutButton";
import SignInButton from "@/components/SignInButton";
import {authOptions} from "@/lib/auth";
import {useEffect, useState} from "react";

const Navbar =  () => {
    const [session, setSession] = useState<any>();
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    useEffect(():any => {
        return async () => {
            try {
                if(clientId && clientSecret){
                    setSession(await getServerSession(authOptions))
                }
            }catch (e){
                if(e instanceof  Error)
                    console.log(e.message)
            }
        };
    });

    console.log(clientId)
    console.log(clientSecret)
    return (
        <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
            <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                <Link href='/' className={buttonVariants({ variant: 'link' })}>
                    Text Similarity v1.0
                </Link>

                <div className='md:hidden'>
                    <ThemeToggle />
                </div>

                <div className='hidden md:flex gap-4'>
                    <ThemeToggle />
                    <Link
                        href='/documentation'
                        className={buttonVariants({ variant: 'ghost' })}>
                        Documentation
                    </Link>
                    {//eslint-disable
                        session ? (
                        <>
                            <Link
                                className={buttonVariants({ variant: 'ghost' })}
                                href='/dashboard' as="/dashboard">
                                Dashboard
                            </Link>
                            <SignOutButton />
                        </>
                    ) : (
                        <SignInButton />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar