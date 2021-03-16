import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterPage = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match');
        } else {
            dispatch(register(name, email, password));
        }
    };
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="register-page">
            <form
                className="register-page__form"
                onSubmit={submitHandler}
            >
                <div>
                    <h1 className="register-page__title">Zarejestruj się</h1>
                </div>
                {loading && <LoadingBox/>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                <div>
                    <label className="register-page__label" htmlFor="name">Imię i nazwisko:</label>
                    <input
                        className="register-page__input"
                        type="name"
                        id="name"
                        placeholder="Wpisz imię i nazwisko"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="register-page__label" htmlFor="email">Adres email:</label>
                    <input
                        className="register-page__input"
                        type="email"
                        id="email"
                        placeholder="Wpisz email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="register-page__label" htmlFor="password">Hasło:</label>
                    <input
                        className="register-page__input"
                        type="password"
                        id="password"
                        placeholder="Wpisz hasło"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label className="register-page__label" htmlFor="confirmPassword">Powtórz hasło:</label>
                    <input
                        className="register-page__input"
                        type="password"
                        id="confirmPassword"
                        placeholder="Powtórz hasło"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label className="register-page__label"/>
                    <button
                        className="register-page__button primary"
                        type="submit"
                    >Zarejestruj się</button>
                </div>

                <div>
                    <label className="register-page__label"/>
                    <div>
                        Masz konto? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Zaloguj się</Link>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default RegisterPage;