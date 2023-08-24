import { Link } from 'react-router-dom';
import '../../index.css';
import Card from '../UI/Card';
import Logo from '../UI/Logo';
import Header from '../UI/Header';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';

// Show intro box to users
const ShowIntro = () => {
    return (
        <Card>
            <Logo/>
            <form className=" mt-5" action="#">
                <Header>City Rewards</Header>
                <Link to="/Intro2">
                    <PrimaryButton>I'M A MEMBER</PrimaryButton> 
                </Link>
                <Link to="/SignUp">
                    <SecondaryButton>SIGN UP</SecondaryButton>
                </Link>
            </form>
        </Card>
    );
}

export default ShowIntro;