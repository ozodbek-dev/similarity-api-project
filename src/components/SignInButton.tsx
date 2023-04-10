'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import Button from "@/ui/Button";
import {toast} from "@/ui/Toast";


/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        try {
            setIsLoading(true)
            await signIn('google')

        } catch (error) {
            setIsLoading(false);
            toast({
                title: 'Error signing in',
                message: 'Please try again later.',
                type: 'error',
            })
        }
    }

    const btnHandler = ()=>{
        alert(
            "hi"
        )
    }
    return (
        <Button onClick={signInWithGoogle}   isLoading={isLoading} variant="default">
            Sign in
        </Button>
    )
}

export default SignInButton