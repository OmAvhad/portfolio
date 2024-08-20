import React from 'react'
import Introduction from '@/components/introduction'
import Head from 'next/head';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import analytics from '@/config/api';

function Index() {
    const router = useRouter();
    
    // make api call to post request but it should be client side
    useEffect(() => {
        const { query } = router;
        // Ensure the query params are available before making the API call
        if (Object.keys(query).length > 0) {
            const source = query.source || 'direct';
            axios.post(`${analytics}/request`, { referrer: source })
                .then(res => console.log(res))
                .catch(err => console.error(err));
        }
    }, [router.query]);

    return (
        <div>
            <Head>
                <title>Om Avhad</title>
                <meta name="title" content="Om Avhad | Software Engineer" />
                <meta name="description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta name="keywords" content="Om Avhad, Software Engineer, Backend Developer, Full Stack Developer, Mumbai, India" />
                <meta name="author" content="Om Avhad" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omavhad.tech/" />
                <meta property="og:title" content="Om Avhad | Software Engineer" />
                <meta property="og:description" content="Om Avhad is a Software Engineer based in Mumbai, India. Dedicated to delivering exceptional backend solutions, With a strong foundation in building scalable and performant systems." />
                <meta property="og:image" content="https://omavhad.tech/om-photograph.jpg" />

                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://omavhad.tech/" />
            </Head>
            <Introduction/>
        </div>
    )
}

export default Index
