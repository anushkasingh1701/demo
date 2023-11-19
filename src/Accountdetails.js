import React from "react";
import "./css/Userpage.css";

import Title from "./components/Title";
import Sidebar from "./components/Sidebar";

const Accountdetails = () => {
    return(
        <div className="cart-panel">
        <Title/>
        <div className="user-wrapper">
          <Sidebar/>
          <div className="content">
             
          </div>
          
        </div>
      </div>
    )
}

export default Accountdetails;