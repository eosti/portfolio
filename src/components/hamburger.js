import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { slide as Menu } from "react-burger-menu"

import "./hamburger.css"

class Hamburger extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render () {
        return (
            <div class="flex-initial h-16">
                <div class="w-screen h-full">
                    <Menu 
                        customBurgerIcon={ <StaticImage src="../images/menu-outline.svg" placeholder="tracedSVG" loading="eager" alt="Hamburger dropdown" /> } 
                        isOpen={this.state.menuOpen} 
                        onStateChange={(state) => this.handleStateChange(state)}
                    >
                        <Link onClick={() => this.closeMenu()} className="mb-8 w-36" to="/">
                            <StaticImage src="../images/reid-logo.png" alt="Menu logo" loading="eager" placeholder="tracedSVG" className="block p-0 m-0 mr-4" />
                        </Link>
                        <Link to="/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" onClick={() => this.closeMenu()}>
                        Home
                        </Link>
                        <Link to="/about/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" onClick={() => this.closeMenu()}>
                        About
                        </Link>
                        <Link to="/lighting/"  className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true} onClick={() => this.closeMenu()}>
                        Lighting Design
                        </Link>
                        <Link to="/projects/" className="text-gray-900 hover:text-purple-700 font-light" activeClassName="font-semibold text-gray-900 hover:text-purple-700" partiallyActive={true} onClick={() => this.closeMenu()}>
                        Projects
                        </Link>
                        <a href="mailto:hello@reidsoxharris.me" className="text-gray-900 hover:text-purple-700 font-light">
                        Contact
                        </a>
                    </Menu>
                    <div class="absolute top-4 right-4 w-10 h-auto">
                        <Link to="/">
                            <StaticImage className="block p-0 m-0" imgClassName="max-h-24 w-auto" placeholder="tracedSVG" loading="eager" src="../images/reid-logo.png" alt="Header logo" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hamburger
