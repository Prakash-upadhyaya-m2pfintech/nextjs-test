import Link from 'next/link'
import React from 'react'
import Layout from '../layout'

function Profile() {
    return (
        <Layout>
            <div>
                <Link href={'/'}>Back to home</Link>
            </div>
        </Layout>

    )
}

export default Profile