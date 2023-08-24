const Label=(props)=>{
    let labelClass = "inline block text-md font-medium text-white";
    return (
        <label htmlFor={props.htmlFor} className={labelClass}>{props.label}</label>
    )
}
export default Label;