import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'


//banners
import banner1 from './assets/images/banner-1.jpg'
import banner2 from './assets/images/banner-2.jpg'
import banner3 from './assets/images/banner-3.jpg'
//icons
import dressicon from './assets/images/icons/dress.svg'
import coaticon from './assets/images/icons/coat.svg'
import glassicon from './assets/images/icons/glasses.svg'
import shoesicon from './assets/images/icons/shoes.svg'
import bagicon from './assets/images/icons/bag.svg'
import cosmeticsicon from './assets/images/icons/cosmetics.svg'
import haticon from './assets/images/icons/hat.svg'
import jacketicon from './assets/images/icons/jacket.svg'
import jewelryicon from './assets/images/icons/jewelry.svg'
import perfumeicon from './assets/images/icons/perfume.svg'
import quotesicon from './assets/images/icons/quotes.svg'
import shortsicon from './assets/images/icons/shorts.svg'
import teeicon from './assets/images/icons/tee.svg'
import watchicon from './assets/images/icons/watch.svg'

//products
import one from './assets/images/products/1.jpg'
import two from './assets/images/products/2.jpg'
import three from './assets/images/products/3.jpg'
import four from './assets/images/products/4.jpg'
import belt from './assets/images/products/belt.jpg'
import clothes1 from './assets/images/products/clothes-1.jpg'
import clothes2 from './assets/images/products/clothes-2.jpg'
import clothes3 from './assets/images/products/clothes-3.jpg'

import jacket1 from './assets/images/products/jacket-1.jpg'

import jacket3 from './assets/images/products/jacket-3.jpg'

import jacket5 from './assets/images/products/jacket-5.jpg'

import jewellery1 from './assets/images/products/jewellery-1.jpg'
import jewellery2 from './assets/images/products/jewellery-2.jpg'
import jewellery3 from './assets/images/products/jewellery-3.jpg'
import partywear1 from './assets/images/products/party-wear-1.jpg'

import perfume from './assets/images/products/perfume.jpg'
import shampoo from './assets/images/products/shampoo.jpg'
import shirt1 from './assets/images/products/shirt-1.jpg'

import shoe1 from './assets/images/products/shoe-1.jpg'

import shoe2 from './assets/images/products/shoe-2.jpg'

import shoe3 from './assets/images/products/shoe-3.jpg'
import shorts1 from './assets/images/products/shorts-1.jpg'
import shorts2 from './assets/images/products/shorts-2.jpg'
import sports1 from './assets/images/products/sports-1.jpg'
import sports2 from './assets/images/products/sports-2.jpg'
import sports3 from './assets/images/products/sports-3.jpg'


import sports6 from './assets/images/products/sports-6.jpg'
import watch1 from './assets/images/products/watch-1.jpg'

import watch3 from './assets/images/products/watch-3.jpg'


//testimonial
import testimonial1 from './assets/images/testimonial-1.jpg'
import ctabanner from './assets/images/cta-banner.jpg'

//blogs
import blog1 from './assets/images/blog-1.jpg'
import blog2 from './assets/images/blog-2.jpg'
import blog3 from './assets/images/blog-3.jpg'
import blog4 from './assets/images/blog-4.jpg'


//context
import { Context } from './utils/context'

// //newsletter
import { useState } from 'react'
import Newsletter from './components/Newsletter'

//notification
import Notification from './components/Notification'

import { fetchDataFromApi } from './utils/api'
import Showcase2 from './components/Showcase2'
import Showcase from './components/Showcase'
import ProductMin from './components/Minimized.js'
import Minimized from './components/Minimized.js'


