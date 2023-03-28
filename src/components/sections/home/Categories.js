import React, { Component } from 'react';
// import { nonvegmenu, vegmenu,nonalcholicmenu,alcholicmenu } from '../../../data/menu';
import VegImage  from '../../..//assets/img/categories-lg/4.jpg'
// import nonVegImage  from '../../..//assets/img/categories-lg/5.jpg'
// import Image from '../../../assets/img/homeimage.jpg'
class Categories extends Component {
    render() {
        return (
            <div className="ct-categories">
                {/* Category Start */}
                <div className="ct-category">
                    <div className="ct-category-bg" style={{ backgroundImage: "url(" + VegImage +")" }} />
                    <div className="ct-category-content">
                        <div className="ct-category-content-inner">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Bole Ethiopian Restaurant</h5>
                                <br></br>
                                <h2 className="title">Vegeterian & non Vegiterian meal, and Alcholic and non Alcholic drink</h2>
                               <br></br> 
                               <p className="subtitle">
                                    
                            Bole Ethiopian Restaurant is a family-owned business. Our family is committed to preparing your meals with freshest ingredients that are wholesome and safe to eat.At Bole Ethiopian Restaurant, we treat our visitors like family and whether it’s our large variety of veggie , meat-based dishes, and anything in between; we will make sure that when you come to Bole Ethiopian Restaurant, you get one of the most satisfying dining experiences around.
                              </p>
                            </div>
                            {/* Menu Start */}
                            <div className="row">
                            
                              
                            </div>
                            {/* Menu End */}
                        </div>
                    </div>
                </div>
                {/* Category End */}
                {/* Category Start */}
        
                {/* Category End */}
            </div>
        );
    }
}

export default Categories;