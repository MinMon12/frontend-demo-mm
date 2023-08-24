import Card from "../../UI/Card";
import React, { useState } from "react";
import Label from "../../UI/Label";
import PrimaryButton from "../../UI/PrimaryButton";
import { Link } from "react-router-dom";
import BackButton from "../../UI/BackButton";

// use state with forget password
// user chose what type of account to show different forms relating to what the user chose
const ForgetPassword = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    // handling when the box is checked
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Card option={selectedOption}>
            <BackButton></BackButton>
            {/* Mobile radio */}
            <div className="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="mobile number" onChange={handleOptionChange} name="default-radio" className="w-5 h-5 mr-3 ml-3 bg-gray-100 border-gray-300 checked:bg-purple" />
                <Label htmlFor="default-radio-1" label="MOBILE NUMBER" />
            </div>
            <div className="flex items-center mb-4">
                <input id="default-radio-2" type="radio" value="nrc" name="default-radio" onChange={handleOptionChange} className="w-5 h-5 mr-3 ml-3 bg-gray-100 border-gray-300 checked:bg-purple" />
                <Label htmlFor="default-radio-2" label="NRC" />
            </div>
            <div className="flex items-center mb-4">
                <input id="default-radio-3" type="radio" value="old nrc" name="default-radio" onChange={handleOptionChange} className="w-5 h-5 mr-3 ml-3 bg-gray-100 border-gray-300 checked:bg-purple" />
                <Label htmlFor="default-radio-3" label="OLD-FORMAT-NRC" />
            </div>
            <div className="flex items-center mb-4">
                <input id="default-radio-4" type="radio" value="passport" name="default-radio" onChange={handleOptionChange} className="w-5 h-5 mr-3 ml-3 bg-gray-100 border-gray-300 checked:bg-purple" />
                <Label htmlFor="default-radio-4" label="PASSPORT" />
            </div>
            <Link to={`/SignIn/forget-password/form?selectedOption=${selectedOption}`}>
                <PrimaryButton>
                    Continue
                </PrimaryButton>
            </Link>
        </Card>
    )
}
export default ForgetPassword;