import React, {FC, forwardRef, HTMLAttributes} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const headingVariants = cva("text-black dark:text-white text-center lg:text-left font-extrabold leading-tight",{
    variants:{
        size:{
            default:"text-4xl md:text-5xl lg:text-6xl",
            sm:"text-2xl md:text-3xl  lg:text-4xl",
            lg:"text-5xl md:text-6xl  lg:text-7xl",
        }
    },
    defaultVariants:{
        size: 'default'
    }
})

interface  LargeHeadingProps extends  HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants>
{

}

const Paragraph= forwardRef<HTMLHeadingElement ,LargeHeadingProps>(
    ({className,size,children, ...props}, ref) => {
        return (
            <h1 ref={ref} {...props} className={cn(headingVariants({className,size})) } >
                {children}
            </h1>
        );
    }
)

Paragraph.displayName='Paragraph'

export default Paragraph;
