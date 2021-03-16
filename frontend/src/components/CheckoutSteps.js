
const CheckoutSteps = (props) => {
    return(
        <div className="checkout-steps">
            <div className={ props.step1 ? "checkout-steps__step checkout-steps__step--active" : 'checkout-steps__step'}>Logowanie</div>
            <div className={ props.step2 ? "checkout-steps__step checkout-steps__step--active" : 'checkout-steps__step'}>Adres dostawy</div>
            <div className={ props.step3 ? "checkout-steps__step checkout-steps__step--active" : 'checkout-steps__step'}>Płatność</div>
            <div className={ props.step4 ? "checkout-steps__step checkout-steps__step--active" : 'checkout-steps__step'}>Dostawa</div>
        </div>
    );
}

export default CheckoutSteps;