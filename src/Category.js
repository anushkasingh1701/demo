import React from 'react'
import clothes3 from './assets/images/products/clothes-3.jpg';
import clothes4 from './assets/images/products/clothes-4.jpg'

const Category = () => {
  return (
    <>
    {/*
      - HEADER
    */}
   
    {/* end of header */}
    {/* Products */}
    <div className="product-container">
      <div className="container">
        {/*
    - SIDEBAR
  */}
        <div className="sidebar  has-scrollbar" data-mobile-menu="">
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Sort</h2>
              <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="sidebar-menu-category-list">
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Popularity</p>
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
                      <data value={300} className="stock" title="Available Stock">
                        300
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">shorts &amp; jeans</p>
                      <data value={60} className="stock" title="Available Stock">
                        60
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data value={50} className="stock" title="Available Stock">
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data value={87} className="stock" title="Available Stock">
                        87
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Newness</p>
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
                      <data value={45} className="stock" title="Available Stock">
                        45
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Formal</p>
                      <data value={75} className="stock" title="Available Stock">
                        75
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Casual</p>
                      <data value={35} className="stock" title="Available Stock">
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Safety Shoes</p>
                      <data value={26} className="stock" title="Available Stock">
                        26
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Price:High to Low</p>
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
                      <data value={46} className="stock" title="Available Stock">
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Couple Rings</p>
                      <data value={73} className="stock" title="Available Stock">
                        73
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Necklace</p>
                      <data value={61} className="stock" title="Available Stock">
                        61
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    <p className="menu-title">Price:Low to High</p>
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
                      <data value={12} className="stock" title="Available Stock">
                        12 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Deodorant</p>
                      <data value={60} className="stock" title="Available Stock">
                        60 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data value={50} className="stock" title="Available Stock">
                        50 pcs
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">dress &amp; frock</p>
                      <data value={87} className="stock" title="Available Stock">
                        87 pcs
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data value={68} className="stock" title="Available Stock">
                        68
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunscreen</p>
                      <data value={46} className="stock" title="Available Stock">
                        46
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Body Wash</p>
                      <data value={79} className="stock" title="Available Stock">
                        79
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Makeup Kit</p>
                      <data value={23} className="stock" title="Available Stock">
                        23
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Sunglasses</p>
                      <data value={50} className="stock" title="Available Stock">
                        50
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Lenses</p>
                      <data value={48} className="stock" title="Available Stock">
                        48
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn="">
                  <div className="menu-title-flex">
                    {/* image */}
                    <p className="menu-title" />
                  </div>
                  {/* <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div> */}
                </button>
                <ul className="sidebar-submenu-category-list" data-accordion="">
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Shopping Bag</p>
                      <data value={62} className="stock" title="Available Stock">
                        62
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Gym Backpack</p>
                      <data value={35} className="stock" title="Available Stock">
                        35
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Purse</p>
                      <data value={80} className="stock" title="Available Stock">
                        80
                      </data>
                    </a>
                  </li>
                  <li className="sidebar-submenu-category">
                    <a href="index.html#" className="sidebar-submenu-title">
                      <p className="product-name">Wallet</p>
                      <data value={75} className="stock" title="Available Stock">
                        75
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/*silver line */}
            <div className="silver-line" />
            {/* for sizes */}
            <div className="sidebar-top">
              <h2 className="sidebar-title">Size</h2>
              <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul />
          </div>
        </div>
        {/* end of sidebar */}
        {/* product-box */}
        <div className="product-box">
          {/*
      - PRODUCT GRID
    */}
          <div className="product-main">
            <ul className="collapsed">
              <li>
                <a href="#">Home</a>
              </li>
              {/*
               */}
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Womens</a>
              </li>
              <li>
                <a href="#">Casuals</a>
              </li>
            </ul>
            <div className="product-grid">
            <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
             <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={clothes3}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src={clothes4}
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img hover"
                    width={300}
                  />
                  <p className="showcase-badge angle pink">new</p>
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
                  <a href="index.html#" className="showcase-category">
                    skirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Black Floral Wrap Midi Skirt
                    </a>
                  </h3>
                  <div className="showcase-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <div className="price-box">
                    <p className="price">$25.00</p>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
             

            </div>
          </div>
        </div>
        {/* end of product-box */}
      </div>
    </div>
    {/* end of products */}
  </>
  
  );
}
export default Category;