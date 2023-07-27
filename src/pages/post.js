// pages/about.js
import Link from 'next/link';
import Head from 'next/head';
import R2 from '../images/r2.png'
const Post = () => {
    const pageDescription = 'Post page of our Next.js app.';

    return (
        <>
            <Head>

                <meta property='og:image' content={R2} />
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property='og:description' content={pageDescription} />

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={pageDescription} />

                <title>Post Page</title>
            </Head>

            <div>
                <h1>Post Page</h1>
                <p>This is the Post page of our Next.js app.</p>
                <Link href="/">
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default Post;
