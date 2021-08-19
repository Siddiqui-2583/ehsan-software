import React from 'react';
import './Header.css'
import logo from "../../Images/logo.png";
const Header = ({ isOpen, setIsOpen, cartItemNum }) => {
  // console.log(cartItemNum)
  const toggleCart = () => {
    if (isOpen === true) {
      setIsOpen(false);
      console.log(isOpen)
    } 
    else{
      setIsOpen(true);
      console.log(isOpen);
    }
  }
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      {/* <div className="cart-badge">
        <img onClick={toggleCart} className="cartImg" src={cart} alt="cart" />
        <p>
          {" "}
          Cart: <span>{cartItemNum}</span> items
        </p>
      </div> */}
    </div>
  );
};

export default Header;