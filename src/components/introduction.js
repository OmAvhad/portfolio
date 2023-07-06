import React from 'react'
import Image from 'next/image'

function Introduction() {
    return (
        <div className='mt-14 lg:mt-0 md:flex flex-row justify-between'>
            <div className='flex flex-col justify-center'>
                <h5 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>Hello,</h5>
                <h1 className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl'>I&apos;m Om Avhad</h1>
                <h3 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-purple'>Full Stack Developer</h3>
                <button className='bg-purple w-20 sm:w-26 md:w-28 text-white text-sm md:text-xl rounded p-1 sm:p-2 mt-4 md:mt-14'>HIRE ME</button>
            </div>
            <Image
            className='mt-5 sm:mt-0 w-[180] h-[100] sm:w-[400px] sm:h-[340px] md:w-[320px] md:h-[270px] lg:w-[450px] lg:h-[380px] xl:w-[490px] xl:h-[400px] '
            alt=""
            src="/portfolio-image.png"
            width={500}
            height={500}
            /> 
        </div>
    )
}

export default Introduction
