import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SigninPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="singin-page">
            <form
                className="singin-page__form"
                onSubmit={submitHandler}
            >
                <div>
                    <h1 className="singin-page__title">Zaloguj się</h1>
                </div>
                {loading && <LoadingBox/>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
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