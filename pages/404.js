import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const costom404 = () => {
    return (
        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>this page does not exist. pleace return to {' '}
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default costom404
