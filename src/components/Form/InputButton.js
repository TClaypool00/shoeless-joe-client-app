import React from 'react'

function InputButton(props) {
    return (
        <div className="form-group">
            <button onClick={props.function} id={props.id} className={`btn ${props.color || "btn-primary"}`}>{props.text}</button>
        </div>
    )
}

export default InputButton;