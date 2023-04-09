import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import type { Metadata } from 'next'
import DocumentationTabs from "@/ui/DocumentationTabs";

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API',
}

const Documentation: FC = () => {
    return (
        <div className='container max-w-7xl mx-auto' style={{marginTop:'8rem!important'}}>
            <div className='flex flex-col items-center gap-6'>
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>
                <DocumentationTabs/>
            </div>
        </div>
    )
}

export default Documentation
