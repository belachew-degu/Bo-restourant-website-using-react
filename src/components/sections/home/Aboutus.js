import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import auth from '../../../assets/img/authn.jpg'


class Aboutus extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + auth} alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Bole Ethiopian Restaurant</h5>
                                {/* <h2 className="title">Serving Pizzas By The Slice Since 1987</h2> */}
                                <p className="subtitle">
                                Bole Ethiopian Restaurant is a family-owned business. Our family is committed to preparing your meals with freshest ingredients that are wholesome and safe to eat.
          </p>
                                <p className="subtitle">
                                At Bole Ethiopian Restaurant, we treat our visitors like family and whether it’s our large variety of veggie ,  meat-based dishes, and anything in between; we will make sure that when you come to Bole Ethiopian Restaurant, you get one of the most satisfying dining experiences around.
          </p>
                                {/* <div className="signature">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/signature.png"} alt="img" />
                                </div> */}
                                <Link to="/menu" className="btn-custom">Check our Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;