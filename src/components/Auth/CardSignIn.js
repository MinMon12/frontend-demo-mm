import { Link } from 'react-router-dom';
import '../../index.css';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';
import BackButton from '../UI/BackButton';

const CardSignIn = () => {
    return (
        <Card>
            <BackButton></BackButton>
            <Logo/>
            {/* form starts */}
            <form className=" mt-5" action="#">
                <Input label={'Enter Card Number Below'} type={'text'} placeholder={'XXXX-XXXX-XXXX-XXXX'}/>
                <Link to="/SignUp">
                    <PrimaryButton>Next</PrimaryButton>
                </Link>
            </form>
            {/* form ends */}
        </Card>
    );
}

export default CardSignIn;