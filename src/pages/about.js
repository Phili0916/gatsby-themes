import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h1>About Me</h1>
            <p>My name is Philip Davis and I created this site</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="this page contains information about myself" />
    </>
)

export default AboutPage