import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Paragraph from "@/ui/Paragraph";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import {useTheme} from "next-themes";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({subsets:['latin']})
export default function Home() {
    const {theme} = useTheme();
    console.log(theme)
    return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className={cn("bg-white text-slate-900 antialiased", inter.className)}>
           <div className="relative h-screen flex items-center overflow-x-hidden dark:bg-slate-900 ">
                <div className="container max-w-7xl mx-auto w-full h-full">
                    <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start ">
                        <LargeHeading size="lg" className="three-d text-black dark:text-light-gold">
                            Easily determine <br/>text similarity
                        </LargeHeading>
                        <Paragraph className="max-w-xl lg:text-left">
                            With the text similarity API, you can easily determine the similarity between two pieces of text  with a free {" "}
                            <Link href="/login" className="underline underline-offset-2 text-black dark:text-light-gold ">
                                API key
                            </Link>
                            .
                        </Paragraph>
                        <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
                            <Image
                                priority
                                className="img-shadow"
                                quality={100}
                                style={{objectFit:"contain"}}
                                fill
                                src={"/typewriter.png"} alt={"type-writer "}
                            />
                        </div>
                    </div>

                </div>
           </div>
      </div>
    </>
  )
}
