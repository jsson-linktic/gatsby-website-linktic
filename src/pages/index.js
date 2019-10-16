import React from "react"
import { withPrefix, Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>

        
        <div className="section is-header _100vh position-relative flexv-justify-end">
          <div data-poster-url="videos/wavy-poster-00001.jpg" data-video-urls="videos/dummy.mp4,videos/dummy.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video w-background-video w-background-video-atom">
            <video autoPlay="" className="my-class-styles-1" loop="" muted="" playsInline="" data-wf-ignore="true"><source src={require('../../videos/dummy.mp4')} data-wf-ignore="true"/><source src={require('../../videos/dummy.webm')} data-wf-ignore="true"/></video>
          </div>
          <div data-delay="4000" data-animation="outin" data-autoplay="1" data-duration="500" data-infinite="1" data-w-id="ba5d81d6-f355-4907-f1e1-029f7110022c" className="c-hero1__slider relative-zindex10 on-dark w-slider">
            <div className="w-slider-mask">
              <div data-w-id="3f5eea81-9fb1-a721-0d1d-72982ce34d08" className="w-slide">
                <div className="container container-nested flex-horizontal">
                  <div className="col lg-7 md-12">
                    <h1 className="heading-beta on-dark">Everyone has an opinion, we have science</h1>
                  </div>
                  <div className="col lg-5 md-12 flexv-justify-end">
                    <p  className="text-large weight-is-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className="container container-nested">
                  <div className="col lg-12"><a href="contact-us.html" className="cta-link on-dark"><span className="margin-right">let&#x27;s talk</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                </div>
              </div>
              <div data-w-id="ba5d81d6-f355-4907-f1e1-029f7110022e" className="w-slide">
                <div className="container container-nested flex-horizontal">
                  <div className="col lg-7 md-12">
                    <h1 className="heading-beta on-dark">We clarify the future value of your company</h1>
                  </div>
                  <div className="col lg-5 md-12 flexv-justify-end">
                    <p  className="text-large weight-is-thin">Nulla vitae elit libero pharetra augue cras justo odio dapibus ac facilisis in, egestas eget quam</p>
                  </div>
                </div>
                <div className="container container-nested">
                  <div className="col lg-12"><a href="contact-us.html" className="cta-link on-dark"><span className="margin-right">let&#x27;s talk</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                </div>
              </div>
              <div data-w-id="5b7fd169-4ed8-bbfd-225b-95f5416a5421" className="w-slide">
                <div className="container container-nested flex-horizontal">
                  <div className="col lg-7 md-12">
                    <h1 className="heading-beta on-dark">Etan doubles down on business growth strategy </h1>
                  </div>
                  <div className="col lg-5 md-12 flexv-justify-end">
                    <p  className="text-large weight-is-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className="container container-nested">
                  <div className="col lg-12"><a href="contact-us.html" className="cta-link on-dark"><span className="margin-right">let&#x27;s talk</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                </div>
              </div>
              <div data-w-id="88d8b573-e05f-3739-e73a-e4f52b2e8fc7" className="w-slide">
                <div className="container container-nested flex-horizontal">
                  <div className="col lg-7 md-12">
                    <h1 className="heading-beta on-dark">We’ve been a force for change for 20 years</h1>
                  </div>
                  <div className="col lg-5 md-12 flexv-justify-end">
                    <p  className="text-large weight-is-thin">Suspendisse varius enim in eros elementum tristique nulla vitae elit libero, a pharetra augue</p>
                  </div>
                </div>
                <div className="container container-nested">
                  <div className="col lg-12"><a href="contact-us.html" className="cta-link on-dark"><span className="margin-right">let&#x27;s talk</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
                </div>
              </div>
            </div>
            <div className="c-hero1__left-arrow w-slider-arrow-left">
              <div className="c-hero1__left-arrow-icon w-icon-slider-left"></div>
            </div>
            <div className="c-hero1__right-arrow w-slider-arrow-right">
              <div className="c-hero1__right-arrow-icon w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
          </div>
          <div className="gradient-overlay"></div>
        </div>
        
        
        <div className="section position-relative overflow-hidden">
          <div className="background-img img1 align-left push-to-lg-3"></div>
          <div className="container">
            <div className="col lg-3 md-12"></div>
            <div className="col md-12">
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned">Our capabilities</div>
                <div className="pre-title-decoration"></div>
              </div>
              <h2>Our line of service</h2>
            </div>
          </div>
          <div className="container flex-horizontal is-wrapping">
            <div className="col lg-3 md-12">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">Product engineering</h4>
              </div>
              <div className="margin-bottom">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.</div>
            </div>
            <div className="col lg-3 md-12">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">Mobile development</h4>
              </div>
              <div className="margin-bottom">Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.</div>
            </div>
            <div className="col lg-3 md-12">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">IT consulting</h4>
              </div>
              <div className="margin-bottom">Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla.Curabitur blandit tempus porttitor.</div>
            </div>
            <div className="col lg-3 md-12">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">UI/ UX design</h4>
              </div>
              <div className="margin-bottom">Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="col lg-3 md-12">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">DevOps</h4>
              </div>
              <div className="margin-bottom">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.</div>
            </div>
            <div className="col lg-3 md-12 no-margin-bottom-lg">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">QA &amp; testing</h4>
              </div>
              <div className="margin-bottom">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.</div>
            </div>
            <div className="col lg-3 md-12 no-margin-bottom-lg">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">Scrum coaching</h4>
              </div>
              <div className="margin-bottom">Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="col lg-3 md-12 no-margin-bottom-lg">
              <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" height="64" alt="" className="margin-right"/>
                <h4 className="no-margin-bottom">Agility consulting</h4>
              </div>
              <div className="margin-bottom">Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.</div>
            </div>
          </div>
        </div>
      
        <div className="section bg-accent">
          <div className="container flex-horizontal">
            <div className="col lg-4 flexv-space-between md-12">
              <div>
                <div className="pre-title-container">
                  <div className="pre-title is-left-aligned">Who we are</div>
                  <div className="pre-title-decoration"></div>
                </div>
                <div className="size-h2">At Etan Consulting Network we&#x27;re all about you, so you can be about your business</div>
              </div><a href="#" className="cta-link"><span className="margin-right">let&#x27;s talk</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
            <div className="col lg-1 no-margin-bottom"></div>
            <div className="col lg-7 no-margin-bottom-lg md-12">
              <div className="margin-bottom-double text-large">Your business has its own unique challenges and opportunities when it comes to helping people connect, share and get work done. At Etan, we start with your end goals in mind, and work alongside you to achieve them. You’ll be amazed by what we can accomplish together.</div>
              <div className="container container-nested">
                <div className="col lg-6 md-12 md-margin-bottom-small">
                  <div>Etan is one of the fastest growing business consulting groups in the U.S. with a strong local focus throughout the west. When you need assistance, we show up with a problem-solving attitude and a mind for innovation. </div>
                </div>
                <div className="col lg-6 md-12 no-margin-bottom-md">
                  <div className="no-margin-bottom-lg">We’re great communicators when it comes to assessing your needs and laying out your options. We also carry the highest levels of engineering certifications and recognitions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="col lg-5 alignself-center md-12 no-margin-bottom-lg">
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned">what we offer</div>
                <div className="pre-title-decoration"></div>
              </div>
              <h2>Integrated technologies</h2>
              <p className="margin-bottom-double">With our new leadership structure designed to increase its focus on innovative engineering and customer service</p>
              <div className="container container-nested is-wrapped">
                <div className="col lg-6 md-12">
                  <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-right"/>
                    <h4 className="no-margin-bottom">Super cloud computing</h4>
                  </div>
                  <div>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</div>
                </div>
                <div className="col lg-6 md-12">
                  <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-right"/>
                    <h4 className="no-margin-bottom">Blockchain development</h4>
                  </div>
                  <div>Introduce the highest level of security and automate your operations with our blockchain solutions.</div>
                </div>
                <div className="col lg-6 md-12">
                  <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-right"/>
                    <h4 className="no-margin-bottom">Artificial intelligence</h4>
                  </div>
                  <div>Custom AI-based solutions like machine and deep learning will help you automate any operation.</div>
                </div>
                <div className="col lg-6 md-12 md-no-margin-bottom">
                  <div className="flexh-align-center margin-bottom"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="32" alt="" className="margin-right"/>
                    <h4 className="no-margin-bottom">Internet of anythings</h4>
                  </div>
                  <div>Secure IoT solutions will let you gather Big Data, optimise key processes &amp; improve decision-making.</div>
                </div>
              </div>
            </div>
            <div className="col lg-1 no-margin-bottom"></div>
            <div className="col lg-6 md-12 order-first md-margin-bottom-quad">
              <div className="image-w-stripe-container text-align-center">
                <div data-w-id="fd7c503d-e1d8-b8ed-60dc-4039e8a9b3e9" className="stripes hidden-md"></div><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" srcSet="https://via.placeholder.com/1000x600.png?text=IMAGE 500w, https://via.placeholder.com/1000x600.png?text=IMAGE 719w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 719px, (max-width: 773px) 93vw, (max-width: 991px) 719px, 45vw" alt=""/></div>
            </div>
          </div>
        </div>
      

        <div className="section position-relative">
          <div className="background-img img1 align-left push-to-lg-8 hidden-md"></div>
          <div className="container">
            <div className="col lg-8 md-12 no-margin-bottom"></div>
            <div className="col lg-4 no-margin-bottom md-12">
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned">Premium partners</div>
                <div className="pre-title-decoration"></div>
              </div>
              <h2>World-class global brand organization</h2>
            </div>
          </div>
          <div className="container">
            <div className="col lg-7 md-12 no-margin-bottom">
              <div className="w-layout-grid c-grid4x2">
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
                <div className="fa-brand-2"></div>
              </div>
            </div>
            <div className="col lg-1"></div>
            <div className="col lg-4 flexv-space-between md-12">
              <div>
                <div className="margin-bottom-double">We&#x27;ve succesfully helped Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2017 we have been a visionary and a reliable software engineering partner for world-class brands.</div>
              </div><a href="#" className="cta-link"><span className="margin-right">Talk to our team</span><span className="fa c-cta1_arrow-hovered"></span> <span className="fa c-cta1__arrow-normal"></span></a></div>
          </div>
        </div>
        <div className="section bg-accent">
          <div className="container">
            <div className="col lg-4 block-centered text-align-center">
              <div className="pre-title-container">
                <div className="pre-title">case studies</div>
                <div className="pre-title-decoration is-centered"></div>
              </div>
              <h2>Client Success</h2>
            </div>
          </div>
          <div className="container flexh-justify-center position-relative">
            <div className="col lg-8 md-12">
              <div data-duration-in="300" data-duration-out="100" className="c-testimonial3 w-tabs">
                <div className="c-testimonial3__tab-content w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <div className="image-w-stripe-container margin-bottom-quad text-align-center">
                      <div data-w-id="a4c121d0-ee62-113e-61ae-1451d10cd86a" className="stripes hidden-md"></div><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt=""/></div>
                    <div className="quote style2 c-testimonial3__quote">Hooli was behind the highest-rated app for integrating Salesforce with a user’s email inbox. Cirrus Insight Mobile helps you leverage your sales data to gain valuable insights and uncover new...</div>
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <div className="image-w-stripe-container margin-bottom-quad">
                      <div className="stripes"></div><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt=""/></div>
                    <div className="quote style2 c-testimonial3__quote">A high-speed railway pioneer gains a series of automated solutions to process passenger information, improve on-board services, and report critical information to passengers.</div>
                  </div>
                  <div data-w-tab="Tab 3" className="w-tab-pane">
                    <div className="image-w-stripe-container margin-bottom-quad">
                      <div className="stripes"></div><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt=""/></div>
                    <div className="quote margin-bottom-double style2">The AngryCreative solution is a multilingual mobile application that lets the company’s representative leap over language barriers in a matter of seconds, ensuring clear and productive conversations.</div>
                  </div>
                </div>
                <div className="c-testimonial3__tab w-tab-menu">
                  <a data-w-tab="Tab 1" className="c-testimonial3__tab-link w-inline-block w-tab-link w--current">
                    <div className="c-testimonial3__info">
                      <div className="fa-brand-2 is-small margin-right color1"></div>
                      <div className="c-testimonial1__text">
                        <div className="is-bold">Eric Grenier</div>
                        <div className="text-small low-text-contrast">Fanatic Hooligans</div>
                      </div>
                    </div>
                  </a>
                  <a data-w-tab="Tab 2" className="c-testimonial3__tab-link w-inline-block w-tab-link">
                    <div className="c-testimonial3__info">
                      <div className="fa-brand-2 is-small margin-right color2"></div>
                      <div className="c-testimonial1__text">
                        <div className="is-bold">Mark Askew</div>
                        <div className="text-small low-text-contrast">Super Hipster</div>
                      </div>
                    </div>
                  </a>
                  <a data-w-tab="Tab 3" className="c-testimonial3__tab-link w-inline-block w-tab-link">
                    <div className="c-testimonial3__info">
                      <div className="fa-brand-2 is-small margin-right color3"></div>
                      <div className="c-testimonial1__text">
                        <div className="is-bold">David Hochs</div>
                        <div className="text-small low-text-contrast">Anger Manager</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section overflow-hidden">
          <div className="container is-fullwidth flex-horizontal">
            <div className="col lg-6 md-12">
              <div className="container">
                <div className="col lg-12">
                  <div className="pre-title-container">
                    <div className="pre-title is-left-aligned">Hi-tech Industry solutions</div>
                    <div className="pre-title-decoration"></div>
                  </div>
                  <h2>Tailor-made for different type of industries</h2>
                </div>
              </div>
              <div className="container is-wrapped">
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom" />
                  <h4>Constructions</h4>
                  <div>Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</div>
                </div>
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom"/>
                  <h4>Healthcare</h4>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</div>
                </div>
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom"/>
                  <h4>Retail &amp; Commerce</h4>
                  <div>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. </div>
                </div>
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom"/>
                  <h4>FinTech</h4>
                  <div>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</div>
                </div>
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom"/>
                  <h4>Travel and hospitality</h4>
                  <div>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                </div>
                <div className="col lg-4 md-12"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="64" alt="" className="margin-bottom"/>
                  <h4>Food &amp; Beverages</h4>
                  <div>Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis.</div>
                </div>
              </div>
            </div>
            <div className="col lg-6 md-12 order-first position-relative">
              <div className="image-w-stripe-container2">
                <div className="image-as-bg"></div>
                <div data-w-id="f9f2bb5b-6ce5-7adb-0a16-77d28b901ea1" className="stripes2"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="section">
          <div className="container">
            <div className="col lg-12">
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned position-relative">from our blog</div>
                <div className="pre-title-decoration"></div>
              </div>
              <h2>Latest news &amp; insights</h2>
            </div>
          </div>
          <div className="container">
            <div className="col lg-12">
              <div className="w-layout-grid c-grid2">
                <a id="w-node-6c39528a0ead-f459a334" href="single-post.html" className="c-grid1__item img1 w-inline-block">
                  <div className="c-grid1__overlay">
                    <div className="c-grid__category">startup</div>
                    <div className="c-grid1__title">Fintech 4.0 — How Technology Is Reshaping The $5 Trillion Insurance Sector</div>
                  </div>
                </a>
                <a id="w-node-6c39528a0eb1-f459a334" href="single-post.html" className="c-grid1__item img2 w-inline-block">
                  <div className="c-grid1__overlay">
                    <div className="c-grid__category">Fintech</div>
                    <div className="c-grid1__title">A Captive and Trivial Culture: Technology Ethics in a Tech-Consumed World</div>
                  </div>
                </a>
                <a id="w-node-6c39528a0eb5-f459a334" href="single-post.html" className="c-grid1__item img3 w-inline-block">
                  <div className="c-grid1__overlay">
                    <div className="c-grid__category">UI / UX Design</div>
                    <div className="c-grid1__title">The loom and the thresher: Lessons in technological worker displacement</div>
                  </div>
                </a>
                <a id="w-node-6c39528a0eb9-f459a334" href="single-post.html" className="c-grid1__item img4 w-inline-block">
                  <div className="c-grid1__overlay">
                    <div className="c-grid__category">team management</div>
                    <div className="c-grid1__title">Supercharged Ramen: The Future of Noodles Is Already Here</div>
                  </div>
                </a>
                <a id="w-node-6c39528a0ebd-f459a334" href="single-post.html" className="c-grid1__item img5 w-inline-block">
                  <div className="c-grid1__overlay">
                    <div className="c-grid__category">future industry</div>
                    <div className="c-grid1__title">Army of Women Earning $4 a Day Could Be Behind Your Next iPhone</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg-accent position-relative overflow-hidden">
          <div className="container position-relative">
            <div className="col lg-5 alignself-center md-12">
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned">Our facts in number</div>
                <div className="pre-title-decoration"></div>
              </div>
              <p className="margin-bottom-double">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in. <a href="#"> Read More</a></p>
              <div className="container container-nested margin-bottom is-wrapped">
                <div className="col lg-6 md-12">
                  <div className="heading-beta thin">17<span className="font-size-normal thin">years</span></div>
                  <div>We&#x27;ve been operating since 2001</div>
                </div>
                <div className="col lg-6 md-12">
                  <div className="heading-beta thin">918<span className="font-size-normal thin">clients</span></div>
                  <div>We&#x27;ve helped 990+ clients achieve their goals</div>
                </div>
                <div className="col lg-6 md-12">
                  <div className="heading-beta thin">8<span className="font-size-normal thin">offices</span></div>
                  <div>Our locations are spreaded accross 8 continents</div>
                </div>
                <div className="col lg-6 md-12">
                  <div className="heading-beta thin">28<span className="font-size-normal thin">awards</span></div>
                  <div>We&#x27;ve awarded as the best business consulting in 2020</div>
                </div>
              </div>
              <div className="pre-title-container">
                <div className="pre-title is-left-aligned">awards and recognitions</div>
                <div className="pre-title-decoration"></div>
              </div>
              <div data-delay="3000" data-animation="slide" data-autoplay="1" data-easing="ease-out-cubic" data-duration="1200" data-infinite="1" className="c-carousel2 margin-top block-centered w-slider">
                <div className="c-carousel2_wrapper w-slider-mask">
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" width="120" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                  <div className="c-carousel2_slide w-slide"><img src="https://via.placeholder.com/1000x600.png?text=IMAGE" alt="" className="c-carousel2__logo"/></div>
                </div>
                <div className="display-hidden w-slider-arrow-left">
                  <div className="c-carousel1__left-arrow w-icon-slider-left"></div>
                </div>
                <div className="display-hidden w-slider-arrow-right">
                  <div className="c-carousel1__right-arrow w-icon-slider-right"></div>
                </div>
                <div className="c-carousel2__nav w-slider-nav w-slider-nav-invert w-round"></div>
              </div>
            </div>
            <div className="col lg-1"></div>
            <div className="col lg-6 md-12">
              <div className="c-contact__home w-form">
                <div className="size-h2">Tell us about your project</div>
                <div className="margin-bottom">We will respond to your email within 24 hours</div>
                <form id="email-form-2" name="email-form-2" data-name="Email Form 2"><select id="field" name="field" className="form-select w-select"><option value="interest">I&#x27;m interested in...</option><option value="IT consulting">IT consulting</option><option value="Web development">Web development</option><option value="Mobile app development">Mobile app development</option><option value="Enterprise software development">Enterprise software development</option></select><input type="text" className="form-input-text w-input" maxLength="256" name="name" data-name="Name" placeholder="Name" id="name"/><input type="email" className="form-input-text w-input" maxLength="256" name="Email" data-name="Email" placeholder="Email" id="Email-4" required=""/><input type="text" className="form-input-text w-input" maxLength="256" name="Company" data-name="Company" placeholder="Company" id="Company" required=""/><textarea placeholder="Project Description" maxLength="5000" id="Project-description" name="Project-description" data-name="Project description" className="form-textarea margin-bottom-double w-input"></textarea><input type="submit" value="Talk to our team" data-wait="Please wait..." className="button-primary w-button"/></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div data-w-id="b2e88807-b924-c74f-60e6-578fbc687202" className="bg-image hidden-md"></div>
        </div>
        <div className="section section-footer-dark padding-bottom-16">
          <div className="container margin-bottom">
            <div className="col lg-2 md-12 md-order-first">
              <h3 className="logotype on-dark">e—<br/>tan</h3>
            </div>
            <div className="col lg-6 md-12 no-margin-bottom">
              <div className="container container-nested">
                <div className="col lg-4 md-12">
                  <h4>Service</h4><a href="#" className="footer-nav-link on-dark">Development team</a><a href="#" className="footer-nav-link on-dark">Mobile app</a><a href="#" className="footer-nav-link on-dark">Enterprise software</a><a href="#" className="footer-nav-link on-dark">DevOps</a></div>
                <div className="col lg-4 md-12">
                  <h4>Company</h4><a href="#" className="footer-nav-link on-dark">About</a><a href="#" className="footer-nav-link on-dark">Our Work</a><a href="#" className="footer-nav-link on-dark">News</a><a href="#" className="footer-nav-link on-dark">Career</a></div>
                <div className="col lg-4 no-margin-bottom-lg md-12">
                  <h4>Let&#x27;s connect</h4>
                  <a href="#" className="footer-nav-link-2 on-dark w-inline-block">
                    <div><span className="fa-brand w24"></span> LinkedIn</div>
                  </a>
                  <a href="#" className="footer-nav-link-2 on-dark w-inline-block">
                    <div><span className="fa-brand w24"></span> Youtube</div>
                  </a>
                  <a href="#" className="footer-nav-link-2 on-dark w-inline-block">
                    <div><span className="fa-brand w24"></span> Facebook</div>
                  </a>
                  <a href="#" className="footer-nav-link-2 on-dark w-inline-block">
                    <div><span className="fa-brand w24"></span> Instagram</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col lg-4 md-12 no-margin-bottom">
              <h4 className="margin-bottom">Subscribe</h4>
              <div className="margin-bottom w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="flexh-align-center"><input type="email" className="form-input-text is-grey margin-right-small no-margin-bottom md-margin-bottom w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Enter your email address" id="email-2" required=""/><input type="submit" value="Subscribe" data-wait="Please wait..." className="button-primary button-primary-small w-button"/></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <div className="margin-bottom low-text-contrast text-small">Join our newsletter to stay up to date on features and releases</div>
            </div>
          </div>
          <div className="container">
            <div className="col lg-12 margin-bottom">
              <div className="hr"></div>
            </div>
          </div>
          <div className="container">
            <div className="col lg-6 no-margin-bottom md-12 md-order-last">
              <div className="low-text-contrast text-small flexh-space-between md-flex-vertical">
                <div className="md-order-last">©2019 Etan Kali, Co. All rights reserved. </div><a href="#" className="footer-bottom-link">Privacy Policy</a><a href="#" className="footer-bottom-link">Term Of Service</a></div>
            </div>
            <div className="col lg-6 no-margin-bottom md-12">
              <div className="w100 text-align-right footer-bottom md-text-align-left margin-bottom">Made in Surabaja, Indonesia</div>
            </div>
          </div>
        </div>
        <div className="offcanvas-overlay">
          <div className="offcanvas-menu-list">
            <div data-w-id="b972cccf-195b-c621-4be6-a86d09c1bdb0" className="fa on-dark close-button-offcanvas"></div>
            <div className="offcanvas-menu-item-wrapper"><a href="#" className="offcanvas-menu-item item1">About Us</a></div>
            <div className="offcanvas-menu-item-wrapper"><a href="#" className="offcanvas-menu-item item2">Features</a></div>
            <div className="offcanvas-menu-item-wrapper"><a href="#" className="offcanvas-menu-item item3">Our Team</a></div>
            <div className="offcanvas-menu-item-wrapper"><a href="#" className="offcanvas-menu-item item4">Pricing</a></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
