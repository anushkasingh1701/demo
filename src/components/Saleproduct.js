import React from "react";
import shorts1 from ".././assets/images/products/shorts-1.jpg";
import shorts2 from ".././assets/images/products/shorts-2.jpg";


const Saleproduct = () => {
    return(
      
        <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={shorts1}
                    alt="Better Basics French Terry Sweatshorts"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={shorts2}
                    alt="Better Basics French Terry Sweatshorts"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle black">sale</p>
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
                    shorts
                  </a>
                  <h3>
                    <a href="/Singleproduct" className="showcase-title">
                      Better Basics French Terry Sweatshorts
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                    <ion-icon name="star-outline" />
                  </div>
                  <div className="price-box">
                    <p className="price">$78.00</p>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
    )
    
}

export default Saleproduct;