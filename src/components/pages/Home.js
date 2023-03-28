import React, {Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
// import {Footer} from '../Footer/Footer';
import Content from '../sections/home/Content';
import Breadcrumb from '../layouts/Breadcrumb';
// import Footer from '../layouts/Footer';
// import Footer from '../Footer/Footer';
import Footer from '../Footer/Footer';

const pagelocation = 'Homepage';

function Home () {
   
        return (
            <Fragment>
                <MetaTags>
                    <title>Bole - Ethiopian Restaurant| {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header />
                <Breadcrumb />
                <br></br>
                <br></br>
                <Content/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer footer={{ style:"ct-footer footer-dark", logo:"assets/img/logo-light.png" }} />
            </Fragment>
        );
        }

export default Home;