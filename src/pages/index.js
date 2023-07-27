// pages/index.js
import Link from 'next/link';
import Head from 'next/head';
import R1 from '../images/r1.jpeg';
const Home = () => {
    const pageTitle = 'Home Page';
    const pageDescription = 'Welcome to the home page of our Next.js app.';

    return (
        <>
            <Head>
                <meta property='og:image' content={R1} />
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property='og:description' content={pageDescription} />
            </Head>
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main page of our Next.js app.</p>
                <Link href="/post">
                    Post Page
                </Link>
            </div>
        </>
    );
};

export default Home;
