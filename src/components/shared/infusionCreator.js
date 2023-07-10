import React, {useState} from 'react';
import MasonJar from "../../images/mason-jar.svg";
import Leaf from "../../images/Leaf.svg";
import Drop from "../../images/Drop.svg";
import Selector from "./form/selector";
import {navigate} from "gatsby-link";
import { connect } from "react-redux"

function InfusionCreator(props) {
    const [loading, setLoading] = useState(false);
    const [selections, setSelections] = useState({})
    function startInfusion() {
        setLoading(true);
        const search = new URLSearchParams({...selections});
        console.log("search", );
        navigate(`/cart?${search.toString()}`);
    }

    return (
        <div className={"is-flex container is-flex-direction-column"}>
            <div className={"columns mb-5"}>
                <div className={"column"}>
                    <img src={Drop} alt="Drop Icon" style={{height: '5rem'}}/>
                    <p style={{whiteSpace: 'noWrap'}}>Select Your Infusion base</p>
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
                            }/>
                    </div>
                </div>
                <div className={"column"}>
                    <img src={Leaf} style={{height: '5rem'}}/>
                    <p>Select Your Ingredients</p>
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
                            }/>
                    </div>
                </div>
                <div className={"column"}>
                    <img src={MasonJar} style={{width: '5rem'}}/>
                    <p>Select Your Size</p>
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
                            }/>
                    </div>
                </div>
            </div>
            <div className="is-flex is-flex-direction-row is-fullwidth is-justify-content-center">
                <button className={"button is-link is-large " + (loading ? "is-loading" : "")}
                        onClick={startInfusion}>
                    Infuse
                </button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return { addToCart: (data) => dispatch({ type: `ADD_TO_CART`, data }) }
}

export default connect(null, mapDispatchToProps)(InfusionCreator);