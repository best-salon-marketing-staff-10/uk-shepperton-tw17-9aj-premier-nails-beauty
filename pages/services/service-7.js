import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService7 from '/pages/Components/buttons/button-view-details-service-7.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function Service7(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image1Alt} src={images.serviceList7Image1} />
                                </div>
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {serviceCategory.serviceCategory7}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description1} 
                        </p>
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description2} 
                        </p>
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description3} 
                        </p>
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description4} 
                        </p>
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description5} 
                        </p>
                        <p className="service-content-description">
                            {pageContent.serviceCategory7Description6} 
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService7 />
                    </div>
                </div>
            </div>
        </>
    )
}



