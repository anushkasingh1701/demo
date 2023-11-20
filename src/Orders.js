import React from "react";
//css
import Orderstable from "./components/Orderstable";

import "./css/Userpage.css";
import Title from "./components/Title";
import Sidebar from "./components/Sidebar";


const Orders = () => {
    return (
      // orders page
        <div className="cart-panel">
        <Title/>
        <div className="user-wrapper">
          <Sidebar/>
          <div className="content">
          <Orderstable/>
          </div>
          
        </div>
      </div>
    )
}

export default Orders;