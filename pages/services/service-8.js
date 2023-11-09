import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService8 from '/pages/Components/buttons/button-view-details-service-8.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function Service8(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList8Image1Alt} src={images.serviceList8Image1} />
                                </div>
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {serviceCategory.serviceCategory8}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                        {pageContent.serviceCategory8Description}
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService8 />
                    </div>
                </div>
            </div>
        </>
    )
}



