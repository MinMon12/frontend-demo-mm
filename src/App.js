import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useNavigate
} from 'react-router-dom';
import ShowIntro from './components/Intro/Intro';
import SingUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import ShowIntro2 from './components/Intro/Intro2';
import CardSignIn from './components/Auth/CardSignIn';
import ForgetPassword from './components/Auth/ForgetPassword/ForgetPassword';
import ForgetPasswordForm from './components/Auth/ForgetPassword/ForgetPasswordForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShowIntro />} />
        <Route path='/Intro2' element={<ShowIntro2 />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SingUp />} />
        <Route path='/CardSignIn' element={<CardSignIn />} />
        <Route path='/SignIn/forget-password' element={<ForgetPassword />} />
        <Route path='/SignIn/forget-password/form' element={<ForgetPasswordForm/>} />
      </Routes>
    </Router>
  );
}
export default App;

