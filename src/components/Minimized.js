import React from "react"


import clothes1 from '../assets/images/products/clothes-1.jpg'


const Minimized = () => {
    return(
        <div className="showcase">
        <a href="/Singleproduct" className="showcase-img-box">
          <img
            src={clothes1}
            alt="relaxed short full sleeve t-shirt"
            width={70}
            className="showcase-img"
          />
        </a>
        <div className="showcase-content">
          <a href="/Singleproduct">
            <h4 className="showcase-title">
              Relaxed Short full Sleeve T-Shirt
            </h4>
          </a>
          <a href="/Singleproduct" className="showcase-category">
            Clothes
          </a>
          <div className="price-box">
            <p className="price">$45.00</p>
            <del>$50.00</del>
          </div>
        </div>
      </div>
    )
}

export default Minimized;