import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className={this.props.footer.style}>
                {/* Top Footer */}
               
                {/* Middle Footer */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div>
                                
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li> <Link to="/">HOME</Link> </li>
                                    {/* <li> <Link to="/blog-grid">Blog</Link> </li> */}
                                    <li> <Link to="/about">ABOUT US</Link> </li>
                                    <li> <Link to="/menu">OUR MENU</Link> </li>
                                    <li> <Link to="/contact">CONTACT Us</Link> </li>
                                </ul>
                            </div>
                            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Top Items</h5>
                                <ul>
                                    <li> <Link to="/menu-v1">Pepperoni</Link> </li>
                                    <li> <Link to="/menu-v1">Swiss Mushroom</Link> </li>
                                    <li> <Link to="/menu-v1">Barbeque Chicken</Link> </li>
                                    <li> <Link to="/menu-v1">Vegetarian</Link> </li>
                                    <li> <Link to="/menu-v1">Ham &amp; Cheese</Link> </li>
                                </ul>
                            </div> */}
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                            <section className="LL-FooterContact">
        <h1 tag="h4" size="base">
          Contact
        </h1>
        <div>
          <p>2548 Matthews Street, Chicago, Illinois - 60631</p>
          <p>815-582-5830</p>
          <p>contact@littlelemon.com</p>
        </div>
      </section>
                            </div>
                         
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
             
            </footer>
        );
    }
}

export default Footer;