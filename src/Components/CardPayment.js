import React from "react";
import "../CSS/CardPayment.css";
import { useStateValue } from "../Stateprovider";
import { Link, Navigate } from "react-router-dom";
import { db } from "../firebase";
import { getBasketTotal } from "../reducer";

function CardPayment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handlebuy = () => {
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc()

      .set({
        basket: basket,
        amount: getBasketTotal(basket),
        created: new Date(),
      });

    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  return (
    <div className="payment-gateway">
      <div className="payment-gateway-header">
        <h1 className="payment-gateway-title">Payment Gateway</h1>
      </div>

      <div className="payment-gateway-card-details">
        <svg className="payment-gateway-card-icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13 2C8.582 2 5 5.582 5 10v4c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8V9c0-1.654-1.346-3-3-3h-5zm2 5h3c.565 0 1 .435 1 1v3c0 .565-.435 1-1 1h-3v3.586l-2-2V11h-3c-.565 0-1-.435-1-1V7c0-.565.435-1 1-1h3V2.414l2 2V7zM13 4h-3v2h3V4z"
          ></path>
        </svg>

        <span className="payment-gateway-card">
          <input
            type="text"
            className="payment-gateway-card-number"
            value="Card ending in 0242"
          />
        </span>

        <span className="payment-gateway-card">
          <input
            type="text"
            className="payment-gateway-card-expiry"
            value="Expires 03/2"
          />
        </span>
      </div>

      <div className="payment-gateway-card-type">
        <img
          className="payment-gateway-card-image"
          src="https://img.icons8.com/color/452/visa.png"
          alt="Visa"
        />

        <div className="payment-gateway-card-label">
          <select className="payment-gateway-card-select">
            <option value="credit-debit">Credit / Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
      </div>

      <div className="payment-gateway-actions">
        <Link to={"/Payment"}>
          <button className="payment-gateway-button payment-gateway-button-cancel">
            Cancel Payment
          </button>
        </Link>

        <Link to="/orders">
          <button
            onClick={handlebuy}
            className="payment-gateway-button payment-gateway-button-buy"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardPayment;
