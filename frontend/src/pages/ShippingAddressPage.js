import {useState} from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import {useDispatch, useSelector} from "react-redux";
import {saveShippingAddress} from "../actions/cartActions";


const ShippingAddressPage = (props) => {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    if(!userInfo){
        props.history.push('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(saveShippingAddress(fullName, address, city, postalCode, country));

        props.history.push('/payment');
    }

    return(
        <div className="shipping-address">
            <CheckoutSteps step1 step2/>
            <div className="shipping-address__wrapper">
                <form className="shipping-address__form" onSubmit={submitHandler} action="">
                    <div>
                        <h1 className="shipping-address__title">Adres dostawy</h1>
                    </div>
                    <div>
                        <label className="shipping-address__label" htmlFor="fullName">Imię i nazwisko:</label>
                        <input
                            className="shipping-address__input"
                            type="text"
                            id="fullName"
                            placeholder="Imię i nazwisko"
                            required={true}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="shipping-address__label" htmlFor="fullName">Adres:</label>
                        <input
                            className="shipping-address__input"
                            type="text"
                            id="address"
                            placeholder="Adres"
                            required={true}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="shipping-address__label" htmlFor="fullName">Miejscowość:</label>
                        <input
                            className="shipping-address__input"
                            type="text"
                            id="city"
                            placeholder="Miejscowość"
                            required={true}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="shipping-address__label" htmlFor="fullName">Kod pocztowy:</label>
                        <input
                            className="shipping-address__input"
                            type="text"
                            id="postalCode"
                            placeholder="Kod pocztowy"
                            required={true}
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="shipping-address__label" htmlFor="fullName">Kraj:</label>
                        <input
                            className="shipping-address__input"
                            type="text"
                            id="country"
                            placeholder="Kraj"
                            required={true}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div>
                        <label/>
                        <button className="shipping-address__button" type="submit">Kontynuuj</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default ShippingAddressPage;