import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericLamp from "../components/genericlamp"

function HPLLampPage() {
    return (
        <>
            <SEO title="About HPL Lamp SAO" />
            <div className="flex flex-col text-left m-auto mx-8 lg:mx-32 h-full lg:min-h-screen mt-0 lg:pt-8 w-100">
                <div className="max-w-max 2xl:w-1/2 md:w-3/4 w-full m-auto">
                    <div className="text-6xl w-max font-thin pt-4 lg:pt-0 pb-8 pl-0 text-purple-600">
                        About HPL Lamp SAO
                    </div>
                    <div className="w-full">
                        <div className="pb-4 w-full">
                            Hello! This is the hastily thrown together page
                            that&apos;s linked to the back of the HPL Lamp SAO!
                        </div>
                        <div className="pb-4 w-full">
                            The HPL lamp is the lamp used in the ubiquitous{" "}
                            <a
                                href="https://www.etcconnect.com/Products/Entertainment-Fixtures/Source-Four/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ETC Source Four
                            </a>{" "}
                            and I wanted to pay homage by making a slight
                            smaller, slightly dimmer version. Maybe not as
                            universally recognizable as a C9 holiday lamp, but
                            if you know, you know. I heard that if you get
                            enough finger oil on it, you&apos;ll get a beautiful
                            sandglass effect ;)
                        </div>
                        <GenericLamp />
                    </div>
                </div>
            </div>
        </>
    )
}

HPLLampPage.Layout = Layout
export default HPLLampPage
