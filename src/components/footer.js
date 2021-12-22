import React from "react"

const today = new Date()

function Footer() {
    return (
        <div className="bottom-0">
            <div className="flex flex-row content-center justify-center pb-2">
                <a
                    className="pr-8 text-gray-800"
                    href="mailto:hello@reidsoxharris.me"
                    alt="Email"
                >
                    <i className="fas fa-envelope" alt="Email Logo" />
                </a>
                <a
                    className="pr-8 text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/eosti"
                    alt="GitHub Profile"
                >
                    <i className="fab fa-github" alt="GitHub Logo" />
                </a>
                <a
                    className="text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/reid-sox-harris/"
                    alt="LinkedIn Profile"
                >
                    <i className="fab fa-linkedin" alt="LinkedIn Logo" />
                </a>
            </div>
            <p className="text-gray-600 text-light text-sm mb-2 pb-2">
                © {today.getFullYear()} Reid Sox-Harris.
            </p>
        </div>
    )
}

export default Footer
