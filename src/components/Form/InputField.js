import ErrorSpan from "./ErrorSpan";

function InputField(props) {
    return (
        <div className="form-group">
            <input type={props.type || "text"} id={props.id} className="form-control"  onChange={(e) => props.setFunction(e.target.value)} placeholder={`Enter ${props.text}...`} />
            <ErrorSpan spanId={props.spanId} />
        </div>
    )
}

export default InputField;