import React from "react"
import { Link } from "gatsby"
import './css/webflow.css'
import './css/normalize.css'
import './css/etanwebflow.css'
//import './js/webflow.js'
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <>
    <div class="section-header position-absolute">
      <div class="container space-between align-middle">
        <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
          <div class="navbar-container align-middle w-container">
            <div class="col lg-4 order-first no-padding-left no-margin-bottom flex-horizontal lg-2 md-4 xs-8">
              <div class="menu-and-logo-container order-first"><a data-w-id="7d050a59-b525-e710-dbfb-70b18fafaf10" href="#" class="offcanvas-button margin-right w-inline-block"><img src={require('../../images/burger-menu-icon-white.svg')} alt=""/></a>
                <span class="brand w-nav-brand">
                  <h3 class="logotype on-dark">e—<br/><ListLink to="/">tan</ListLink></h3>
                </span>
              </div>
            </div>
            <div class="col lg-4 no-margin-bottom flexh-justify-center position-absolute-md lg-8">
              <nav role="navigation" class="nav-menu w-nav-menu"><span clspanss="nav-link on-dark w-nav-link"><ListLink to="/about/">About</ListLink></span>
                <div data-hover="1" data-delay="0" data-w-id="7d050a59-b525-e710-dbfb-70b18fafaf1a" class="nav-dropdown w-dropdown">
                  <div class="nav-link on-dark w-dropdown-toggle">
                    <div class="w-icon-dropdown-toggle"></div>
                    <div><ListLink to="/about/">Our work</ListLink></div>
                  </div>
                  <nav class="dropdown-list w-dropdown-list"><a href="our-work.html" class="dropdown-link w-dropdown-link">Fullwidth gallery</a><a href="our-work-2.html" class="dropdown-link w-dropdown-link">Standard gallery</a></nav>
                </div><span class="nav-link on-dark w-nav-link"><ListLink to="/services/">Services</ListLink></span><span class="nav-link on-dark w-nav-link"><ListLink to="/about/">News</ListLink></span><span href="contact-us.html" class="nav-link on-dark w-nav-link"><ListLink to="/about/">Contact</ListLink> </span></nav>
            </div>
            <div class="menu-button w-nav-button"><img src={require('../../images/burger-menu-icon-white.svg')} alt="" class="burger-menu-icon"/></div>
            <div class="col lg-4 no-margin-bottom flexh-justify-end no-padding-right grow hidden-xs lg-2">
              <div class="extra-menu"><span href="hiring.html" class="extra-menu-link margin-left nav-link on-dark"><ListLink to="/about/">We&#x27;re hiring</ListLink></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {children}
  </>

 
)