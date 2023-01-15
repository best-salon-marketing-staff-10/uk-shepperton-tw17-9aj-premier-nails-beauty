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
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image1Alt} src={images.serviceList7Image1} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image2Alt} src={images.serviceList7Image2} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image3Alt} src={images.serviceList7Image3} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image4Alt} src={images.serviceList7Image4} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="service-content-anh" alt={imageAlt.serviceList7Image5Alt} src={images.serviceList7Image5} />
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                        
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
                            {pageContent.serviceCategory7Description} 
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



