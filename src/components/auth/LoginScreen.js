import React from 'react';

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const [ formValues, handleInputChanges ] = useForm({});

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(email, password);

        // dispatch( startLogin( lEmail, lPassword ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Log in</h3>
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
                        <div className="form-group center">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
