import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Sidebar() {
    return (
        <aside className="flex items-center justify-center max-h-screen w-1/6">
            <nav className="flex flex-col justify-center items-start wrap-normal w-max">
                <Link to="/" className="flex-auto w-max mb-8 mt-4 mr-4">
                    <StaticImage
                        className="w-28"
                        placeholder="tracedSVG"
                        loading="eager"
                        alt="Logo"
                        src="../images/reid-logo.png"
                    />
                </Link>
                <ul className="flex-auto list-none p-0 m-0 w-max">
                    <li>
                        <Link
                            to="/"
                            className="text-lg text-gray-900 hover:text-purple-700 font-light"
                            activeClassName="font-semibold text-gray-900 hover:text-purple-700"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/"
                            className="text-lg text-gray-900 hover:text-purple-700 font-light"
                            activeClassName="font-semibold text-gray-900 hover:text-purple-700"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/lighting/"
                            className="text-lg text-gray-900 hover:text-purple-700 font-light"
                            activeClassName="font-semibold text-gray-900 hover:text-purple-700"
                            partiallyActive
                        >
                            Lighting Design
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects/"
                            className="text-lg text-gray-900 hover:text-purple-700 font-light"
                            activeClassName="font-semibold text-gray-900 hover:text-purple-700"
                            partiallyActive
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a
                            href="mailto:hello@reidsoxharris.me"
                            className="text-lg text-gray-900 hover:text-purple-700 font-light"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
