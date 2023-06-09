import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="headr_optionLineOne"> Hello geust</span>
            <span className="headr_optionLineTwo"> Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="headr_optionLineOne"> Retrun </span>
          <span className="headr_optionLineTwo"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="headr_optionLineOne"> Your </span>
          <span className="headr_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="heaedr_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
