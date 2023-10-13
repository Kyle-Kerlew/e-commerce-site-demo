import React from 'react';
import NavigationBar from '../navigation/navigationBar';

export function Hero({ title, subtitle, content }) {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-head">
                <NavigationBar />
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-2">
                        {title}
                    </p>
                    <p className="subtitle">
                        {subtitle}
                    </p>
                    <div className={"content"}>
                        {content}
                    </div>
                </div>
            </div>
        </section>
    )
}
