import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import {FaWallet} from "react-icons/fa"
import {BsArrowRightSquare} from "react-icons/bs"
import {GrDeliver} from "react-icons/gr"

export default function PaymentMethodScreen(props) {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
      props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('CashonDelivery');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePaymentMethod(paymentMethod));
      props.history.push('/placeorder');
    };

    return (
        <div>
          <CheckoutSteps step1 step2 step3></CheckoutSteps>
          <form className="form" onSubmit={submitHandler}>
          <div>
          <h1> <FaWallet/> Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="CashonDelivery"
              value="CashonDelivery"
              name="Cash on Delivery"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label >Cash on Delivery  <GrDeliver/> </label>
          </div>
        </div>
            <div>
              <label />
              <button className="primary" type="submit">
               <BsArrowRightSquare/> Continue 
              </button>
            </div>
          </form>
        </div>
      );
    }