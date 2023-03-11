import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService2 from '/pages/Components/buttons/button-view-details-service-2.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function Service2(){
    return(
        <>
            <div className="service">
                    <div className="service-content">
                        <div className="service-content-anh">
                            <Carousel fade={true} controls={false} interval="1800">
                                <Carousel.Item>
                                    <div className="carousel-image">
                                        <img className="d-block w-100" alt={imageAlt.serviceList2Image1Alt} src={images.serviceList2Image1} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-image">
                                        <img className="d-block w-100" alt={imageAlt.serviceList2Image2Alt} src={images.serviceList2Image2}  />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-image">
                                        <img className="d-block w-100" alt={imageAlt.serviceList2Image3Alt} src={images.serviceList2Image3}  />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-image">
                                        <img className="d-block w-100" alt={imageAlt.serviceList2Image4Alt} src={images.serviceList2Image4}  />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="carousel-image">
                                        <img className="d-block w-100" alt={imageAlt.serviceList2Image5Alt} src={images.serviceList2Image5}  />
                                    </div>
                                </Carousel.Item>
                            </Carousel> 
                        </div>
                    </div>
                    <div className="service-content-text">
                            <div className="service-content-title">
                                <h2 className="service-content-title">
                                    {serviceCategory.serviceCategory2}   
                                </h2>
                            </div>
                        <div className="service-content-description">
                            <p className="service-content-description">
                                {pageContent.serviceCategory2Description}   
                            </p>
                        </div>
                        <div className="button-view-detail-services">
                            <ButtonViewDetailsService2 />
                        </div>     
                    </div>
            </div>
        </>
    )
}



