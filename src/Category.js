import React from 'react'

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
                <a href="#">Casuals</a>
              </li>
            </ul>
            <div className="product-grid">
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/jacket-3.jpg"
                    alt="Mens Winter Leathers Jackets"
                    width={300}
                    className="product-img default"
                  />
                  <img
                    src="assets/images/products/jacket-4.jpg"
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
                  <a href="index.html#" className="showcase-category">
                    jacket
                  </a>
                  <a href="index.html#">
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
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/shirt-1.jpg"
                    alt="Pure Garment Dyed Cotton Shirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/shirt-2.jpg"
                    alt="Pure Garment Dyed Cotton Shirt"
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
                  <a href="index.html#" className="showcase-category">
                    shirt
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Pure Garment Dyed Cotton Shirt
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
                    <p className="price">$45.00</p>
                    <del>$56.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/jacket-5.jpg"
                    alt="MEN Yarn Fleece Full-Zip Jacket"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/jacket-6.jpg"
                    alt="MEN Yarn Fleece Full-Zip Jacket"
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
                  <a href="index.html#" className="showcase-category">
                    Jacket
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      MEN Yarn Fleece Full-Zip Jacket
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
                    <p className="price">$58.00</p>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/clothes-3.jpg"
                    alt="Black Floral Wrap Midi Skirt"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/clothes-4.jpg"
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
                    src="assets/images/products/shoe-2.jpg"
                    alt="Casual Men's Brown shoes"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/shoe-2_1.jpg"
                    alt="Casual Men's Brown shoes"
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
                  <a href="index.html#" className="showcase-category">
                    casual
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Casual Men's Brown shoes
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
                    <p className="price">$99.00</p>
                    <del>$105.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/watch-3.jpg"
                    alt="Pocket Watch Leather Pouch"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/watch-4.jpg"
                    alt="Pocket Watch Leather Pouch"
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
                  <a href="index.html#" className="showcase-category">
                    watches
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Pocket Watch Leather Pouch
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
                    <p className="price">$150.00</p>
                    <del>$170.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/watch-1.jpg"
                    alt="Smart watche Vital Plus"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/watch-2.jpg"
                    alt="Smart watche Vital Plus"
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
                  <a href="index.html#" className="showcase-category">
                    watches
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Smart watche Vital Plus
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
                    <p className="price">$100.00</p>
                    <del>$120.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/party-wear-1.jpg"
                    alt="Womens Party Wear Shoes"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/party-wear-2.jpg"
                    alt="Womens Party Wear Shoes"
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
                  <a href="index.html#" className="showcase-category">
                    party wear
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Womens Party Wear Shoes
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
                    <p className="price">$25.00</p>
                    <del>$30.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/jacket-1.jpg"
                    alt="Mens Winter Leathers Jackets"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/jacket-2.jpg"
                    alt="Mens Winter Leathers Jackets"
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
                  <a href="index.html#" className="showcase-category">
                    jacket
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Mens Winter Leathers Jackets
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
                    <p className="price">$32.00</p>
                    <del>$45.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/sports-2.jpg"
                    alt="Trekking & Running Shoes - black"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/sports-4.jpg"
                    alt="Trekking & Running Shoes - black"
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
                  <a href="index.html#" className="showcase-category">
                    sports
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Trekking &amp; Running Shoes - black
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
                    <p className="price">$58.00</p>
                    <del>$64.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/shoe-1.jpg"
                    alt="Men's Leather Formal Wear shoes"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/shoe-1_1.jpg"
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
                  <a href="index.html#" className="showcase-category">
                    formal
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
                      Men's Leather Formal Wear shoes
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
                    <p className="price">$50.00</p>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src="assets/images/products/shorts-1.jpg"
                    alt="Better Basics French Terry Sweatshorts"
                    className="product-img default"
                    width={300}
                  />
                  <img
                    src="assets/images/products/shorts-2.jpg"
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
                  <a href="index.html#" className="showcase-category">
                    shorts
                  </a>
                  <h3>
                    <a href="index.html#" className="showcase-title">
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