import styled from 'styled-components'

import loginImg from '../images/login-img.svg';

const Login = () => {
    return (
        <Wraper>
            <div className='login-container'>
                <img src={loginImg} alt='LoginImage' className='login-img' />
                <h1>Github User</h1>
                <button className='btn'>
                    Login
                </button>
            </div>
        </Wraper>
    )
}

const Wraper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    .login-container {
        width: 90vw;
        max-width: 600px;
        text-align: center;
    }
    .login-img {
        margin-bottom: 2rem;
    }
    h1 {
        margin-bottom: 1.5rem
    }
`;

export default Login;