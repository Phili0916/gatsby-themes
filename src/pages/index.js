import * as React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby Site</h1>
      <Link to="/about">About</Link>
      <p>This site is dedicated to learning about Gatsby</p>
    </main>
  )
}

export const Head = () => {
  <title>
    Home Page
  </title>
}

export default IndexPage
