import { createGlobalStyle } from "styled-components";
import React from "react";

export const GlobalStyle = createGlobalStyle`

:root {

  /**
   * colors
   */

  --spanish-gray: hsl(0, 0%, 60%);
  --sonic-silver: hsl(0, 0%, 47%);
  --eerie-black: hsl(0, 0%, 13%);
  --salmon-pink: hsl(353, 100%, 78%);
  --sandy-brown: hsl(29, 90%, 65%);
  --bittersweet: hsl(0, 100%, 70%);
  --ocean-green: hsl(152, 51%, 52%);
  --davys-gray: hsl(0, 0%, 33%);
  --cultured: hsl(0, 0%, 93%);
  --white: hsl(0, 100%, 100%);
  --onyx: hsl(0, 0%, 27%);

  /**
   * typography
   */

  --fs-1: 1.563rem;
  --fs-2: 1.375rem;
  --fs-3: 1.25rem;
  --fs-4: 1.125rem;
  --fs-5: 1rem;
  --fs-6: 0.938rem;
  --fs-7: 0.875rem;
  --fs-8: 0.813rem;
  --fs-9: 0.75rem;
  --fs-10: 0.688rem;
  --fs-11: 0.625rem;

  --weight-300: 300;
  --weight-400: 400;
  --weight-500: 500;
  --weight-600: 600;
  --weight-700: 700;

  /**
   * border-radius
   */

  --border-radius-md: 10px;
  --border-radius-sm: 5px;

  /**
   * transition 
   */

  --transition-timing: 0.2s ease;

}





/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*, *::before, *::after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a { text-decoration: none; }

li { list-style: none; }

button {
  background: none;
  font: inherit;
  border: none;
  cursor: pointer;
}

img, ion-icon, button, a { display: block; }

span { display: inline-block; }

html {
  font-family: "Poppins", sans-serif;
  -ms-scroll-chaining: none;
      overscroll-behavior: contain;
}

input {
  display: block;
  width: 100%;
  font: inherit;
}

input::-webkit-input-placeholder { font: inherit; }

input::-moz-placeholder { font: inherit; }

input:-ms-input-placeholder { font: inherit; }

input::-ms-input-placeholder { font: inherit; }

input::placeholder { font: inherit; }

body { background: var(--white); }

/**
 * scrollbar style
 */

body::-webkit-scrollbar { width: 15px; }

body::-webkit-scrollbar-track {
  background: var(--white);
  border-left: 1px solid var(--cultured);
}

body::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 80%);
  border: 3px solid var(--white);
  -webkit-border-radius: 10px;
          border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 70%); }





/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.container { padding: 0 15px; }

.has-scrollbar { padding-bottom: 5px; }

.has-scrollbar::-webkit-scrollbar {
  width: 12px; /* for vertical scroll */
  height: 12px; /* for horizontal scroll */
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
  border: 3px solid var(--white);
  -webkit-border-radius: 20px;
          border-radius: 20px;
}

.has-scrollbar:hover::-webkit-scrollbar-thumb { background: hsl(0, 0%, 90%); }

.has-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(0, 0%, 80%); }

.title {
  color: var(--eerie-black);
  font-size: var(--fs-5);
  font-weight: var(--weight-600);
  letter-spacing: 0.4px;
  text-transform: capitalize;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--cultured);
  margin-bottom: 30px;
}





/*-----------------------------------*\
  #MAIN
\*-----------------------------------*/

/**
 * overlay 
 */

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  opacity: 0;
  pointer-events: none;
  z-index: 15;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}



/**
 * MODAL 
 */

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 10;
  -webkit-animation: popup 1s ease-in-out 5s forwards;
          animation: popup 1s ease-in-out 5s forwards;
}

@-webkit-keyframes popup {

  0% {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  100% {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

}

@keyframes popup {

  0% {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  100% {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

}

.modal.closed { display: none; }

.modal-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.newsletter-img { display: none; }

.modal-content {
  position: relative;
  max-width: 350px;
  margin: 20px;
  background: var(--white);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: hidden;
  z-index: 2;
  -webkit-animation: scaleUp 0.5s ease-in-out 5s forwards;
          animation: scaleUp 0.5s ease-in-out 5s forwards;
}

@-webkit-keyframes scaleUp {

  0% { -webkit-transform: scale(0.9); transform: scale(0.9); }
  100% { -webkit-transform: scale(1); transform: scale(1); }

}

@keyframes scaleUp {

  0% { -webkit-transform: scale(0.9); transform: scale(0.9); }
  100% { -webkit-transform: scale(1); transform: scale(1); }

}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--salmon-pink);
  color: var(--white);
  font-size: 16px;
  padding: 5px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
}

.modal-close-btn:hover { opacity: 0.9; }

.modal-close-btn ion-icon { --ionicon-stroke-width: 70px; }

.newsletter {
  padding: 50px 30px;
  text-align: center;
}

.newsletter-header { margin-bottom: 20px; }

.newsletter-title {
  color: var(--onyx);
  font-size: var(--fs-2);
  font-weight: var(--weight-600);
  margin-bottom: 10px;
}

.newsletter-desc {
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  line-height: 1.6;
}

.email-field {
  font-size: var(--fs-7);
  padding: 8px 16px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  border: 1px solid var(--cultured);
  margin-bottom: 16px;
}

.btn-newsletter {
  background: var(--eerie-black);
  color: var(--white);
  font-size: var(--fs-7);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  padding: 10px 15px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  margin: auto;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.btn-newsletter:hover { background: var(--salmon-pink); }





/**
 * NOTIFICATION TOAST 
 */

.notification-toast {
  position: fixed;
  bottom: 80px;
  left: 20px;
  right: 20px;
  background: var(--white);
  max-width: 300px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  gap: 15px;
  padding: 15px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  -webkit-box-shadow: 0 5px 20px hsla(0, 0%, 0%, 0.15);
          box-shadow: 0 5px 20px hsla(0, 0%, 0%, 0.15);
  -webkit-transform: translateX(-webkit-calc(-100% - 40px));
      -ms-transform: translateX(calc(-100% - 40px));
          transform: translateX(calc(-100% - 40px));
  -webkit-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  z-index: 5;
  -webkit-animation: slideInOut 10s ease-in-out infinite;
          animation: slideInOut 10s ease-in-out infinite;
}

@-webkit-keyframes slideInOut {

  0%,
  45%,
  100% {
    -webkit-transform: translateX(-webkit-calc(-100% - 40px));
            transform: translateX(calc(-100% - 40px));
    opacity: 0;
    visibility: hidden;
  }

  50%,
  95% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

}

@keyframes slideInOut {

  0%,
  45%,
  100% {
    -webkit-transform: translateX(-webkit-calc(-100% - 40px));
            transform: translateX(calc(-100% - 40px));
    opacity: 0;
    visibility: hidden;
  }

  50%,
  95% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

}

.notification-toast.closed { display: none; }

.toast-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--sonic-silver);
}

.toast-close-btn ion-icon { --ionicon-stroke-width: 50px; }

.toast-banner {
  width: 70px;
  height: 70px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
}

.toast-banner img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: center;
     object-position: center;
}

.toast-detail {
  width: -webkit-calc(100% - 85px);
  width: calc(100% - 85px);
  padding-right: 10px;
}

.toast-message {
  font-size: var(--fs-10);
  color: var(--sonic-silver);
  margin-bottom: 8px;
}

.toast-title {
  font-size: var(--fs-7);
  font-weight: var(--weight-500);
  color: var(--onyx);
}

.toast-meta {
  font-size: var(--fs-10);
  color: var(--sonic-silver);
}





/*-----------------------------------*\
  #HEADER
\*-----------------------------------*/

.header-top,
.header-user-actions,
.desktop-navigation-menu { display: none; }

.header-main {
  padding: 20px 0;
  border-bottom: 1px solid var(--cultured);
}

.header-logo { margin-bottom: 20px; }

.header-logo img { margin: auto; }

.header-search-container { position: relative; }

.header-search-container .search-field {
  font-size: var(--fs-7);
  color: var(--onyx);
  padding: 10px 15px;
  padding-right: 50px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

.search-field::-webkit-search-cancel-button { display: none; }

.search-btn {
  background: var(--white);
  position: absolute;
  top: 50%;
  right: 2px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  color: var(--onyx);
  font-size: 18px;
  padding: 8px 15px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  -webkit-transition: color var(--transition-timing);
  -o-transition: color var(--transition-timing);
  transition: color var(--transition-timing);
}

.search-btn:hover { color: var(--salmon-pink); }

.mobile-bottom-navigation {
  background: var(--white);
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 5px 0;
  -webkit-box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
          box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  z-index: 5;
}

.mobile-bottom-navigation .action-btn {
  position: relative;
  font-size: 26px;
  color: var(--eerie-black);
  padding: 10px;
}

.mobile-bottom-navigation .count {
  background: var(--bittersweet);
  color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  font-weight: var(--weight-500);
  line-height: 1;
  padding: 2px 4px;
  -webkit-border-radius: 20px;
          border-radius: 20px;
}

.mobile-navigation-menu {
  background: var(--white);
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  padding: 20px;
  -webkit-box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
          box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
  overflow-y: scroll;
  -ms-scroll-chaining: none;
      overscroll-behavior: contain;
  visibility: hidden;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  z-index: 20;
}

.mobile-navigation-menu.active {
  left: 0;
  visibility: visible;
}

.menu-top {
  padding-bottom: 15px;
  margin-bottom: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 2px solid var(--cultured);
}

.menu-top .menu-title {
  color: var(--salmon-pink);
  font-size: var(--fs-4);
  font-weight: var(--weight-600);
}

.menu-close-btn {
  color: var(--eerie-black);
  font-size: 22px;
}

.menu-close-btn ion-icon { --ionicon-stroke-width: 50px; }

.mobile-menu-category-list { margin-bottom: 30px; }

.menu-category .accordion-menu {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.mobile-menu-category-list .menu-category { border-bottom: 1px solid var(--cultured); }

.mobile-menu-category-list .menu-title {
  color: var(--onyx);
  font-size: var(--fs-6);
  font-weight: var(--weight-500);
  padding: 12px 0;
}

.accordion-menu > div { font-size: 14px; }

.accordion-menu ion-icon {
  color: var(--onyx);
  --ionicon-stroke-width: 90px;
}

.accordion-menu.active .add-icon,
.accordion-menu .remove-icon { display: none; }

.accordion-menu .add-icon,
.accordion-menu.active .remove-icon { display: block; }

.menu-category .submenu-category-list { margin-left: 10px; }

.submenu-title {
  padding: 6px 0;
  font-size: var(--fs-6);
  color: var(--sonic-silver);
  font-weight: var(--weight-300);
}

.submenu-title:hover { color: var(--davys-gray); }

.submenu-category-list {
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  -webkit-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

.submenu-category-list.active {
  max-height: 148px;
  visibility: visible;
}

.menu-bottom .menu-category-list { margin-bottom: 20px; }

.menu-bottom .menu-category { border-bottom: none; }

.menu-bottom .menu-title {
  font-size: var(--fs-6);
  font-weight: var(--weight-500);
  color: var(--eerie-black);
  padding: 12px 0;
}

.accordion-menu.active .caret-back { -webkit-transform: rotate(-0.25turn); -ms-transform: rotate(-0.25turn); transform: rotate(-0.25turn); }

.menu-bottom .submenu-category-list {
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  padding: 0 15px;
  margin-left: 0;
  -webkit-box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
          box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.05);
}

.menu-bottom .submenu-category:not(:last-child) { border-bottom: 1px solid var(--cultured); }

.menu-social-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
}

.menu-social-container .social-link {
  background: var(--cultured);
  color: var(--eerie-black);
  font-size: 20px;
  padding: 10px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

/* ------------------------------*\
Breadcrumb
\*--------------------------------- */

.collapsed ul {
  list-style-type: none;
  margin: 0;
  padding: 2rem;
  color: #333;
}

.collapsed li {
  display: inline-block;
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
  margin: 0;
}
/* responsivenes  */
@media  screen and (width < 350px) {
  .collapsed li{
    padding-top: 0.5rem;
    padding-bottom:0.5rem;
  }
  
}
.collapsed  li:after {
    content: '>';
    position: absolute;
    display: inline-block;
    right: 0;
    width: 2em;
    text-align: center;
    color: var(--salmon-pink);
  }
.collapsed li:last-child {
  font-weight: bold;
  color: var(--salmon-pink);
}
  li:last-child:after {
    content: '';
    
  }

.collapsed a {
  text-decoration: none;
  display: inline-block;
  color: #333;
  white-space: nowrap;
}

 .collapsed a:hover {
    text-decoration: underline;
  }



/*-----------------------------------*\
  #BANNER
\*-----------------------------------*/

.banner { margin: 30px 0; }

.slider-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: auto hidden;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.slider-item {
  position: relative;
  min-width: 100%;
  max-height: 450px;
  aspect-ratio: 1 / 1;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: hidden;
  scroll-snap-align: start;
}

.slider-item .banner-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: right;
     object-position: right;
}

.banner-content {
  background: hsla(0, 0%, 100%, 0.8);
  position: absolute;
  bottom: 25px;
  left: 25px;
  right: 25px;
  padding: 20px 25px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

.banner-subtitle {
  color: var(--salmon-pink);
  font-size: var(--fs-7);
  font-weight: var(--weight-500);
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.banner-title {
  color: var(--eerie-black);
  font-size: var(--fs-1);
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
}

.banner-text { display: none; }

.banner-btn {
  background: var(--salmon-pink);
  color: var(--white);
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  font-size: var(--fs-11);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  padding: 4px 10px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.banner-btn:hover { background: var(--eerie-black); }





/*-----------------------------------*\
  #CATEGORY
\*-----------------------------------*/

.category { margin-bottom: 30px; }

.category-item-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  overflow: auto hidden;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
}

.category-item {
  min-width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  scroll-snap-align: start;
}

.category-img-box {
  background: var(--cultured);
  border: 1px solid hsl(0, 0%, 80%);
  padding: 10px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
}

.category-content-box { width: 100%; }

.category-content-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 10px;
}

.category-item-title {
  color: var(--eerie-black);
  font-size: var(--fs-9);
  font-weight: var(--weight-600);
  text-transform: uppercase;
}

.category-item-amount {
  color: var(--sonic-silver);
  font-size: var(--fs-11);
}

.category-btn {
  color: var(--salmon-pink);
  font-size: var(--fs-9);
  font-weight: var(--weight-500);
  text-transform: capitalize;
}





/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/

.sidebar {
  background: var(--white);
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  padding: 30px;
  overflow-y: scroll;
  -ms-scroll-chaining: none;
      overscroll-behavior: contain;
  visibility: hidden;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  z-index: 20;
}

.sidebar.active {
  left: 0;
  visibility: visible;
}

.sidebar-category {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--cultured);
}

.sidebar-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 10px;
}

.sidebar-title {
  color: var(--onyx);
  font-size: var(--fs-5);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: var(--weight-600);
}

.sidebar-close-btn {
  color: var(--eerie-black);
  font-size: 22px;
  font-weight: var(--weight-600);
}

.sidebar-close-btn ion-icon { --ionicon-stroke-width: 50px; }

.sidebar-accordion-menu {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 7px 0;
}

.sidebar .menu-title-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
}

.sidebar .menu-title {
  font-size: var(--fs-5);
  color: var(--sonic-silver);
  font-weight: var(--weight-500);
}

.sidebar-accordion-menu ion-icon {
  color: var(--sonic-silver);
  font-size: 14px;
  --ionicon-stroke-width: 70px;
}

.sidebar-submenu-category-list {
  border-top: 1px solid var(--cultured);
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  -webkit-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

.sidebar-submenu-category-list.active {
  padding: 13px 0 8px;
  max-height: 122px;
  visibility: visible;
}

.sidebar-submenu-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  padding: 2px 0;
}

.sidebar-submenu-title:hover { color: var(--eerie-black); }

.sidebar .product-name { text-transform: capitalize; }

.sidebar-accordion-menu.active .add-icon,
.sidebar-accordion-menu .remove-icon { display: none; }

.sidebar-accordion-menu .add-icon,
.sidebar-accordion-menu.active .remove-icon { display: block; }

.sidebar .showcase-heading {
  font-size: var(--fs-5);
  font-weight: var(--weight-600);
  color: var(--onyx);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 15px;
}

.sidebar .showcase {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
}

.sidebar .showcase:not(:last-child) { margin-bottom: 15px; }

.sidebar .showcase-img { -webkit-border-radius: var(--border-radius-sm); border-radius: var(--border-radius-sm); }

.sidebar .showcase-content { width: -webkit-calc(100% - 90px); width: calc(100% - 90px); }

.sidebar .showcase-title {
  color: var(--onyx);
  font-size: var(--fs-7);
  font-weight: var(--weight-400);
  text-transform: capitalize;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  letter-spacing: 0.5px;
}

.sidebar .showcase-rating {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  color: var(--sandy-brown);
  font-size: 13px;
  padding: 4px 0;
}

.sidebar .price-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
}

.sidebar .price-box del {
  color: var(--sonic-silver);
  font-size: 13px;
}

.sidebar .price-box .price {
  font-size: var(--fs-7);
  font-weight: var(--weight-600);
  color: var(--davys-gray);
}

.silver-line{
  width: 100%;
  border: var(--spanish-gray) 1px solid;
  margin-bottom: 1rem;
}




/*-----------------------------------*\
  #PRODUCT MINIMAL
\*-----------------------------------*/

.product-minimal { margin-bottom: 30px; }

.product-minimal .product-showcase { margin-bottom: 10px; }

.product-minimal .showcase-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
}

.product-minimal .showcase-container {
  min-width: 100%;
  padding: 0 5px;
  scroll-snap-align: start;
}

.product-minimal .showcase {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
  border: 1px solid var(--cultured);
  padding: 15px;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

.product-minimal .showcase:not(:last-child) { margin-bottom: 15px; }

.product-minimal .showcase-content { width: -webkit-calc(100% - 85px); width: calc(100% - 85px); }

.product-minimal .showcase-title {
  color: var(--eerie-black);
  font-size: var(--fs-7);
  font-weight: var(--weight-600);
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  margin-bottom: 2px;
}

.product-minimal .showcase-category {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: var(--davys-gray);
  font-size: var(--fs-8);
  text-transform: capitalize;
  margin-bottom: 3px;
}

.product-minimal .showcase-category:hover { color: var(--salmon-pink); }

.product-minimal .price-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
}

.product-minimal .price {
  font-size: var(--fs-7);
  font-weight: var(--weight-700);
  color: var(--salmon-pink);
}

.product-minimal .price-box del {
  font-size: var(--fs-9);
  color: var(--sonic-silver);
}





/*-----------------------------------*\
  #PRODUCT FEATURED
\*-----------------------------------*/

.product-featured { margin-bottom: 30px; }

.product-featured .showcase-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 20px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
}

.product-featured .showcase-container {
  min-width: 100%;
  padding: 30px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  scroll-snap-align: start;
}

.product-featured .showcase-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.product-featured .showcase-content { margin-top: 30px; }

.product-featured .showcase-rating {
  color: var(--sandy-brown);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 16px;
  margin-bottom: 15px;
}

.product-featured .showcase-title {
  font-size: var(--fs-7);
  color: var(--eerie-black);
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.product-featured .showcase-desc {
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  font-weight: var(--weight-300);
  margin-bottom: 10px;
}

.product-featured .price-box {
  font-size: var(--fs-3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.product-featured .price {
  color: var(--salmon-pink);
  font-weight: var(--weight-700);
}

.product-featured del {
  color: var(--sonic-silver);
  font-weight: var(--weight-300);
}

.product-featured .add-cart-btn {
  background: var(--salmon-pink);
  padding: 8px 15px;
  color: var(--white);
  font-weight: var(--fs-9);
  font-weight: var(--weight-700);
  text-transform: uppercase;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  margin-bottom: 15px;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.product-featured .add-cart-btn:hover {
  background: var(--eerie-black);
  color: var(--white);
}

.product-featured .showcase-status { margin-bottom: 15px; }

.product-featured .showcase-status .wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  color: var(--eerie-black);
  font-size: var(--fs-9);
  font-weight: var(--weight-400);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.product-featured .showcase-status-bar {
  background: var(--cultured);
  position: relative;
  height: 10px;
  -webkit-border-radius: 5px;
          border-radius: 5px;
}

.product-featured .showcase-status-bar::before {
  position: absolute;
  content: '';
  top: 3px;
  left: 3px;
  height: 4px;
  width: 40%;
  background: var(--salmon-pink);
  -webkit-border-radius: 4px;
          border-radius: 4px;
}

.product-featured .countdown-desc {
  color: var(--eerie-black);
  font-size: var(--fs-9);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.product-featured .countdown {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 5px;
}

.product-featured .countdown-content {
  padding: 5px;
  background: var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  text-align: center;
}

.product-featured .display-number {
  color: var(--eerie-black);
  font-size: var(--fs-5);
  font-weight: var(--weight-500);
  min-width: 40px;
}

.product-featured .display-text {
  color: var(--davys-gray);
  font-size: var(--fs-11);
}





/*-----------------------------------*\
  #PRODUCT GRID
\*-----------------------------------*/

.product-main { margin-bottom: 30px; }

.product-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  gap: 25px;
}

.product-grid .showcase {
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: hidden;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.product-grid .showcase:hover { -webkit-box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1); box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1); }

.product-grid .showcase-banner { position: relative; }

.product-grid .product-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.product-grid .product-img.default {
  position: relative;
  z-index: 1;
}

.product-grid .product-img.hover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}

.product-grid .showcase:hover .product-img.hover { opacity: 1; }

.product-grid .showcase:hover .product-img.default { opacity: 0; }

.product-grid .showcase:hover .product-img { -webkit-transform: scale(1.1); -ms-transform: scale(1.1); transform: scale(1.1); }

.product-grid .showcase-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--ocean-green);
  font-size: var(--fs-8);
  font-weight: var(--weight-500);
  color: var(--white);
  padding: 0 8px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  z-index: 3;
}

.product-grid .showcase-badge.angle {
  top: 8px;
  left: -29px;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
  text-transform: uppercase;
  font-size: 11px;
  padding: 5px 40px;
}

.product-grid .showcase-badge.black { background: var(--eerie-black); }

.product-grid .showcase-badge.pink { background: var(--salmon-pink); }

.product-grid .showcase-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  -webkit-transform: translateX(50px);
      -ms-transform: translateX(50px);
          transform: translateX(50px);
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
  z-index: 3;
}

.product-grid .showcase:hover .showcase-actions { -webkit-transform: translateX(0); -ms-transform: translateX(0); transform: translateX(0); }

.product-grid .btn-action {
  background: var(--white);
  color: var(--sonic-silver);
  margin-bottom: 5px;
  border: 1px solid var(--cultured);
  padding: 5px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.product-grid .btn-action:hover {
  background: var(--eerie-black);
  color: var(--white);
  border-color: var(--eerie-black);
}

.product-grid .showcase-content { padding: 15px 20px 0; }

.product-grid .showcase-category {
  color: var(--salmon-pink);
  font-size: var(--fs-9);
  font-weight: var(--weight-500);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.product-grid .showcase-title {
  color: var(--sonic-silver);
  font-size: var(--fs-8);
  font-weight: var(--weight-300);
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 10px;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.product-grid .showcase-title:hover { color: var(--eerie-black); }

.product-grid .showcase-rating {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: var(--sandy-brown);
  margin-bottom: 10px;
}

.product-grid .price-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  font-size: var(--fs-7);
  color: var(--eerie-black);
  margin-bottom: 10px;
}

.product-grid .price { font-weight: var(--weight-700); }

.product-grid del { color: var(--sonic-silver); }





/*-----------------------------------*\
  #TESTIMONIAL
\*-----------------------------------*/

.testimonials-box { margin-bottom: 50px; }

.testimonial-card {
  padding: 30px 20px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  text-align: center;
  margin-bottom: 25px;
}

.testimonial-banner {
  margin: auto;
  margin-bottom: 20px;
  -webkit-border-radius: 50%;
          border-radius: 50%;
}

.testimonial-name {
  font-weight: var(--weight-700);
  text-transform: uppercase;
  color: var(--sonic-silver);
  margin-bottom: 5px;
}

.testimonial-title {
  color: var(--onyx);
  font-size: var(--fs-7);
  margin-bottom: 15px;
}

.quotation-img {
  margin: auto;
  margin-bottom: 10px;
}

.testimonial-desc {
  max-width: 70%;
  margin: auto;
  color: var(--sonic-silver);
  font-size: var(--fs-7);
}





/*-----------------------------------*\
  #CTA
\*-----------------------------------*/

.cta-container {
  position: relative;
  aspect-ratio: 5 / 6;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: 25px;
}

.cta-banner {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.cta-content {
  background: hsla(0, 0%, 100%, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 15px 20px;
  text-align: center;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
}

.cta-content .discount {
  background: var(--eerie-black);
  color: var(--white);
  font-size: var(--fs-11);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  margin: auto;
  padding: 0 5px;
  -webkit-border-radius: var(--border-radius-sm);
          border-radius: var(--border-radius-sm);
  margin-bottom: 5px;
}

.cta-title {
  color: var(--onyx);
  font-size: var(--fs-5);
  text-transform: capitalize;
  margin-bottom: 5px;
}

.cta-text {
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  margin-bottom: 5px;
}

.cta-btn {
  font-size: var(--fs-9);
  color: var(--sonic-silver);
  text-transform: uppercase;
  font-weight: var(--weight-700);
  margin: auto;
}





/*-----------------------------------*\
  #SERVICE
\*-----------------------------------*/

.service-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  gap: 30px;
  padding: 30px 15px;
  border: 1px solid var(--cultured);
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
}

.service-item {
  min-width: 190px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
}

.service-icon {
  font-size: 35px;
  color: var(--salmon-pink);
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.service-icon ion-icon { --ionicon-stroke-width: 25px; }

.service-item:hover .service-icon { color: var(--eerie-black); }

.service-title {
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  font-weight: var(--weight-600);
  text-transform: capitalize;
  margin-bottom: 5px;
}

.service-desc {
  color: var(--sonic-silver);
  font-size: var(--fs-9);
}





/*-----------------------------------*\
  #BLOG
\*-----------------------------------*/

.blog { margin-bottom: 30px; }

.blog-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  gap: 15px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  -webkit-scroll-snap-type: inline mandatory;
      -ms-scroll-snap-type: inline mandatory;
          scroll-snap-type: inline mandatory;
}

.blog-card {
  min-width: 100%;
  scroll-snap-align: start;
}

.blog-banner {
  width: 100%;
  -webkit-border-radius: var(--border-radius-md);
          border-radius: var(--border-radius-md);
  margin-bottom: 20px;
}

.blog-category {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: var(--salmon-pink);
  font-size: var(--fs-8);
}

.blog-title {
  color: var(--eerie-black);
  font-size: var(--fs-5);
  font-weight: var(--weight-600);
  line-height: 1.4;
  margin-bottom: 5px;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.blog-title:hover { color: var(--salmon-pink); }

.blog-meta {
  color: var(--sonic-silver);
  font-size: var(--fs-7);
}

.blog-meta cite {
  font-style: normal;
  color: var(--davys-gray);
}





/*-----------------------------------*\
  #FOOTER
\*-----------------------------------*/

footer {
  background: var(--eerie-black);
  padding: 30px 0;
}

.footer-category {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--onyx);
}

.footer-category-title {
  color: var(--salmon-pink);
  font-size: var(--fs-6);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  margin-bottom: 15px;
}

.footer-category-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-column-gap: 20px;
     -moz-column-gap: 20px;
          column-gap: 20px;
  row-gap: 3px;
  margin-bottom: 15px;
}

.category-box-title {
  color: var(--spanish-gray);
  font-size: var(--fs-8);
  font-weight: var(--weight-600);
  text-transform: uppercase;
}

.footer-category-link {
  position: relative;
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  text-transform: capitalize;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.footer-category-link:hover { color: var(--spanish-gray); }

.footer-category-link:not(:last-child)::after {
  position: absolute;
  content: '';
  top: 3px;
  right: -10px;
  background: var(--sonic-silver);
  width: 1px;
  height: 15px;
}


/**
 * footer nav 
 */

.footer-nav {
  border-bottom: 1px solid var(--onyx);
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.footer-nav-list:not(:last-child) { margin-bottom: 20px; }

.footer-nav .nav-title {
  position: relative;
  color: var(--white);
  font-size: var(--fs-7);
  text-transform: uppercase;
  margin-bottom: 15px;
  padding-bottom: 5px;
}

.footer-nav .nav-title::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--salmon-pink);
  width: 60px;
  height: 1px;
}

.footer-nav-item { padding: 3px 0; }

.footer-nav-link,
.footer-nav-item .content {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: var(--sonic-silver);
  font-size: var(--fs-7);
  text-transform: capitalize;
  -webkit-transition: var(--transition-timing);
  -o-transition: var(--transition-timing);
  transition: var(--transition-timing);
}

.footer-nav-link:hover { color: var(--salmon-pink); }

.footer-nav-item.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  gap: 10px;
}

.footer-nav-item .content {
  font-style: normal;
  margin-bottom: 5px;
}

.footer-nav-item .icon-box {
  color: var(--sonic-silver);
  font-size: 25px;
}

.footer-nav-item .icon-box ion-icon { --ionicon-stroke-width: 30px; }

.footer-nav .social-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 10px;
}

.social-link .footer-nav-link { font-size: 25px; }

.footer-bottom {
  margin-bottom: 50px;
  text-align: center;
}

.payment-img {
  max-width: 335px;
  width: 100%;
  margin: auto;
  margin-bottom: 15px;
}

.copyright {
  color: var(--sonic-silver);
  font-size: var(--fs-8);
  font-weight: var(--weight-500);
  text-transform: capitalize;
  letter-spacing: 1.2px;
}

.copyright a {
  display: inline;
  color: inherit;
}





/*-----------------------------------*\
  #RESPONSIVE
\*-----------------------------------*/


/**
 * responsive larger than 480px screen
 */

@media (min-width: 480px) {

  /**
   * #CUSTOM PROPERTY
   */

  :root {

    /**
     * typography 
     */

    --fs-1: 1.875rem;

  }



  /**
   * #HEADER
   */

  .header-top {
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid var(--cultured);
  }

  .header-social-container,
  .header-top-actions { display: none; }

  .header-alert-news {
    color: var(--sonic-silver);
    font-size: var(--fs-9);
    text-transform: uppercase;
  }

  .header-alert-news b { font-weight: var(--weight-500); }

  .header-main { padding: 25px 0; }

  .mobile-bottom-navigation {
    -webkit-border-top-left-radius: var(--border-radius-md);
            border-top-left-radius: var(--border-radius-md);
    -webkit-border-top-right-radius: var(--border-radius-md);
            border-top-right-radius: var(--border-radius-md);
  }



  /**
   * #BANNER
   */

  .slider-item { aspect-ratio: 5 / 3; }

  .banner-content {
    top: 50%;
    right: auto;
    bottom: auto;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    max-width: 320px;
  }

  .banner-subtitle { --fs-7: 1rem; }

  .banner-text {
    display: block;
    color: var(--sonic-silver);
    font-size: var(--fs-7);
    font-weight: var(--weight-500);
    margin-bottom: 10px;
  }

  .banner-text b { font-size: var(--fs-2); }

  .banner-btn { padding: 7px 20px; }



  /**
   * #PRODUCT 
   */

  .product-grid {
    -ms-grid-columns: 1fr 30px 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }



  /**
   * #CTA
   */

  .cta-content { padding: 40px; }

  .cta-content .discount {
    --fs-11: 0.875rem;
    padding: 5px 10px;
  }

  .cta-title { --fs-5: 1.5rem; }

  .cta-text { --fs-7: 1rem; }

  .cta-btn { --fs-9: 1rem; }



  /**
   * #FOOTER
   */

  .copyright { --fs-8: 0.875rem; }

}





/**
 * responsive larger than 570px screen
 */

@media (min-width: 570px) {

  /**
   * #HEADER
   */

  .header-top .container,
  .header-main .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }

  .header-logo { margin-bottom: 0; }

  .header-top-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 10px;
  }

  .header-top-actions select {
    border: none;
    display: block;
    min-width: 80px;
    padding: 5px 0;
    font: inherit;
    color: var(--sonic-silver);
    font-size: var(--fs-8);
    text-transform: uppercase;
    cursor: pointer;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .header-top-actions select:hover { color: var(--eerie-black); }

  .header-search-container { min-width: 300px; }



  /**
   * #BANNER
   */

  .slider-item { aspect-ratio: 4 / 2; }

  .banner-content { background: none; }



  /**
   * #CATEGORY
   */

  .category-item-container { gap: 30px; }

  .category-item { min-width: -webkit-calc(50% - 15px); min-width: calc(50% - 15px); }



  /**
   * #PRODUCT
   */

  .product-minimal .showcase-container { min-width: 50%; }

  .product-featured .showcase-img {
    max-width: 450px;
    margin: auto;
  }

  .product-featured .countdown { gap: 20px; }



  /**
   * #CTA
   */

  .cta-container { aspect-ratio: 6 / 5; }



  /**
   * #BLOG
   */

  .blog-container { gap: 30px; }

  .blog-card { min-width: -webkit-calc(50% - 15px); min-width: calc(50% - 15px); }

}





/**
 * responsive larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * #CUSTOM PROPERTY
   */

  :root {

    /**
     * typography 
     */

    --fs-1: 2.375rem;

  }



  /**
   * #BASE 
   */

  html { font-size: 17px; }



  /**
   * #REUSED STYLE 
   */

  .container {
    max-width: 750px;
    margin: auto;
  }


  
  /**
   * #MODAL 
   */

  .modal-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    max-width: 750px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  .newsletter-img { display: block; }

  .newsletter { text-align: left; }



  /**
   * #HEADER 
   */

  .header-main .container { gap: 80px; }

  .header-search-container { -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; }



  /**
   * #BANNER 
   */

  .slider-item {
    aspect-ratio: auto;
    height: 350px;
  }

  .banner-content { max-width: 380px; }

  .banner-subtitle { --fs-7: 1.25rem; }

  .banner-text { --fs-7: 1.125rem; }

  .banner-text b { --fs-2: 1.875rem; }

  .banner-btn { --fs-11: 0.75rem; }



  /**
   * #CATEGORY 
   */

  .category-img-box { padding: 20px; }



  /**
   * #PRODUCT 
   */

  .product-minimal {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    gap: 20px;
  }

  .product-minimal .product-showcase {
    min-width: -webkit-calc(50% - 10px);
    min-width: calc(50% - 10px);
    width: -webkit-calc(50% - 10px);
    width: calc(50% - 10px);
  }

  .product-minimal .showcase-container { min-width: 100%; }
  
  .product-featured .showcase {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 20px;
  }

  .product-featured .showcase-img { max-width: -webkit-fit-content; max-width: -moz-fit-content; max-width: fit-content; }

  .product-featured .showcase-content {
    margin-top: 0;
    min-width: -webkit-calc(100% - 345px);
    min-width: calc(100% - 345px);
  }



  /**
   * #FOOTER 
   */

  .footer-nav .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    row-gap: 50px;
    -webkit-column-gap: 20px;
       -moz-column-gap: 20px;
            column-gap: 20px;
  }

  .footer-nav-list {
    min-width: -webkit-calc(33.33% - 15px);
    min-width: calc(33.33% - 15px);
    width: -webkit-calc(33.33% - 15px);
    width: calc(33.33% - 15px);
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
  }

  .footer-nav-list:not(:last-child) { margin-bottom: 0; }

}





/**
 * responsive larger than 1024px screen
 */

@media (min-width: 1024px) {

  /**
   * #CUSTOM PROPERTY
   */

  :root {

    /**
     * typography 
     */

    --fs-1: 2.625rem;
    --fs-2: 1.125rem;

  }



  /**
   * #REUSED STYLE 
   */

  .container { max-width: 980px; }



  /**
   * #NOTIFICATION TOAST 
   */

  .notification-toast { bottom: 30px; }



  /**
   * #HEADER 
   */

  .header-social-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 5px;
  }

  .header-social-container .social-link {
    padding: 5px;
    background: hsl(0, 0%, 95%);
    -webkit-border-radius: var(--border-radius-sm);
            border-radius: var(--border-radius-sm);
    color: var(--sonic-silver);
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .header-social-container .social-link:hover {
    background: var(--salmon-pink);
    color: var(--white);
  }

  .header-user-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 15px;
  }

  .header-user-actions .action-btn {
    position: relative;
    font-size: 35px;
    color: var(--onyx);
    padding: 5px;
  }

  .header-user-actions .count {
    position: absolute;
    top: -2px;
    right: -3px;
    background: var(--bittersweet);
    color: var(--white);
    font-size: 12px;
    font-weight: var(--weight-500);
    line-height: 1;
    padding: 2px 4px;
    -webkit-border-radius: 20px;
            border-radius: 20px;
  }

  .desktop-navigation-menu { display: block; }

  .desktop-menu-category-list {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 30px;
  }

  .desktop-menu-category-list .menu-category:not(:nth-child(2)) { position: relative; }

  .desktop-menu-category-list .menu-category > .menu-title {
    position: relative;
    color: var(--onyx);
    font-size: var(--fs-7);
    font-weight: var(--weight-600);
    text-transform: uppercase;
    padding: 15px 0;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .desktop-menu-category-list .menu-category > .menu-title:hover { color: var(--salmon-pink); }
  
  .desktop-menu-category-list .menu-category > .menu-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--salmon-pink);
    -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: left;
        -ms-transform-origin: left;
            transform-origin: left;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .desktop-menu-category-list .menu-category > .menu-title:hover::after { -webkit-transform: scaleX(1); -ms-transform: scaleX(1); transform: scaleX(1); }

  .dropdown-panel {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--white);
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 30px 1fr 30px 1fr 30px 1fr;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 30px;
    border: 1px solid var(--cultured);
    -webkit-box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
    -webkit-border-radius: var(--border-radius-md);
            border-radius: var(--border-radius-md);
    -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
    z-index: 5;
  }

  .desktop-menu-category-list .menu-category:hover > .dropdown-panel {
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  .dropdown-panel-list .menu-title a {
    color: var(--onyx);
    font-size: var(--fs-7);
    font-weight: var(--weight-600);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--cultured);
    margin-bottom: 10px;
  }

  .panel-list-item a {
    color: var(--sonic-silver);
    font-size: var(--fs-7);
    text-transform: capitalize;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .panel-list-item a:hover { color: var(--salmon-pink); }

  .panel-list-item:not(:last-child) a { padding: 4px 0; }

  .panel-list-item:last-child { margin-top: 20px; }

  .panel-list-item img {
    width: 100%;
    height: auto;
    -webkit-border-radius: var(--border-radius-sm);
            border-radius: var(--border-radius-sm);
  }

  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    background: var(--white);
    padding: 20px 0;
    -webkit-border-radius: var(--border-radius-md);
            border-radius: var(--border-radius-md);
    border: 1px solid var(--cultured);
    -webkit-box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
    -webkit-transform: translateY(50px);
        -ms-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
    z-index: 5;
  }

  .desktop-menu-category-list .menu-category:hover > .dropdown-list {
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  .dropdown-list .dropdown-item a {
    color: var(--sonic-silver);
    font-size: var(--fs-7);
    text-transform: capitalize;
    padding: 4px 20px;
    -webkit-transition: var(--transition-timing);
    -o-transition: var(--transition-timing);
    transition: var(--transition-timing);
  }

  .dropdown-list .dropdown-item a:hover { color: var(--salmon-pink); }

  .mobile-bottom-navigation { display: none; }



  /**
   * #BANNER 
   */

  .banner { margin-top: 0; }

  .slider-item { height: 380px; }

  .banner-content {
    left: 75px;
    max-width: 400px;
  }

  .banner-subtitle { --fs-7: 1.625rem; }

  .banner-text { --fs-7: 1.375rem; }

  .banner-btn { --fs-11: 0.875rem; }



  /**
   * #CATEGORY 
   */

  .category-item { min-width: -webkit-calc(33.33% - 20px); min-width: calc(33.33% - 20px); }

  .category-img-box { padding: 10px; }



  /**
   * #PRODUCT 
   */

  .product-container .container {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    gap: 30px;
    margin-bottom: 30px;
  }

  .sidebar {
    --fs-5: 0.941rem;

    position: -webkit-sticky;

    position: sticky;
    top: 30px;
    left: 0;
    padding: 0;
    min-width: -webkit-calc(25% - 15px);
    min-width: calc(25% - 15px);
    margin-bottom: 30px;
    visibility: visible;
    overflow-y: auto;
    -ms-scroll-chaining: chained;
        overscroll-behavior: auto;
    z-index: 0;
  }

  .sidebar-category {
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid var(--cultured);
    -webkit-border-radius: var(--border-radius-md);
            border-radius: var(--border-radius-md);
  }

  .sidebar-close-btn { display: none; }

  .product-box { min-width: -webkit-calc(75% - 15px); min-width: calc(75% - 15px); }

  .product-minimal { margin-bottom: 20px; }

  .product-minimal .product-showcase {
    min-width: -webkit-calc(33.33% - 14px);
    min-width: calc(33.33% - 14px);
    width: -webkit-calc(33.33% - 14px);
    width: calc(33.33% - 14px);
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
  }

  .product-minimal .showcase-wrapper { gap: 10px; }

  .product-minimal .showcase-container { padding: 2px; }

  .product-featured .countdown-content { padding: 5px 10px; }

  .product-grid { -ms-grid-columns: (1fr)[3]; grid-template-columns: repeat(3, 1fr); }



  /**
   * #TESTIMONIALS, CTA & SERVICE 
   */

  .testimonials-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    gap: 30px;
  }

  .testimonial-card { margin-bottom: 0; }

  .testimonial, .cta-container {
    min-width: -webkit-calc(50% - 15px);
    min-width: calc(50% - 15px);
    width: -webkit-calc(50% - 15px);
    width: calc(50% - 15px);
    margin-bottom: 0;
  }

  .service { width: 100%; }

  .service-container { gap: 0; }

  .service-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    text-align: center;
    min-width: 20%;
  }



  /**
   * #BLOG
   */

  .blog-card { min-width: -webkit-calc(33.33% - 20px); min-width: calc(33.33% - 20px); }

  .blog-title { --fs-5: 1rem; }



  /**
   * #FOOTER
   */

  .footer-nav-list {
    min-width: -webkit-calc(20% - 16px);
    min-width: calc(20% - 16px);
    width: -webkit-calc(20% - 16px);
    width: calc(20% - 16px);
  }

  .footer-nav-list:last-child { display: none; }

  .footer-bottom { margin-bottom: 0; }

}





/**
 * responsive larger than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * #REUSED STYLE 
   */

  .container { max-width: 1200px; }



  /**
   * #HEADER
   */

  .desktop-menu-category-list { gap: 45px; }



  /**
   * #BANNER
   */

  .slider-item:last-child .banner-img { -o-object-position: top; object-position: top; }



  /**
   * #CATEGORY
   */

  .category-item { min-width: -webkit-calc(25% - 22.5px); min-width: calc(25% - 22.5px); }

  .category-item-title { --fs-9: 0.824rem; }



  /**
   * #PRODUCT
   */

  .product-featured .showcase > div { min-width: -webkit-calc(50% - 10px); min-width: calc(50% - 10px); }

  .product-featured .display-number { --fs-5: 1.125rem; }

  .product-grid { -ms-grid-columns: (1fr)[4]; grid-template-columns: repeat(4, 1fr); }



  /**
   * #TESTIMONIALS, CTA, SERVICE
   */

  .testimonial, .service {
    min-width: -webkit-calc(25% - 20px);
    min-width: calc(25% - 20px);
    width: -webkit-calc(25% - 20px);
    width: calc(25% - 20px);
  }

  .cta-container {
    min-width: -webkit-calc(50% - 20px);
    min-width: calc(50% - 20px);
    width: -webkit-calc(50% - 20px);
    width: calc(50% - 20px);
    aspect-ratio: unset;
  }

  .service-container {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    gap: 16px;
    padding: 30px;
  }

  .service-item {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    text-align: left;
  }



  /**
   * #BLOG
   */

  .blog { margin-bottom: 50px; }
  
  .blog-card { min-width: -webkit-calc(25% - 22.5px); min-width: calc(25% - 22.5px); }



  /**
   * #FOOTER
   */

  footer { padding-top: 50px; }

  .footer-category {
    margin-bottom: 50px;
    padding-bottom: 35px;
  }

  .footer-nav { padding-bottom: 50px; }

}





/**
 * responsive larger than 1400px screen
 */

@media (min-width: 1400px) {

  /**
   * #BASE 
   */

  html { font-size: 18px; }



  /**
   * #REUSED STYLE 
   */

  .container { max-width: 1350px; }



  /**
   * #BANNER
   */

  .slider-item { height: 450px; }

  .banner-content {
    left: 110px;
    max-width: 460px;
  }

}
`

 