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
        <footer className='flex flex-col md:flex-row justify-start md:justify-between items-start w-full md:pt-20 pb-10 text-sm text-gray-500'>
            <div className="mb-4 md:mb-0">
                Made with <span role="img" aria-label="coffee">☕</span> by Om
            </div>
            
            <div className='flex flex-row space-x-6'>
                <Link href="mailto:omavhad22@gmail.com" className='text-blue-600 hover:underline'>
                    Email
                </Link>
                <Link href="https://www.linkedin.com/in/omavhad/" target='_blank' className='text-blue-600 hover:underline'>
                    LinkedIn
                </Link>
                <Link href="https://github.com/omavhad" target='_blank' className='text-blue-600 hover:underline'>
                    GitHub
                </Link>
            </div>
        </footer>
    )
}

export default Footer
