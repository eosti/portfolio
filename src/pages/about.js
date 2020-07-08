import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import './lighting.css'

export default ({ data  }) => {
    return (
        <Layout>
            <SEO title="About" />
            <div class="flex flex-col text-left align-center m-auto md:min-h-full mx-16 md:mx-32 md:h-screen mt-0 md:mt-16">
                <h1>About</h1>
                <h4 class="mb-4">Lighting</h4>
                    <ul>
                        <li>Lighting the stage since the tender age of 8</li>
                        <li>Designed for companies such as A Theatre Near U and Paly Theatre</li>
                        <li>Electrician for Theatreworks Silicon Valley, West Bay Opera, and others</li>
                        <li>Want a resume? Interested in me designing your show? <a href="mailto:hello@reidsoxharris.me">Contact me</a>!</li>
                    </ul>
                    <h4 class="mb-4">Electronics</h4>
                    <ul>
                        <li>Incoming student at University of Toronto for engineering</li>
                        <li>Experience with Arduino, MSP430, Unix, among others</li>
                        <li>Someday, I'll have a big, fancy looking bench</li>
                    </ul>
                    <h4 class="mb-4">Other</h4>
                <ul>
                    <li>Unhealthy addiction to keyboards
                        <ul>
                            <li>Current daily: Iris Rev3 with custom silent Outemu Ice 68g and GMK Oblivion v2</li>
                        </ul>
                    </li>
                    <li>(neo)vim >> emacs</li>
                    <li>Trains are cool. So are airplanes.</li>
                </ul>
            </div>
        </Layout>
    )
}
