import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Strikeout Posts">
            <p>My fast times posts will go here</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My blog Posts" />

export default BlogPage