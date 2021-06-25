import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFOrm from '../SipleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeJo0BeyQIn8tooKlP3aclhhCn4DMshc7wKSVgIuj8xnHjFHvqtAGiaCJhjBjCjLtgPwzAGphQB6ozl6LHmWC6100Wu6lSjRW');

const ProcessPayment = (props) => {
    const {paymentSuccess, setPaymentSuccess} = props;
    return (
        <Elements stripe={stripePromise}>
       <SimpleCardFOrm paymentSuccess={paymentSuccess} setPaymentSuccess={setPaymentSuccess}/>
      </Elements>
    );
};

export default ProcessPayment;