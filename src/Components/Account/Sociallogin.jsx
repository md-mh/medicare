import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import useAuth from '../../Hooks/useAuth';
import './Account.css';

const Sociallogin = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();

    return (
        <div>
            <br /><h3>Social Login</h3><br />

            <Button variant="light" onClick={signInUsingGoogle}><AiFillGoogleCircle />    Google sign In</Button>
            <br /><br />
            <Button variant="light" onClick={signInUsingGithub}><AiFillGithub />  Github sign In</Button> <br /><br />

        </div>
    );
};

export default Sociallogin;