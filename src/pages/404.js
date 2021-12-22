import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <>
        <SEO title="404" />
        <div class="text-center m-auto mx-4 h-screen flex flex-col align-center justify-center">
            <h1 class="align-middle inline-block">404. Page not found.</h1>
            <h2 class="font-light">I'm not sure how you got here, either.</h2>
            <h2 class="font-light">How about heading back <Link className="text-purple-500 hover:text-purple-700 hover:underline" to="/">Home</Link>?</h2>
        </div>
    </>
)

NotFoundPage.Layout = Layout;
export default NotFoundPage
