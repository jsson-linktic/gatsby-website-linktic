import React from "react"
import { Link } from "gatsby"

// css
import './css/normalize.css'
import './css/webflow.css'
import './css/etanwebflow.css'
import './css/styles.css'

//import './js/webflow.js'
const ListLink = props => (
  <a  class="nav-link on-dark w-nav-link">
    <Link to={props.to}>{props.children}</Link>
  </a>
)

export default ({ children }) => (
  <>
    <div className="section-header position-absolute">
      <div className="container space-between align-middle">
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
          <div className="navbar-container align-middle w-container">
            <div className="col lg-4 order-first no-padding-left no-margin-bottom flex-horizontal lg-2 md-4 xs-8">
              <ListLink to="/">
                <div class="menu-and-logo-container order-first"><a data-w-id="7d050a59-b525-e710-dbfb-70b18fafaf10" class="offcanvas-button margin-right w-inline-block"><img src={require('../../images/burger-menu-icon-white.svg')} alt=""/></a>
                  <a class="brand w-nav-brand">
                    <h3 class="logotype on-dark">e—<br/>tan</h3>
                  </a>
                </div>
              </ListLink>
            </div>
            <div className="col lg-4 no-margin-bottom flexh-justify-center position-absolute-md lg-8">
              <nav role="navigation" className="nav-menu w-nav-menu"><ListLink to="/about/"><a clspanss="nav-link on-dark w-nav-link">About</a></ListLink>
                <div data-hover="1" data-delay="0" data-w-id="7d050a59-b525-e710-dbfb-70b18fafaf1a" className="nav-dropdown w-dropdown">
                  <div className="nav-link on-dark w-dropdown-toggle">
                    <div className="w-icon-dropdown-toggle"></div>
                    <div>Our work</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list"><ListLink to="/our-work/"><a className="dropdown-link w-dropdown-link">Fullwidth gallery</a></ListLink><ListLink to="/our-work-2/"><a className="dropdown-link w-dropdown-link">Standard gallery</a></ListLink></nav>
                </div><span className="nav-link on-dark w-nav-link"><ListLink to="/services/">Services</ListLink></span><span className="nav-link on-dark w-nav-link"><ListLink to="/news/">News</ListLink></span><span className="nav-link on-dark w-nav-link"><ListLink to="/contact-us/">Contact</ListLink> </span></nav>
            </div>
            <div className="menu-button w-nav-button"><img src={require('../../images/burger-menu-icon-white.svg')} alt="" className="burger-menu-icon"/></div>
            <div className="col lg-4 no-margin-bottom flexh-justify-end no-padding-right grow hidden-xs lg-2">
              <div className="extra-menu"><span className="extra-menu-link margin-left nav-link on-dark"><ListLink to="/hiring/">We&#x27;re hiring</ListLink></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {children}
  </>

 
)