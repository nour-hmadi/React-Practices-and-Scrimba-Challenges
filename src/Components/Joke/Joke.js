

import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {props.punchline && <p>Punchline: {props.punchline}</p>}
            {props.setup && <hr /> || props.punchline && <hr />}
            <h3 style={{display: props.setdown ? "block" : "none"}}>Setdown: {props.setdown}</h3>
        </div>

    )
}