import Head from 'next/head';
import Hello from '@/components/Hello';
import Work from '@/components/Work';
import About from '@/components/About';
import Experience from '@/components/Experience';


function Index() {
    return (
        <div>
            <Head>
                <title>Om Avhad - Software Engineer</title>
                <meta name="title" content="Om Avhad | Software Engineer" />
                <meta name="description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta name="keywords" content="Om Avhad, Software Engineer, Backend Developer, Full Stack Developer, Mumbai, India" />
                <meta name="author" content="Om Avhad" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omavhad.vercel.app/" />
                <meta property="og:title" content="Om Avhad | Software Engineer" />
                <meta property="og:description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta property="og:image" content="https://omavhad.vercel.app/om-photograph.jpg" />

                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://omavhad.vercel.app/" />
            </Head>
            
            <div className="space-y-0 divide-y divide-gray-300">
                <Hello />
                {/* <Work /> */}
                <About />
                <Experience />
            </div>
        </div>
    )
}

export default Index
