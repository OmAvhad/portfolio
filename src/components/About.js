import Link from 'next/link';

const About = () => {
    return (
        <section id="about" className="py-10 md:py-15 lg:py-20">
            <h2 className="text-lg font-normal text-gray-500 mb-12 tracking-widest">About me</h2>
            
            <div className="max-w-3xl">
                <h3 className="text-lg md:text-2xl mb-8 leading-snug">
                    I’m an engineer, builder, and explorer - <br/>
                    drawing inspiration from the systems I design <br/>
                    and the world beyond the screen.
                </h3>
                
                <div className="space-y-6 text-sm md:text-lg text-gray-500 leading-relaxed font-light">
                    <p>
                        Over the past few years, I’ve <span className='font-semibold text-blue-500 hover:underline transition-colors hover:text-blue-700 cursor-pointer'><Link href="https://github.com/omavhad">built</Link></span> across diverse projects, internships, 
                        and hackathons, solving problems around data pipelines, APIs, and cloud 
                        infrastructure on AWS.
                    </p>
                    
                    <p>
                        I enjoy understanding how users and teams interact with systems behind the scenes,
                        and I care about simplifying complex workflows into clean, maintainable solutions.
                        These values reflect <span className='font-semibold text-blue-500 hover:underline transition-colors hover:text-blue-700 cursor-pointer'><Link href="https://drive.google.com/file/d/1W__3mjxFqQKSIu5vKB-OwDact8q8LkVR/view?usp=drive_linkhttps://github.com/omavhad">me</Link></span> and
                        my <span className='font-semibold text-blue-500 hover:underline transition-colors hover:text-blue-700 cursor-pointer'><Link href="https://www.linkedin.com/in/omavhad/">journey</Link></span>, guiding how I build software.
                    </p>
                    <p>
                       Outside of work, I enjoy swimming, hiking, and spending time outdoors. I like exploring
                       new places, taking on long treks, and finding balance beyond the screen.
                       If you’re curious, you can check out some of my <span className='font-semibold text-blue-500 hover:underline transition-colors hover:text-blue-700 cursor-pointer'><Link href="/treks">treks</Link></span> too.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
