import React, { useState } from 'react';

function NavigationBar() {
    const [navBurgerActive, setNavBurgerActive] = useState(false);

    return (
        <nav className="navbar has-background-primary">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
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
                            <a className="navbar-item">
                                Home
                            </a>
                            <a className="navbar-item" href='#about'>
                                About Us
                            </a>
                            <a className="button is-primary is-inverted" href="/blog">
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
