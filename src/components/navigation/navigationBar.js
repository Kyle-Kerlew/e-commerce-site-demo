import React, { useState } from 'react';
import Logo from '../../images/logo.png';
function NavigationBar() {
    const [navBurgerActive, setNavBurgerActive] = useState(false);

    return (
        <nav className="navbar has-background-primary">
            <div className="container is-max-widescreen	">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src={Logo}  alt="Logo" />
                    </a>
                    <a role="button" className={"navbar-burger" + (navBurgerActive ? " is-active" : "")}
                        data-target="navbarMenuHeroA" aria-label="menu" aria-expanded="false" onClick={(e) => {
                            const targetName = e.currentTarget.dataset.target;
                            const target = document.getElementById(targetName);
                            target.classList.toggle('is-active')
                            return setNavBurgerActive(prevState => !prevState);
                        }}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </a>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <span className="navbar-item">
                            <a className="navbar-item" href="/">
                                Home
                            </a>
                            <a className="navbar-item" href='#about'>
                                About Us
                            </a>
                            <a className="button ml-3 is-link" href="/blog">
                                Blog
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
