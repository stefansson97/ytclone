import React from 'react';
import './sign-in-button.styles.scss';

function SignInButton() {
    return (
        <button className='sign-in-btn'>
            <i className="material-icons sign-in-btn-icon">account_circle</i>
            SIGN IN
        </button>  
    )
}

export default SignInButton;