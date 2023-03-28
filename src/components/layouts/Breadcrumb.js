import React, { Component } from 'react';
import subheader from '../..//assets/img/subheadernew.jpg'

class Breadcrumb extends Component {
    render() {
        return (
            <div className="subheader dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + subheader }}>
               
               <div className="container">
                    <div className="subheader-inner">
                        
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                               <h1>WELCOME TO BOLE ETHIOPIAN RESTAURANT</h1> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;