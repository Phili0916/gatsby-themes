import React from 'react'
import { Link } from "gatsby"

const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <Link to="/">Back to the Home page</Link>
            <p>My name is Philip Davis and I created this site</p>
        </main>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="this page contains information about myself" />
    </>
)

export default AboutPage