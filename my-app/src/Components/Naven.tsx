import React, { useState } from "react";

const Naven = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  function openBtn() {
    setToggleBtn(!toggleBtn);
  }

  return (
    <>
      {toggleBtn ? (
        <div className="navbar open">
          <ul className="ul open">
            <li className="item">
              <a href="/home" className="link">
                Home
              </a>
            </li>
            <li className="item">
              <a href="/about" className="link">
                Products
              </a>
            </li>
            <li className="item">
              <a href="/about" className="link">
                About
              </a>
            </li>
            <li className="item">
              <a href="/contact" className="link">
                Contact
              </a>
            </li>
          </ul>

          <div onClick={openBtn} className="menu-btn">
            <span className={`burger open`}></span>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <h1 className="menu">Menu</h1>
          <div onClick={openBtn} className="menu-btn">
            <span className={`burger`}></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Naven;
