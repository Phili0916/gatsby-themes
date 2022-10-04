import * as React from "react"

import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'



const IndexPage = () => {
  return (

      <Layout pageTitle="Home Page">
        <h1>Welcome to my Gatsby Site</h1>
        <p>This site is dedicated to learning about Gatsby</p>
        <StaticImage 
          alt="Wild Thing Major League"
          src="https://www.washingtonpost.com/blogs/early-lead/files/2016/11/sheen1.jpg"
        />
      </Layout>
  )
}

export const Head = () => {
  <title>
    Home Page
  </title>
}

export default IndexPage
