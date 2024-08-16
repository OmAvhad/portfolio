import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin));
const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub));
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter));
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram));
const SiGmail = dynamic(() => import('react-icons/si').then(mod => mod.SiGmail));

function Footer() {
    return (
        <div className='flex flex-col items-center justify-center bottom-0 left-0 w-full pt-36 pb-10'>
            <div className='flex flex-row space-x-5 pb-4'>
                <Link href="https://www.linkedin.com/in/omavhad/" target='_blank'>
                    <FaLinkedin className='text-2xl'/>
                </Link>
                <Link href="https://github.com/OmAvhad" target='_blank'>
                    <FaGithub className='text-2xl'/>
                </Link>
                <Link href="https://x.com/omavhadtwt" target='_blank'>
                    <FaTwitter className='text-2xl'/>
                </Link>
                <Link href="https://www.instagram.com/_om_avhad/" target='_blank'>
                    <FaInstagram className='text-2xl'/>
                </Link>
                <Link href="mailto:omavhad22@gmail.com">
                    <SiGmail className='text-2xl'/>
                </Link>
            </div>
            <h1 className='text-sm'>
                &copy; Om Avhad 2024
            </h1>
        </div>
    )
}

export default Footer
