import { Link } from 'react-router-dom';
import '../../index.css';
import Card from '../UI/Card';
import Header from '../UI/Header';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';
import BackButton from '../UI/BackButton';
import Checkbox from '../UI/Checkbox';

const SignIn = () => {
    return (
        <Card>
            <BackButton></BackButton>
            {/* form starts */}
            <form className="space-y-6" action="#">
                <Header>Sign in to our platform</Header>
                <Input label='Your Phone' type='text' placeholder="(+95)9XXXXXXXXX" />
                <Input label='Your Password' type='password' placeholder="••••••••" />
                {/* Checkbox and lost password division starts */}
                <div className="flex items-start">
                    <Checkbox label="Remember Me" />
                    <Link to="/SignIn/forget-password" className="ml-auto text-sm text-yellow font-medium hover:underline">
                        Lost Password?
                    </Link>
                </div>
                {/* Checkbox and lost password division ends */}
                <PrimaryButton>LOGIN TO YOUR ACCOUNT</PrimaryButton>
                {/* Spans division starts */}
                <div className="text-sm font-medium">
                    <span className='text-white'>Not a member yet?</span>
                    <Link to="/SignUp">
                        <span className='text-yellow hover:underline'>Create account</span>
                    </Link>
                </div>
                {/* Spans division ends */}
            </form>
            {/* form ends */}
        </Card >
    )
}

export default SignIn;