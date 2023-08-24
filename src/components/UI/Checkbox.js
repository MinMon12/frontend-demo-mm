import Input from "./Input";

const Checkbox = (props) => {
    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <Input type='checkbox' value="" required />
            </div>
            <label htmlFor="remember" className="ml-2 mt-1 text-sm font-medium text-white">{props.label}</label>
        </div>
    )
}

export default Checkbox;