import React, { useState } from 'react';
import MasonJar from "../../images/mason-jar.svg";
import Leaf from "../../images/Leaf.svg";
import Drop from "../../images/Drop.svg";
import Selector from "./form/selector";
import { navigate } from "gatsby-link";
import { connect } from "react-redux"

function InfusionCreator() {
    const [loading, setLoading] = useState(false);
    const [selections, setSelections] = useState({})
    function startInfusion() {
        setLoading(true);
        //ensure a selection has been made for each category 
        const search = new URLSearchParams({ ...selections });
        navigate(`/cart?${search.toString()}`);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (Object.keys(selections).length !== 3) {
            alert("Please select a base, ingredients, and size.")
            return;
        }
        startInfusion();
    }
    return (
        <form onSubmit={handleSubmit} className={"is-flex container is-flex-direction-column"}>
            <div className={"columns mb-5"}>
                <div className={"column"}>
                    <img src={Drop} alt="Drop Icon" style={{ height: '5rem' }} />
                    <h2 className='subtitle is-5 mt-2' style={{ whiteSpace: 'noWrap' }}>Select Your Infusion base</h2>
                    <div className="box">
                        <Selector
                            name={"base"}
                            setSelections={setSelections}
                            options={
                                [
                                    "Butter",
                                    "Ghee",
                                    "Coconut Oil",
                                    "Avocado Oil",
                                    "Olive Oil",
                                ]
                            } />
                    </div>
                </div>
                <div className={"column"}>
                    <img src={Leaf} style={{ height: '5rem' }} alt ="Leaf Icon"/>
                    <h2 className='subtitle is-5 mt-2'>Select Your Ingredients</h2>
                    <div className={"box"}>
                        <Selector
                            multiple
                            name={"ingredients"}
                            setSelections={setSelections}
                            options={
                                [
                                    "Cayenne Pepper",
                                    "Ghost Pepper",
                                    "Garlic",
                                    "Rosemary",
                                    "Black Pepper"
                                ]
                            } />
                    </div>
                </div>
                <div className={"column"}>
                    <img src={MasonJar} style={{ width: '5rem' }} alt="Mason Jar Icon" />
                    <h2 className='subtitle is-5 mt-2'>Select Your Size</h2>
                    <div className={"box"}>
                        <Selector
                            name={"size"}
                            setSelections={setSelections}
                            options={
                                [
                                    "16 Oz",
                                    "12 Oz",
                                    "8 Oz",
                                    "4 Oz",
                                    "2 Oz",
                                ]
                            } />
                    </div>
                </div>
            </div>
            <div className="is-flex is-flex-direction-row is-fullwidth is-justify-content-center">
                <button className={"button is-rounded is-large is-link " + (loading ? "is-loading" : "")}
                    type="submit">
                    Infuse
                </button>
            </div>
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return { addToCart: (data) => dispatch({ type: `ADD_TO_CART`, data }) }
}

export default connect(null, mapDispatchToProps)(InfusionCreator);