const Home = ({id, data}) => {

  const {categories, setCategories, products, setProducts} = useContext(Context);
  const navigate = useNavigate();

  const gottoProduct = () => {
    navigate("/Singleproduct")
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => 
    {
      console.log(res);
      setCategories(res);
    }
    
    );

  }



  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => 
    {
      console.log(res);
      setProducts(res);
    });
  }
  //modal functions
  const[modalOpen, setmodal ] = useState(true);
  const[notificationOpen, setnotification] = useState(true);
  
  
  return (
    <>
    { modalOpen && (<Newsletter setmodal={setmodal}/>)}
    
    {notificationOpen && (<Notification setnotification ={setnotification}/> )}
     
  
  {/*
    - MAIN
  */}
  <main>
    {/*
- BANNER
    */}
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img
              src={banner1}
              alt="women's latest fashion sale"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>
              <h2 className="banner-title">Women's latest fashion sale</h2>
              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>
              <a href="index.html#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img
              src={banner2}
              alt="modern sunglasses"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>
              <h2 className="banner-title">Modern sunglasses</h2>
              <p className="banner-text">
                starting at $ <b>15</b>.00
              </p>
              <a href="index.html#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img
              src={banner3}
              alt="new fashion summer sale"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>
              <h2 className="banner-title">New fashion summer sale</h2>
              <p className="banner-text">
                starting at $ <b>29</b>.99
              </p>
              <a href="index.html#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
- CATEGORY
    */}
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={dressicon}
                alt="dress & frock"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress &amp; frock</h3>
                <p className="category-item-amount">(53)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={coaticon}
                alt="winter wear"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>
                <p className="category-item-amount">(58)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={glassicon}
                alt="glasses & lens"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses &amp; lens</h3>
                <p className="category-item-amount">(68)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={shortsicon}
                alt="shorts & jeans"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts &amp; jeans</h3>
                <p className="category-item-amount">(84)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={teeicon}
                alt="t-shirts"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>
                <p className="category-item-amount">(35)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={jacketicon}
                alt="jacket"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>
                <p className="category-item-amount">(16)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img src={watchicon} alt="watch" width={30} />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>
                <p className="category-item-amount">(27)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src={haticon}
                alt="hat & caps"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat &amp; caps</h3>
                <p className="category-item-amount">(39)</p>
              </div>
              <a href="index.html#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
