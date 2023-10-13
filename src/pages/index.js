import React from "react";
import { Hero } from "../components/shared/hero";
import Portrait from "../images/portrait.jpg"
import Portrait2 from "../images/portrait-2.jpg"
import Portrait3 from "../images/portrait-3.jpg"
import RosemaryOil from "../images/rosemary-oil-2.jpg";
import GarlicButter from "../images/garlic-butter.jpg";
import PepperOliveOil from "../images/pepper-olive-oil.jpg";
import BlackPepperOil from "../images/black-pepper.jpg";
import Footer from "../components/shared/footer";
import "./css/landing.css"
import InfusionCreator from "../components/shared/infusionCreator";

function Index() {
    return (
        <div>
            <div>
                <Hero
                    title={"Create An Infusion"}
                    subtitle={"You Can Choose Any Ingredients You Like!"}
                    content={<InfusionCreator />}
                />
                <div className="container has-text-centered">
                    <div className="my-5">
                        <p className="title">Popular Infusions</p>
                        <p className="subtitle">Not Sure What to Get? Take a Look at Our Popular Selections!</p>
                    </div>
                    <div className="container">
                        <div className="popular-container">
                            <div>
                                <figure className="image is-4by3">
                                    <img
                                        src={RosemaryOil}
                                        alt="Placeholder" />
                                </figure>
                                <div>
                                    <p className="subtitle is-size-4 my-2 has-text-weight-medium">Rosemary Infused Avocado Oil</p>
                                </div>
                                <div className="content has-text-centered">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                </div>
                                <div className="is-flex is-justify-content-center">
                                    <button className="button is-primary is-light">I Want This</button>
                                </div>

                            </div>
                            <div>
                                <figure className="image is-4by3">
                                    <img src={GarlicButter}
                                        alt="Placeholder" />
                                </figure>
                                <div>
                                    <p className="subtitle is-size-4 my-2 has-text-weight-medium">Garlic Infused Butter</p>
                                </div>
                                <div className="content has-text-centered">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                </div>
                                <div className="is-flex is-justify-content-center">
                                    <button className="button is-primary is-light">I Want This</button>
                                </div>
                            </div>
                            <div>
                                <figure className="image is-4by3">
                                    <img src={PepperOliveOil} alt="Placeholder" />
                                </figure>
                                <div>
                                    <p className="subtitle is-size-4 my-2 has-text-weight-medium">Cayenne Pepper Infused Olive Oil</p>
                                </div>
                                <div className="content has-text-centered">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                </div>
                                <div className="is-flex is-justify-content-center">
                                    <button className="button is-primary is-light">I Want This</button>
                                </div>

                            </div>
                            <div>
                                <figure className="image is-4by3">
                                    <img src={BlackPepperOil} alt="Placeholder" />
                                </figure>
                                <div>
                                    <p className="subtitle is-size-4 my-2 has-text-weight-medium">Cayenne Pepper Infused Olive Oil</p>
                                </div>
                                <div className="content has-text-centered">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                </div>
                                <div className="is-flex is-justify-content-center">
                                    <button className="button is-primary is-light">I Want This</button>
                                </div></div>
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
                                <p className="subtitle has-text-centered mb-6">
                                    Our Team Is Passionate About Their Craft!
                                </p>
                            </div>
                            <div className="grid-container my-5">
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image mb-2" >
                                            <img src={Portrait} className="is-rounded square-image" alt="Placeholder Image" />
                                        </figure>
                                        <p className="is-size-3 has-text-weight-semibold has-text-centered" style={{ lineHeight: '1.2' }}>Aaliyah</p>
                                        <p className="is-size-5 has-text-centered text-weight-medium has-text-grey-dark mb-3">Infuser</p>
                                        <p className="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
                                            Lectus quam id leo in vitae turpis massa sed. </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image mb-2">
                                            <img src={Portrait2} className="is-rounded square-image" alt="Placeholder Image" />
                                        </figure>
                                        <p className="is-size-3 has-text-weight-semibold has-text-centered" style={{ lineHeight: '1.2' }}>Jason</p>
                                        <p className="is-size-5 has-text-centered text-weight-medium has-text-grey-dark mb-3">Infuser</p>
                                        <p className="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
                                            Lectus quam id leo in vitae turpis massa sed. </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content" >
                                        <figure className="image mb-2" >
                                            <img src={Portrait3} className="is-rounded square-image" alt="Placeholder Image" />
                                        </figure>
                                        <p className="is-size-3 has-text-weight-semibold has-text-centered" style={{ lineHeight: '1.2' }}>Aisha</p>
                                        <p className="is-size-5 has-text-centered text-weight-medium has-text-grey-dark mb-3">Infuser</p>
                                        <p className="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
                                            Lectus quam id leo in vitae turpis massa sed. </p>
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