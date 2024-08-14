import React from 'react'
import Introduction from '@/components/introduction'
import Head from 'next/head';

function Index() {
    return (
        <div>
            <Head>
                <title>Om Avhad</title>
                <meta name="title" content="Om Avhad | Software Engineer" />
                <meta name="description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta name="keywords" content="Om Avhad, Software Engineer, Backend Developer, Full Stack Developer, Mumbai, India" />
                <meta name="author" content="Om Avhad" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omavhad.xyz/" />
                <meta property="og:title" content="Om Avhad | Software Engineer" />
                <meta property="og:description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta property="og:image" content="https://omavhad.xyz/om-photograph.jpg" />

                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://omavhad.xyz/" />
            </Head>
            <Introduction/>
        </div>
    )
}

export default Index
