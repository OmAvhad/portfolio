import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='pb-24'>
            <Link href="/">
                <h1 className='italic text-xl md:text-2xl lg:text-3xl'>
                    Om Avhad 
                </h1>
            </Link>
        </div>
    )
}

export default Navbar
