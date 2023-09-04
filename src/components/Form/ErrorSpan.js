import React from 'react'

function ErrorSpan(props) {
    return (
        <span id={`errorSpan${props.spanId}`} className="text-danger"></span>
    )
}

export default ErrorSpan