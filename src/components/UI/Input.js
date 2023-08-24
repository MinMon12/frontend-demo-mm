const Input = ({ children, type, label, placeholder }) => {
    let inputClass = "bg-gray-50 text-gray-900 text-md rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1";
    let labelClass = "block mb-2 text-md font-medium text-white";
    return (
        <div>
            <label htmlFor={label} className={labelClass}>{label}</label>
            <input type={type} name={type} id={type} className={inputClass} placeholder={placeholder} required />
        </div>
    )
}
export default Input;