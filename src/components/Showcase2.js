import React, {useState, useEffect} from "react";
import useFetch from "../hooks/useFetch";
import shoe1 from ".././assets/images/products/shoe-1.jpg"
import shoe1_1 from ".././assets/images/products/shoe-1_1.jpg";
import { useNavigate, useParams } from "react-router-dom";

const Showcase2 = ({products, data}) => {
  const{id} = useParams;
  const navigate = useNavigate();
    return(
        <>
        
        {products?.data?.map((item) => (
          
          <div className="showcase" key={item.id}
               onClick={() => navigate("/Singleproducts" + item.id)}
          >
          
            
          <div className="showcase-banner">
            <img
              
              src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}

              alt="Men's Leather Formal Wear shoes"
              className="product-img default"
              width={300}
            />
            <img
              src={shoe1_1}
              alt="Men's Leather Formal Wear shoes"
              className="product-img hover"
              width={300}
            />
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
            {item.attributes.type}
            </a>
            <h3>
              <a href="/Singleproduct" className="showcase-title">
                {item.attributes.Title}
              </a>
            </h3>
            <div className="showcase-rating">
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star" />
              <ion-icon name="star-outline" />
            </div>
            <div className="price-box">
              <p className="price">${item.attributes.price}.00</p>
              <del>${item.attributes.oldprice}.00</del>
            </div>
          </div>
        </div>
            ))}

        
        
        
        </>
        
    )
    
}

export default Showcase2;