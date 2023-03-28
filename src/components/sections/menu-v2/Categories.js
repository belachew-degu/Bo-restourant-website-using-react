import React from 'react';
import {vegmenu,nonalcholicmenu,alcholicmenu } from '../../../data/menu';
import VegImage  from '../../..//assets/img/categories-lg/4.jpg'
import nonVegImage  from '../../..//assets/img/categories-lg/5.jpg'

function  Categories () {

        return (
            <div className="ct-categories">
                {/* Category Start */}
                <div className="ct-category">
                    <div className="ct-category-bg" style={{ backgroundImage: "url(" + VegImage +")" }} />
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Vegetables</h5>
                                <h2 className="title">Our vegetables are 100% vegan. </h2>
                                <p className="subtitle">
                                    Stews made from chickpea and lentils accompany plenty of vegetables and side dishes like green with garlic or tomatoes with green pepper with fluffy Ethiopian bread 'injera'
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {vegmenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item">
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                                <div className="ct-mini-menu-dots" />
                                                <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                            </div>
                                            <div className="ct-mini-menu-bottom">
                                                <p>{item.shortdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Menu End */}
                        </div>
                    </div>
                </div>
                {/* Category End */}
                {/* Category Start */}
                <div className="ct-category">
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Non Vegetarian</h5>
                                {/* <h2 className="title">Did Someone Say Italian Food?</h2> */}
                                <p className="subtitle">
                                    Key and Alicha wot (Amaharic:ወጥ) is an Ethiopian stew or curryprepared with beef or chicken spice mixtures such as berber, and seasoned clarified butter
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {vegmenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item">
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                                <div className="ct-mini-menu-dots" />
                                                <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                            </div>
                                            <div className="ct-mini-menu-bottom">
                                                <p>{item.shortdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Menu End */}
                        </div>
                    </div>
                    <div className="ct-category-bg" style={{ backgroundImage: "url(" + nonVegImage +")" }} />
                </div>
                <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Non Alcoholic Drink</h5>
                                <p className="title">Soft Drinks(Pepsi,Coca-Cola, Sprite and other Drinks)</p>
                                <p className="subtitle">
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {nonalcholicmenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item">
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                                <div className="ct-mini-menu-dots" />
                                                <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                            </div>
                                            <div className="ct-mini-menu-bottom">
                                                <p>{item.shortdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Menu End */}
                        </div>
                </div>

                <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Alcoholic Drink</h5>
                                {/* <p className="title">Did Someone Say Italian Food?</p> */}
                                <p className="subtitle">
          </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                                {alcholicmenu.map((item, i) => (
                                    <div key={i} className="col-lg-6">
                                        <div className="ct-mini-menu-item">
                                            <div className="ct-mini-menu-top">
                                                <h5>{item.title}</h5>
                                                <div className="ct-mini-menu-dots" />
                                                <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                            </div>
                                            <div className="ct-mini-menu-bottom">
                                                <p>{item.shortdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Menu End */}
                        </div>
                </div>
                {/* Category End */}
            </div>
        );
    }


export default Categories;