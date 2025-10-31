import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function MetamerPage() {
    return (
        <>
            <SEO title="About Metamer SAO" />
            <div className="flex flex-col text-left m-auto mx-8 lg:mx-32 h-full lg:min-h-screen mt-0 lg:pt-8 w-100">
                <div className="max-w-max 2xl:w-1/2 md:w-3/4 w-full m-auto">
                    <div className="text-6xl w-max font-thin pt-4 lg:pt-0 pb-8 pl-0 text-purple-600">
                        About Metamer SAO
                    </div>
                    <div className="w-full">
                        <div className="pb-4 w-full">
                            Hello! This is the hastily thrown together page
                            that&apos;s linked to the back of the Metamer SAO!
                        </div>
                        <div className="pb-4 w-full">
                            To see the project logs, see the
                            <a
                                href="https://hackaday.io/project/198439-metamer-sao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;Hackaday.io project
                            </a>
                            .
                        </div>
                        <div className="pb-4 w-full">
                            For the motivation behind making this badge, see
                            <a
                                href="../projects/metamer-sao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;my portfolio page about it
                            </a>
                            &nbsp;and
                            <a
                                href="/beyondRGB"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;my talk about it
                            </a>
                            .
                        </div>
                        <div className="pb-4 w-full">
                            To interact with it, you&apos;ll need
                            <a
                                href="https://github.com/eosti/micropython-aw210xx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;the micropython-aw210xx
                            </a>
                            &nbsp;library.
                        </div>
                        <div className="pb-4 w-full">
                            There&apos;s some examples in the driver repo, but
                            to see how I interact with it, see
                            <a
                                href="https://github.com/eosti/metamer-sao"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                &nbsp;the project repo
                            </a>
                            . Not only does it have additional micropython code,
                            it also has the PY32 code running on the bootstrap
                            I2C MCU, schematics, and other tools I used in the
                            implementation of this fun little SAO.
                        </div>
                        <div className="pb-4 w-full">
                            If you think you&apos;re missing an LED or that one
                            fell off: fear not, it was probably DNPed! One of
                            the two teal 0603 LEDs are usually intentionally
                            DNPed to save on BOM costs since the cost of each of
                            those LEDs rivals the cost of the rest of the BOM!
                            It&apos;s a really unique LED for the size and color
                            so only Rohm makes it, and I guess it doesn&apos;t
                            sell well enough to bring it to normal LED prices.
                            If you want to fully complete your board, the upper
                            505nm LED is the Rohm SMLD12E2N1WT86, and the lower
                            496nm LED is the Rohm SMLD12E3N1WT86, both available
                            from your favourite supplier.
                        </div>
                        <div className="pb-4 w-full">
                            There&apos;s a few versions out in the wild: if you
                            have a green Metamer SAO, you have v1, if you have a
                            white one without a version number on the back then
                            you have v2.0 (Hackaday 2024), and if you have a
                            white one with a version number on the back (top of
                            the horseshoe) then you can figure it out from
                            there. Version 2.1 is a minor improvement on v2.0
                            that removes the efuse and adds an analog switch
                            that allows for I2C bus isolation during
                            bootstrapping. This also brings the project fully
                            into KiCAD!
                        </div>
                        <div className="pb-4 w-full">
                            I hope you enjoy the Metamer SAO, and of course
                            please let me know if you run into any issues or
                            have any questions!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

MetamerPage.Layout = Layout
export default MetamerPage
