import React from 'react'
import Image from 'next/image'
import Introduction from '@/components/introduction'

function Index() {
    return (
        <div className='flex flex-col'>
            <Introduction/>
            <Image src="/scroll-down.jpg" alt='scroll-down' width={50} height={50}/>
        </div>
    )
}

export default Index