- PRODUCT
    */}
    <div className="product-container">
      <div className="container">
        {/*
    - SIDEBAR
  */}
        <div className="sidebar  has-scrollbar" data-mobile-menu="">
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>
              <button
                className="sidebar-close-btn"
                data-mobile-menu-close-btn=""
              >
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="sidebar-menu-category-list">
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={dressicon}
                      alt="clothes"
                      width={20}
                      height={20}
                      className="menu-title-img"
                    />
                    <p className="menu-title">Clothes</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shirt</p>
                      <data
                        value={300}
                        className="stock"
                        title="Available Stock"
                      >
                        300
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">shorts &amp; jeans</p>
                      <data
                        value={60}
                        className="stock"
                        title="Available Stock"
                      >
                        60
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data
                        value={50}
                        className="stock"
                        title="Available Stock"
                      >
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data
                        value={87}
                        className="stock"
                        title="Available Stock"
                      >
                        87
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={shoesicon}
                      alt="footwear"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Footwear</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sports</p>
                      <data
                        value={45}
                        className="stock"
                        title="Available Stock"
                      >
                        45
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Formal</p>
                      <data
                        value={75}
                        className="stock"
                        title="Available Stock"
                      >
                        75
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Casual</p>
                      <data
                        value={35}
                        className="stock"
                        title="Available Stock"
                      >
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Safety Shoes</p>
                      <data
                        value={26}
                        className="stock"
                        title="Available Stock"
                      >
                        26
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={jewelryicon}
                      alt="clothes"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Jewelry</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Earrings</p>
                      <data
                        value={46}
                        className="stock"
                        title="Available Stock"
                      >
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Couple Rings</p>
                      <data
                        value={73}
                        className="stock"
                        title="Available Stock"
                      >
                        73
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Necklace</p>
                      <data
                        value={61}
                        className="stock"
                        title="Available Stock"
                      >
                        61
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={perfumeicon}
                      alt="perfume"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Perfume</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Clothes Perfume</p>
                      <data
                        value={12}
                        className="stock"
                        title="Available Stock"
                      >
                        12 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Deodorant</p>
                      <data
                        value={60}
                        className="stock"
                        title="Available Stock"
                      >
                        60 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data
                        value={50}
                        className="stock"
                        title="Available Stock"
                      >
                        50 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data
                        value={87}
                        className="stock"
                        title="Available Stock"
                      >
                        87 pcs
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={cosmeticsicon}
                      alt="cosmetics"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Cosmetics</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data
                        value={68}
                        className="stock"
                        title="Available Stock"
                      >
                        68
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunscreen</p>
                      <data
                        value={46}
                        className="stock"
                        title="Available Stock"
                      >
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Body Wash</p>
                      <data
                        value={79}
                        className="stock"
                        title="Available Stock"
                      >
                        79
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Makeup Kit</p>
                      <data
                        value={23}
                        className="stock"
                        title="Available Stock"
                      >
                        23
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={glassicon}
                      alt="glasses"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Glasses</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunglasses</p>
                      <data
                        value={50}
                        className="stock"
                        title="Available Stock"
                      >
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Lenses</p>
                      <data
                        value={48}
                        className="stock"
                        title="Available Stock"
                      >
                        48
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  data-accordion-btn=""
                >
                  <div className="menu-title-flex">
                    <img
                      src={bagicon}
                      alt="bags"
                      className="menu-title-img"
                      width={20}
                      height={20}
                    />
                    <p className="menu-title">Bags</p>
                  </div>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shopping Bag</p>
                      <data
                        value={62}
                        className="stock"
                        title="Available Stock"
                      >
                        62
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Gym Backpack</p>
                      <data
                        value={35}
                        className="stock"
                        title="Available Stock"
                      >
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Purse</p>
                      <data
                        value={80}
                        className="stock"
                        title="Available Stock"
                      >
                        80
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Wallet</p>
                      <data
                        value={75}
                        className="stock"
                        title="Available Stock"
                      >
                        75
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="product-showcase">
            <h3 className="showcase-heading">best sellers</h3>
            <div className="showcase-wrapper">
              <div className="showcase-container">
                <div className="showcase">
                  <a onClick={()=> gottoProduct()} className="showcase-img-box">
                    <img
                      src={one}
                      alt="baby fabric shoes"
                      width={75}
                      height={75}
                      className="showcase-img"
                    />
                  </a>
                  <div className="showcase-content">
                    <a onClick={()=> gottoProduct()}>
                      <h4 className="showcase-title">baby fabric shoes</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$4.00</p>
                    </div>
                  </div>
                </div>
                <div className="showcase">
                  <a onClick={()=> gottoProduct()} className="showcase-img-box">
                    <img
                      src={two}
                      alt="men's hoodies t-shirt"
                      className="showcase-img"
                      width={75}
                      height={75}
                    />
                  </a>
                  <div className="showcase-content">
                    <a onClick={()=> gottoProduct()}>
                      <h4 className="showcase-title">men's hoodies t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-half-outline" />
                    </div>
                    <div className="price-box">
                      <del>$17.00</del>
                      <p className="price">$7.00</p>
                    </div>
                  </div>
                </div>
                <div className="showcase">
                  <a href="/Singleproduct" className="showcase-img-box">
                    <img
                      src={three}
                      alt="girls t-shirt"
                      className="showcase-img"
                      width={75}
                      height={75}
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="/Singleproduct">
                      <h4 className="showcase-title">girls t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-half-outline" />
                    </div>
                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$3.00</p>
                    </div>
                  </div>
                </div>
                <div className="showcase">
                  <a href="/Singleproduct" className="showcase-img-box">
                    <img
                      src={four}
                      alt="woolen hat for men"
                      className="showcase-img"
                      width={75}
                      height={75}
                    />
                  </a>
                  <div className="showcase-content">
                    <a href="/Singleproduct">
                      <h4 className="showcase-title">woolen hat for men</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                    <div className="price-box">
                      <del>$15.00</del>
                      <p className="price">$12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-box">
          {/*
      - PRODUCT MINIMAL
    */}
          <div className="product-minimal">
            <div className="product-showcase">
              <h2 className="title">New Arrivals</h2>
              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  {/* <div className="showcase">
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
                  </div> */}
                  <Minimized/>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={clothes2}
                        alt="girls pink embro design top"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Girls pnk Embro design Top
                        </h4>
                      </a>
                      <a href="index.html#" className="showcase-category">
                        Clothes
                      </a>
                      <div className="price-box">
                        <p className="price">$61.00</p>
                        <del>$90.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={clothes3}
                        alt="black floral wrap midi skirt"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Black Floral Wrap Midi Skirt
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Clothes
                      </a>
                      <div className="price-box">
                        <p className="price">$76.00</p>
                        <del>$85.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shirt1}
                        alt="pure garment dyed cotton shirt"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Pure Garment Dyed Cotton Shirt
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Mens Fashion
                      </a>
                      <div className="price-box">
                        <p className="price">$31.00</p>
                        <del>$68.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jacket5}
                        alt="men yarn fleece full-zip jacket"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          MEN Yarn Fleece Full-Zip Jacket
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Winter wear
                      </a>
                      <div className="price-box">
                        <p className="price">$11.00</p>
                        <del>$61.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jacket1}
                        alt="mens winter leathers jackets"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Mens Winter Leathers Jackets
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Winter wear
                      </a>
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$32.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jacket3}
                        alt="mens winter leathers jackets"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Mens Winter Leathers Jackets
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Jackets
                      </a>
                      <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$50.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shorts1}
                        alt="better basics french terry sweatshorts"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Better Basics French Terry Sweatshorts
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Shorts
                      </a>
                      <div className="price-box">
                        <p className="price">$10.00</p>
                        <del>$20.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-showcase">
              <h2 className="title">Trending</h2>
              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={sports1}
                        alt="running & trekking shoes - white"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Running &amp; Trekking Shoes - White
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Sports
                      </a>
                      <div className="price-box">
                        <p className="price">$15.00</p>
                        <del>$49.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={sports2}
                        alt="trekking & running shoes - black"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Trekking &amp; Running Shoes - black
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Sports
                      </a>
                      <div className="price-box">
                        <p className="price">$36.00</p>
                        <del>$78.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={partywear1}
                        alt="womens party wear shoes"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Womens Party Wear Shoes
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Party wear
                      </a>
                      <div className="price-box">
                        <p className="price">$42.00</p>
                        <del>$94.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={sports3}
                        alt="sports claw women's shoes"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Sports Claw Women's Shoes
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Sports
                      </a>
                      <div className="price-box">
                        <p className="price">$54.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={sports6}
                        alt="air tekking shoes - white"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Air Trekking Shoes - white
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Sports
                      </a>
                      <div className="price-box">
                        <p className="price">$52.00</p>
                        <del>$55.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shoe3}
                        alt="Boot With Suede Detail"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Boot With Suede Detail
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        boots
                      </a>
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shoe1}
                        alt="men's leather formal wear shoes"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Men's Leather Formal Wear shoes
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        formal
                      </a>
                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shoe2}
                        alt="casual men's brown shoes"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Casual Men's Brown shoes
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Casual
                      </a>
                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$55.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-showcase">
              <h2 className="title">Top Rated</h2>
              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={watch3}
                        alt="pocket watch leather pouch"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Pocket Watch Leather Pouch
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Watches
                      </a>
                      <div className="price-box">
                        <p className="price">$34.00</p>
                        <del>$50.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jewellery3}
                        alt="silver deer heart necklace"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Silver Deer Heart Necklace
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Jewellery
                      </a>
                      <div className="price-box">
                        <p className="price">$30.00</p>
                        <del>$84.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={perfume}
                        alt="titan 100 ml womens perfume"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Titan 100 Ml Womens Perfume
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Perfume
                      </a>
                      <div className="price-box">
                        <p className="price">$10.00</p>
                        <del>$42.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={belt}
                        alt="men's leather reversible belt"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Men's Leather Reversible Belt
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Belt
                      </a>
                      <div className="price-box">
                        <p className="price">$10.00</p>
                        <del>$24.00</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jewellery2}
                        alt="platinum zircon classic ring"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          platinum Zircon Classic Ring
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        jewellery
                      </a>
                      <div className="price-box">
                        <p className="price">$62.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={watch1}
                        alt="smart watche vital plus"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Smart watche Vital Plus
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        Watches
                      </a>
                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={shampoo}
                        alt="shampoo conditioner packs"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          shampoo conditioner packs
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        cosmetics
                      </a>
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="/Singleproduct" className="showcase-img-box">
                      <img
                        src={jewellery1}
                        alt="rose gold peacock earrings"
                        className="showcase-img"
                        width={70}
                      />
                    </a>
                    <div className="showcase-content">
                      <a href="/Singleproduct">
                        <h4 className="showcase-title">
                          Rose Gold Peacock Earrings
                        </h4>
                      </a>
                      <a href="/Singleproduct" className="showcase-category">
                        jewellery
                      </a>
                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*
      - PRODUCT FEATURED
    */}
          <div className="product-featured">
            <h2 className="title">Deal of the day</h2>
            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img
                      src={shampoo}
                      alt="shampoo, conditioner & facewash packs"
                      className="showcase-img"
                    />
                  </div>
                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <ion-icon name="star-outline" />
                    </div>
                    <a onClick={()=> gottoProduct()}>
                      <h3 className="showcase-title">
                        shampoo, conditioner &amp; facewash packs
                      </h3>
                    </a>
                    <p className="showcase-desc">
                      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                      dolor sit amet consectetur Lorem ipsum dolor
                    </p>
                    <div className="price-box">
                      <p className="price">$150.00</p>
                      <del>$200.00</del>
                    </div>
                    <button className="add-cart-btn">add to cart</button>
                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>
                        <p>
                          available: <b>40</b>
                        </p>
                      </div>
                      <div className="showcase-status-bar" />
                    </div>
                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">360</p>
                          <p className="display-text">Days</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img
                      src={jewellery1}
                      alt="Rose Gold diamonds Earring"
                      className="showcase-img"
                    />
                  </div>
                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star-outline" />
                      <ion-icon name="star-outline" />
                    </div>
                    <h3 className="showcase-title">
                      <a href="/Singleproduct" className="showcase-title">
                        Rose Gold diamonds Earring
                      </a>
                    </h3>
                    <p className="showcase-desc">
                      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                      dolor sit amet consectetur Lorem ipsum dolor
                    </p>
                    <div className="price-box">
                      <p className="price">$1990.00</p>
                      <del>$2000.00</del>
                    </div>
                    <button className="add-cart-btn">add to cart</button>
                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          {" "}
                          already sold: <b>15</b>{" "}
                        </p>
                        <p>
                          {" "}
                          available: <b>40</b>{" "}
                        </p>
                      </div>
                      <div className="showcase-status-bar" />
                    </div>
                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">360</p>
                          <p className="display-text">Days</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*
      - PRODUCT GRID
    */}
    
    

          <div className="product-main">
            <h2 className="title">New Products</h2>
            <div className="product-grid">
              
                <Showcase2 products={products}/>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
