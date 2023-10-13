import React, { useState } from "react";
import "./selector.css";

function Selector({ options, multiple = false, setSelections, name }) {
    const [selected, setSelected] = useState(undefined);

    function handleSelect(option) {
        if (multiple) {

            if (selected && selected.includes(option)) {
                setSelected(prevState => {
                    if (prevState) {
                        prevState.splice(prevState.indexOf(option), 1)
                        setSelections(prev => ({ ...prev, [name]: { ...prevState } }));
                        return prevState;
                    } else {
                        return [];
                    }
                });
            } else {
                setSelected(prevState => {
                    const result = prevState ? prevState.concat(option) : [].concat(option);
                    setSelections(prev => ({ ...prev, [name]: result }));
                    return result;
                });
            }
        } else {
            setSelected(() => {
                setSelections(prev => ({ ...prev, [name]: option }))
                return option;
            });
        }
    }

    function getSelectedClassname(option) {
        if (!selected) {
            return "";
        }
        if (multiple && selected.includes(option)) {
            return "is-active";
        }
        if (!multiple && selected === option) {
            return "is-active";
        }
        return "";
    }

    return (
        <div>
            <div className={"menu"}>
                <ul className={"menu-list no-bullet"}>
                    {options.map(option => (
                        <li key={option}>
                            <a className={'text ' + getSelectedClassname(option)}
                                onClick={() => handleSelect(option)}>
                                {option}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Selector;
