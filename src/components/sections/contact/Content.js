import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

const latlng = [45.559420719205406, -122.65625984388805]

class Content extends Component {
    render() {
        return (
            <div className="contact-wrapper">
                 <span></span>
                <div className="ct-contact-map-wrapper">
                    <MapContainer
                        className="markercluster-map ct-contact-map"
                        center={latlng}
                        zoom={16}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                            attribution='&copy; Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                            maxZoom={16}
                        />
                        <Marker position={latlng} icon={customMarker}></Marker>
                    </MapContainer>
                    <a rel={'external'} className="btn-custom shadow-none" href={"https://maps.google.com/?q=" + latlng}>View in Google Maps</a>
                </div>
                <div>
                    <div className="section section-padding">
                        <div className="container">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location" />
                                            <h5>Find Us</h5>
                                            <span>915 NE Alberta St, Portland, OR 97211</span>
                                            <span>+1 503 719 6200 </span>
                                         
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking" />
                                            <h5>Opening Hours</h5>
                                            <span><span>Monday - Saturday:</span> 12:00pm - 9:00pm</span>
                                            <span><span>Sunday:</span> Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pt-0">
                      
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Content;