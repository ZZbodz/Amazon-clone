import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="headr_optionLineOne"> Hello geust</span>
          <span className="headr_optionLineTwo"> Sign In</span>
        </div>
        <div className="header_option">
          <span className="headr_optionLineOne"> Retrun </span>
          <span className="headr_optionLineTwo"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="headr_optionLineOne"> Your </span>
          <span className="headr_optionLineTwo">Prime</span>
        </div>

        <div className="heaedr_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount"> 0 </span>  
        </div>
      </div>
    </div>
  );
}

export default Header;
