import * as React from "react"

import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"



const IndexPage = () => {
  return (

      <Layout pageTitle="Welcome">
        <h1>Say Hello to the Old Number One</h1>
        <p>This site is dedicated to all the batters I've hit</p>
        <StaticImage 
          alt="Wild Thing Major League"
          src="https://www.washingtonpost.com/blogs/early-lead/files/2016/11/sheen1.jpg"
        />
      </Layout>
  )
}

export const Head = () => <Seo title="Homepage" />


export default IndexPage
