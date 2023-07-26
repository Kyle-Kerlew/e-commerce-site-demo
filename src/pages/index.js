import React from "react";
import { Hero } from "../components/shared/hero";
import Portrait from "../images/portrait.jpg"
import Portrait2 from "../images/portrait-2.jpg"
import Portrait3 from "../images/portrait-3.jpg"
import Footer from "../components/shared/footer";
import "./css/landing.css"
import InfusionCreator from "../components/shared/infusionCreator";

function Index() {
    return (
        <div>
            <div>
                <Hero
                    title={"Create An Infusion"}
                    subtitle={"You can choose any ingredients you like!"}
                    content={<InfusionCreator />}
                />
                <div className="container has-text-centered">
                    <div className="my-5">
                        <p className="title">Popular Infusions</p>
                        <p className="subtitle">Yummy in me tummy</p>
                    </div>
                    <div className="container">
                        <div className="columns cards-row">
                            <div className="column card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i1.wp.com/www.uhrohmuh.com/wp-content/uploads/2017/05/rosemary-oil-2.jpg?fit=2048%2C1418&ssl=1"
                                            alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p className="is-size-4 has-text-centered">Rosemary Infused Olive Oil</p>
                                    </div>
                                    <div className="content has-text-centered">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                    <div className="is-flex is-justify-content-center">
                                        <button className="button">I Want This</button>
                                    </div>
                                </div>

                            </div>
                            <div className="column card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://healthiersteps.com/wp-content/uploads/2019/01/vegan-garlic-butter.jpg"
                                            alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p className="is-size-4 has-text-centered">Garlic Infused Butter</p>
                                    </div>
                                    <div className="content has-text-centered">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                    <div className="is-flex is-justify-content-center">
                                        <button className="button">I Want This</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://sc01.alicdn.com/kf/HTB1hG_WXND1gK0jSZFKq6AJrVXah/233339078/HTB1hG_WXND1gK0jSZFKq6AJrVXah.jpg"
                                            alt="Placeholder" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p className="is-size-4 has-text-centered">Cinnamon Infused Maple Syrup</p>
                                    </div>
                                    <div className="content has-text-centered">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris.
                                    </div>
                                    <div className="is-flex is-justify-content-center">
                                        <button className="button">I Want This</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="creative-border">
                        <div className="container-content">
                            <div className="my-5">
                                <p id="about" className="title has-text-centered">
                                    Who You're Supporting
                                </p>
                            </div>
                            <div className="grid-container">
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image is-4by5">
                                            <img src={Portrait} />
                                        </figure>
                                        <p className="is-size-4 has-text-weight-semibold has-text-centered">Aaliyah</p>
                                        <p className="is-size-5 has-text-centered">Infuser</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image is-4by5">
                                            <img src={Portrait2} />
                                        </figure>
                                        <p className="is-size-4 has-text-weight-semibold has-text-centered">Jason</p>
                                        <p className="is-size-5 has-text-centered">Infuser</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image is-4by5">
                                            <img src={Portrait3} />
                                        </figure>
                                        <p className="is-size-4 has-text-weight-semibold has-text-centered">Aisha</p>
                                        <p className="is-size-5 has-text-centered">Infuser</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <Footer />
        </div >
    )

}

export default Index;