- TESTIMONIALS, CTA & SERVICE
    */}
    <div>
      <div className="container">
        <div className="testimonials-box">
          {/*
      - TESTIMONIALS
    */}
          <div className="testimonial">
            <h2 className="title">testimonial</h2>
            <div className="testimonial-card">
              <img
                src={testimonial1}
                alt="alan doe"
                className="testimonial-banner"
                width={80}
                height={80}
              />
              <p className="testimonial-name">Alan Doe</p>
              <p className="testimonial-title">CEO &amp; Founder Invision</p>
              <img
                src={quotesicon}
                alt="quotation"
                className="quotation-img"
                width={26}
              />
              <p className="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>
          {/*
      - CTA
    */}
          <div className="cta-container">
            <img
              src={ctabanner}
              alt="summer collection"
              className="cta-banner"
            />
            <a href="index.html#" className="cta-content">
              <p className="discount">25% Discount</p>
              <h2 className="cta-title">Summer collection</h2>
              <p className="cta-text">Starting @ $10</p>
              <button className="cta-btn">Shop now</button>
            </a>
          </div>
          {/*
      - SERVICE
    */}
          <div className="service">
            <h2 className="title">Our Services</h2>
            <div className="service-container">
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="boat-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Worldwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="rocket-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Next Day delivery</h3>
                  <p className="service-desc">UK Orders Only</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="call-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">Hours: 8AM - 11PM</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy &amp; Free Return</p>
                </div>
              </a>
              <a href="index.html#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="ticket-outline" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
