import Link from 'next/link';

export default function Introduction() {
    return (
        <div className=''>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2'>Hey, I&apos;m Om 👋</h1>
            <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl pb-5'>Software Engineer based in Mumbai, India.</h2>
            <p className='text-lg'>
                Dedicated to delivering exceptional backend solutions, 
                with a strong foundation in building scalable and performant systems. 
                My internships have provided me with valuable industry&nbsp;
                <span className='underline hover:text-gray-500'>
                <Link href="https://drive.google.com/file/d/1W__3mjxFqQKSIu5vKB-OwDact8q8LkVR/view?usp=drive_link" target='_blank'>
                    experience,
                </Link> 
                </span>
                &nbsp;allowing me to contribute meaningfully to diverse projects. 
                Outside of coding, you&apos;ll find me swimming or enjoying a good laugh, 
                blending my passion for innovation with a well-rounded approach to life. 
                &nbsp;Also, I love hiking — check out my&nbsp;
                <span className='underline hover:text-gray-500'>
                <Link href="/treks">
                    treks
                </Link>
                </span>
                .
            </p>
        </div>
    )
}
