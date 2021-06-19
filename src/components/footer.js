import React from "react"

const today = new Date();

const Footer = () => {
    return (
        <div class="bottom-0">
            <div class="flex flex-row content-center justify-center pb-2">
                <a class="pr-8 text-gray-800" href="mailto:hello@reidsoxharris.me" alt="Email"><i class="fas fa-envelope" alt="Email Logo"></i></a>
                <a class="pr-8 text-gray-800" target="_blank" rel="noopener noreferrer" href="https://github.com/eosti" alt="GitHub Profile"><i class="fab fa-github" alt="GitHub Logo"></i></a>
                <a class="text-gray-800" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/reid-sox-harris/" alt="LinkedIn Profile"><i class="fab fa-linkedin" alt="LinkedIn Logo"></i></a>
            </div>
            <p class="text-gray-600 text-light text-sm mb-2 pb-2">© {today.getFullYear()} Reid Sox-Harris.</p>
        </div>
    )
}

export default Footer
