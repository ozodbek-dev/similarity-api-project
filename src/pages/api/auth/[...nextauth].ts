import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth'

export default function nextAuth(){
    try {
        return NextAuth(authOptions)
    }catch (e){
        if(e instanceof Error){
            console.log(e.message)
            return e
        }
    }
}



// @see @/lib/auth