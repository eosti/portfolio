import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericLamp from "../components/genericlamp"

function C9LampPage() {
    return (
        <>
            <SEO title="About C9 Lamp SAO" />
            <div className="flex flex-col text-left m-auto mx-8 lg:mx-32 h-full lg:min-h-screen mt-0 lg:pt-8 w-100">
                <div className="max-w-max 2xl:w-1/2 md:w-3/4 w-full m-auto">
                    <div className="text-6xl w-max font-thin pt-4 lg:pt-0 pb-8 pl-0 text-purple-600">
                        About C9 Lamp SAO
                    </div>
                    <div className="w-full">
                        <div className="pb-4 w-full">
                            Hello! This is the hastily thrown together page
                            that&apos;s linked to the back of the C9 Lamp SAO!
                        </div>
                        <div className="pb-4 w-full">
                            I&apos;ve always loved filament-based lamps, and
                            holiday lights are no exception. Turns out you can
                            get these filaments pretty cheap from AliExpress
                            these days, so I procured a whole bunch of them and
                            put them into a fun, festive SAO.
                        </div>
                        <GenericLamp />
                    </div>
                </div>
            </div>
        </>
    )
}

C9LampPage.Layout = Layout
export default C9LampPage
