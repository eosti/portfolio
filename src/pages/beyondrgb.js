import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

function BeyondRGBPage() {
    return (
        <>
            <SEO title="Beyond RGB" />
            <div className="flex flex-col text-left m-auto mx-8 lg:mx-32 h-full lg:min-h-screen mt-0 lg:pt-8 w-100">
                <div className="max-w-max 2xl:w-1/2 md:w-3/4 w-full m-auto">
                    <div className="text-6xl w-max font-thin pt-4 lg:pt-0 pb-8 pl-0 text-purple-600">
                        Beyond RGB
                    </div>
                    <div className="w-full">
                        <div className="pb-4 w-full">
                            Slides can be found here:&nbsp;
                            <a
                                href="https://drive.google.com/file/d/1fKwWkcBJD9dgOOSAeAVzHdPAKXssFC98/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Drive
                            </a>
                            .
                        </div>
                        <div className="pb-4 w-full">
                            I used{" "}
                            <a
                                href="https://github.com/colour-science/colour"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Colour
                            </a>{" "}
                            for plot generation and the{" "}
                            <a
                                href="https://zenodo.org/records/8362947"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SpectroFood dataset
                            </a>{" "}
                            for reference apple spectra. The Python used to
                            generate all plots can be found{" "}
                            <a
                                href="https://github.com/eosti/metamer-sao/tree/main/python_graphs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                on GitHub
                            </a>
                            .
                        </div>
                        <div className="pb-4 w-full">
                            The fonts used were{" "}
                            <a
                                href="https://fonts.google.com/specimen/Lexend+Deca"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lexend Deca
                            </a>{" "}
                            for display and{" "}
                            <a
                                href="https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Atkinson Hyperlegible Next
                            </a>{" "}
                            for body.
                        </div>
                        <div className="pb-4 w-full">
                            More information about the Metamer SAO can be found{" "}
                            <a
                                href="/metamersao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            ; if you come find me I might have a few extra!
                        </div>
                        <div className="pb-4 w-full">
                            <StaticImage
                                className="block p-0 m-0"
                                imgClassName="w-auto"
                                placeholder="tracedSVG"
                                loading="eager"
                                src="../images/colour_led_flowchart.png"
                                alt="Colour LED Flowchart"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

BeyondRGBPage.Layout = Layout
export default BeyondRGBPage
