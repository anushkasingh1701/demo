import React from "react";
import jacket3 from ".././assets/images/products/jacket-3.jpg"
import jacket4 from ".././assets/images/products/jacket-4.jpg"

const Discountprod = () => {
    return(
        <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={jacket3}
                    alt="Mens Winter Leathers Jackets"
                    width={300}
                    className="product-img default"
                  />
                  <img
                    src={jacket4}
                    alt="Mens Winter Leathers Jackets"
                    width={300}
                    className="product-img hover"
                  />
                  <p className="showcase-badge">15%</p>
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline" />
                    </button>
                    <button className="btn-action">
                      <ion-icon name="eye-outline" />
                    </button>
                    <button className="btn-action">
                      <ion-icon name="repeat-outline" />
                    </button>
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline" />
                    </button>
                  </div>
                </div>
                <div className="showcase-content">
                  <a href="/Singleproduct" className="showcase-category">
                    jacket
                  </a>
                  <a href="/Singleproduct">
                    <h3 className="showcase-title">
                      Mens Winter Leathers Jackets
                    </h3>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                  </div>
                  <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                  </div>
                </div>
              </div>
              
    )
    
}

export default Discountprod;