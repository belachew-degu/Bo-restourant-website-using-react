import React, {Fragment } from 'react';
import Categories from './Categories';
// import Categories from '../home/Categories';
// import Aboutus from './Aboutus';
// import Banner from './Banner';
// import Categories from './Categories';
// import Cta from './Cta';
// import Instagram from './Instagram';
// import Products from './Products';
// import Testimonials from './Testimonials';

 function Contentmenu  () {
 
        return (
            <Fragment>
                {/* <Banner />
                <Aboutus /> */}
                <Categories />
                {/* <div className="section products-section">
                    <Products />
                </div> */}
                {/* <Cta />
                <Testimonials />
                <Instagram /> */}
            </Fragment>
        );

}

export default Contentmenu;