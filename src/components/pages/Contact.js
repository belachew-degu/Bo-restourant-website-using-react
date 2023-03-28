import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';
import Breadcrumbco from '../layouts/Breadcrumb';
import Footer from '../Footer/Footer';

const pagelocation = 'Contact Us'

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Bole - Ethiopian Restaurant | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <div className='contact-header'> 
                   <Header/>  
                 </div>
               
                <Breadcrumbco />
                <Content/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/logo-light.png" }} />
            </Fragment>
        );
    }
}

export default Contact;