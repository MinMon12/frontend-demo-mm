import { useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center mb-5">
            <ChevronLeft className='inline' size={30} color="#fff714" strokeWidth={1.75} />
            Back
        </button>
    )
}

export default BackButton;