- BLOG
    */}
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          <div className="blog-card">
            <a href="index.html#">
              <img
                src={blog1}
                alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                width={300}
                className="blog-banner"
              />
            </a>
            <div className="blog-content">
              <a href="index.html#" className="blog-category">
                Fashion
              </a>
              <a href="index.html#">
                <h3 className="blog-title">
                  Clothes Retail KPIs 2021 Guide for Clothes Executives.
                </h3>
              </a>
              <p className="blog-meta">
                By <cite>Mr Admin</cite> /{" "}
                <time dateTime="2022-04-06">Apr 06, 2022</time>
              </p>
            </div>
          </div>
          <div className="blog-card">
            <a href="index.html#">
              <img
                src={blog2}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width={300}
              />
            </a>
            <div className="blog-content">
              <a href="index.html#" className="blog-category">
                Clothes
              </a>
              <h3>
                <a href="index.html#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>
              <p className="blog-meta">
                By <cite>Mr Robin</cite> /{" "}
                <time dateTime="2022-01-18">Jan 18, 2022</time>
              </p>
            </div>
          </div>
          <div className="blog-card">
            <a href="index.html#">
              <img
                src={blog3}
                alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                className="blog-banner"
                width={300}
              />
            </a>
            <div className="blog-content">
              <a href="index.html#" className="blog-category">
                Shoes
              </a>
              <h3>
                <a href="index.html#" className="blog-title">
                  EBT vendors: Claim Your Share of SNAP Online Revenue.
                </a>
              </h3>
              <p className="blog-meta">
                By <cite>Mr Selsa</cite> /{" "}
                <time dateTime="2022-02-10">Feb 10, 2022</time>
              </p>
            </div>
          </div>
          <div className="blog-card">
            <a href="index.html#">
              <img
                src={blog4}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width={300}
              />
            </a>
            <div className="blog-content">
              <a href="index.html#" className="blog-category">
                Electronics
              </a>
              <h3>
                <a href="index.html#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>
              <p className="blog-meta">
                By <cite>Mr Pawar</cite> /{" "}
                <time dateTime="2022-03-15">Mar 15, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
</>

  );
}


export default Home;
