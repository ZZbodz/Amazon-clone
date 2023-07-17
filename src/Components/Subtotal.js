import React from "react";
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Stateprovider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):{" "}
              <strong>
                {/* add the price to show total price */}
                {value}$
              </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
