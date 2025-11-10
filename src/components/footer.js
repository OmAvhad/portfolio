import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });
const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const SiGmail = dynamic(() => import('react-icons/si').then(mod => mod.SiGmail), { ssr: false });

function Footer() {
    return (
        <div className='flex flex-col items-center justify-center bottom-0 left-0 w-full pt-24 pb-8'>
            <div className='flex flex-row space-x-5 pb-4'>
                <Link href="https://www.linkedin.com/in/omavhad/" target='_blank'>
                    <FaLinkedin className='text-2xl hover:text-gray-500'/>
                </Link>
                <Link href="https://github.com/OmAvhad" target='_blank'>
                    <FaGithub className='text-2xl hover:text-gray-500'/>
                </Link>
                <Link href="https://x.com/omavhadtwt" target='_blank'>
                    <FaTwitter className='text-2xl hover:text-gray-500'/>
                </Link>
                <Link href="https://www.instagram.com/_om_avhad/" target='_blank'>
                    <FaInstagram className='text-2xl hover:text-gray-500'/>
                </Link>
                <Link href="mailto:omavhad22@gmail.com">
                    <SiGmail className='text-2xl hover:text-gray-500'/>
                </Link>
            </div>
            <h1 className='text-sm'>
                &copy; Om Avhad 2025
            </h1>
        </div>
    )
}

export default Footer
