// pages/about.js
import Link from 'next/link';
import Head from 'next/head';
const Post = () => {
    const pageTitle = 'Post Page';
    const pageDescription = 'Post page of our Next.js app.';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property='og:image' content={'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'} />
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property='og:description' content={pageDescription} />
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
