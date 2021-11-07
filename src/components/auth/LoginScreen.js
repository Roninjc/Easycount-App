import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm';

import './auth.scss';

export const LoginScreen = () => {

    const [ formValues, handleInputChanges ] = useForm({});
    const { email, password } = formValues;

    const [signChange, setSignChange] = useState(false);
    const [signChange2, setSignChange2] = useState(false);
    
    const handleLogin = (e) => {
        e.preventDefault();

        console.log(email, password);

        // dispatch( startLogin( lEmail, lPassword ) );
    }

    const handleSignChange = () => {
        setSignChange(!signChange);
        setSignChange2(true);
        setTimeout(() => {
            setSignChange2(false);
        }, 500);
    }

    return (
        <div className="auth-container center">
            <div className={`main-container inner ${ (signChange ? "l40" : "") }`}>
                <div>
                    <h3>Sign in to Easycount</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={ email || "" }
                                onChange={ handleInputChanges }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Passord"
                                name="password"
                                value={ password || "" }
                                onChange={ handleInputChanges }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btn btn-main"
                                value="SIGN IN"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className={`second-container inner ${ (signChange ? "l0" : "") } ${ (signChange2 ? "w0" : "") }`}>
                <div>
                    <h3>New here?</h3>
                    <span>Enter your data and start now</span>
                    <div>
                        <button
                            className="btn btn-second"
                            onClick={ handleSignChange }
                        >
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
