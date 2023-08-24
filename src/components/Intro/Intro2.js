import { Link } from 'react-router-dom';
import '../../index.css';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import Header from '../UI/Header';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import BackButton from '../UI/BackButton';

// The following box after intro box
const ShowIntro2 = () => {
    return (
        <Card>
            <BackButton></BackButton>
            <Logo />
            <form className=" mt-5" action="#">
                <Header>City Rewards</Header>
                <Link to="/SignIn">
                    <PrimaryButton>SIGN IN</PrimaryButton>
                </Link>
                <Link to="/CardSignIn">
                    <SecondaryButton>REGISTER VIA CARD</SecondaryButton>
                </Link>
            </form>
        </Card>
    );
}

export default ShowIntro2;