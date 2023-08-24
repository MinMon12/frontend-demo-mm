import { Link } from 'react-router-dom';
import '../../index.css';
import Card from '../UI/Card';
import Header from '../UI/Header';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';
import BackButton from '../UI/BackButton';

const SignUp = () => {
    return (
        <Card>
            <BackButton></BackButton>
            {/* form starts */}
            <form className="space-y-6" action="#">
                <Header>Register to our platform</Header>
                <Input label='Your Phone' text='text' placeholder="(+95)9XXXXXXXXX" />
                <Input label='Your Password' text='password' placeholder="••••••••" />
                <Input label='Confirm Password' text='password' placeholder="••••••••" />
                {/* Dropdown box for types starts */}
                <div>
                    <label htmlFor="ForgetTypes" className="block mb-0 text-m font-medium text-white">Select an option</label>
                    <select id="ForgetTypes" className="bg-gray-50 mt-2 text-gray-900 text-md rounded-lg block w-full p-2.5 focus:outline-none focus:ring-1">
                        <option value="NRC">NRC</option>
                        <option value="Old Format NRC">Old Format NRC</option>
                        <option value="Passport">Passport</option>
                    </select>
                </div>
                {/* Dropdown box for type ends */}
                {/* Aggrement box starts */}
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <p className="ml-2 text-sm font-medium text-white">I accept the <Link to="" className="ml-auto text-sm text-yellow hover:underline"> terms and conditions </Link></p>
                    </div>
                </div>
                {/* Aggrement box ends */}
                <PrimaryButton>GET OTP</PrimaryButton>
            </form>
            {/* form ends */}
        </Card>
    )
}

export default SignUp;