import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {

    return (
        <Layout pageTitle="About Me">
            <p>My name is Philip Davis and I created this site</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <Seo title="About Me" />
        <meta name="description" content="this page contains information about myself" />
    </>
)

export default AboutPage