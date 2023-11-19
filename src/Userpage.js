import React from "react";
import "./css/Userpage.css";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Account from "./components/Account";
const Userpage = () => {
  return (
    <>
      <div className="cart-panel">
        <Title/>
        <div className="user-wrapper">
          <Sidebar/>
          <div className="content">
            <Account/>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Userpage;
