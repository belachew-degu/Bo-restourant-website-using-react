import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumbs from '../layouts/Breadcrumb';
// import Footer from '../layouts/Footer';
// import Content from '../sections/home/Content';
// import Content from '../sections/menu-v2/Content';
import Contentmenu from '../sections/menu-v2/Contentmenu';
import Footer from '../Footer/Footer';

const pagelocation = 'Menu'

class Menutwo extends Component {
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
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Contentmenu/>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/logo-light.png" }} />
            </Fragment>
        );
    }
}

export default Menutwo;