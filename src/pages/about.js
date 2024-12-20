import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function AboutPage() {
    return (
        <>
            <SEO title="About" />
            <div className="flex flex-col text-left m-auto mx-8 lg:mx-32 h-full lg:min-h-screen mt-0 lg:pt-8 w-100">
                <div className="max-w-max 2xl:w-1/2 md:w-3/4 w-full m-auto">
                    <div className="text-6xl w-max font-thin pt-4 lg:pt-0 pb-8 pl-0 text-purple-600">
                        About
                    </div>
                    <div className="w-full">
                        <div className="pb-8 w-full">
                            Hey! I&apos;m an electrical engineering student with
                            plenty of curiosity and a love of learning. I&apos;m
                            currently the lead Electrical Designer with the
                            University of Toronto Aerospace Team, and have a
                            long list of side projects that I&apos;m persuing.
                            Here&apos;s a bit more about me:
                        </div>
                        <h4 className="mb-4 w-full">Electronics</h4>
                        <ul>
                            <li>
                                Fourth-year electrical engineer at University of
                                Toronto
                            </li>
                            <li>
                                Programming Experience: C/C++, Python, bash,
                                git, Verilog HDL, MATLAB
                            </li>
                            <li>
                                Embedded controllers: Arduino, MSP430, STM32,
                                Raspberry Pi
                            </li>
                        </ul>
                        <h4 className="mb-4 w-full">Lighting</h4>
                        <ul>
                            <li>
                                Designed for companies such as A Theatre Near U
                                and Paly Theatre
                            </li>
                            <li>
                                Electrician for Theatreworks Silicon Valley,
                                West Bay Opera, and others
                            </li>
                        </ul>
                        <h4 className="mb-4 w-full">Other</h4>
                        <ul>
                            <li>
                                Unhealthy addiction to keyboards
                                <ul>
                                    <li>
                                        Current daily: Iris Rev3 with custom
                                        silent Outemu Ice 68g and GMK Oblivion
                                        v2
                                    </li>
                                </ul>
                            </li>
                            <li>(neo)vim {">>"} emacs</li>
                            <li>Trains are cool. So are airplanes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

AboutPage.Layout = Layout
export default AboutPage
