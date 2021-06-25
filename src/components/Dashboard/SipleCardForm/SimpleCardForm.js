import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardFOrm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const {paymentSuccess, setPaymentSuccess} = props
  

  const handleSubmit = async (event) => {
 
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentError(null)
      setPaymentSuccess(paymentMethod)
      console.log(paymentMethod);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-info mt-1" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
       {

        paymentError && <p className='text-danger'>{paymentError}</p>
    } 
    {
      paymentSuccess && <p className="text-success"> Your payment has successful</p>
    }
    </>
  );
};

export default SimpleCardFOrm