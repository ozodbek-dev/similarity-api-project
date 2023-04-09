"use client"
import {FC, useState} from 'react'
import Button from '@/ui/Button'
import {signOut} from "next-auth/react";
import {cn} from "@/lib/utils";
interface  SignOutButtonProps{

}
const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const signUserOut = async()=>{
        setIsLoading(true)
        try {
            await signOut()
        }catch (e){
            // toast({
            //     title:"Error singning out in ",
            //     message:'Please try again later',
            //     type:'error'
            // })
        }
    }
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <Button onClick={signUserOut} isLoading={isLoading} variant='default' >
            Sign Out
        </Button>
    );
};

export default SignOutButton;
