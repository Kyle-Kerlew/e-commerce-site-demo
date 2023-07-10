import React from 'react';
import NavigationBar from '../navigation/navigationBar';

export function Hero({ title, subtitle, content }) {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-head">
                <NavigationBar/>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">
                        {title}
                    </p>
                    <p className="subtitle">
                        {subtitle}
                    </p>
                    <section className={"content"}>
                        {content}
                    </section>
                </div>
            </div>
        </section>
    )
}
