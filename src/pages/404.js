import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <div class="text-center m-auto h-screen flex flex-col align-center justify-center">
            <h1 class="align-middle inline-block">404. Page not found.</h1>
            <h2 class="font-light">I'm not sure how you got here, either.</h2>
            <h2 class="font-light">How about heading back <Link class="text-purple-500 hover:text-purple-700 hover:underline" to="/">Home</Link>?</h2>
        </div>
    </Layout>
)

export default NotFoundPage
