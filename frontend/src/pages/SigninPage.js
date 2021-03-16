import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SigninPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className="singin-page">
            <form
                className="singin-page__form"
                onSubmit={submitHandler}
            >
                <div>
                    <h1>Zaloguj się</h1>
                </div>

                <div>
                    <label className="singin-page__label" htmlFor="email">Adres email:</label>
                    <input
                        className="singin-page__input"
                        type="email"
                        id="email"
                        placeholder="Wpisz email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="singin-page__label" htmlFor="email">Hasło:</label>
                    <input
                        className="singin-page__input"
                        type="password"
                        id="password"
                        placeholder="Wpisz hasło"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label className="singin-page__label"/>
                    <button
                        className="singin-page__button primary"
                        type="submit"
                    >Zaloguj się</button>
                </div>

                <div>
                    <label className="singin-page__label"/>
                    <div>
                        Nie masz konta? {' '}
                        <Link to='/register'>Zarejestruj się</Link>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default SigninPage;