import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService1 from '/pages/Components/buttons/button-view-details-service-1.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';


export default function Service1(){
    return(
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                        <Carousel fade={true} controls={false} interval="1800">
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.serviceList1Image1Alt} src={images.serviceList1Image1} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.serviceList1Image2Alt} src={images.serviceList1Image2} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.serviceList1Image3Alt} src={images.serviceList1Image3} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.serviceList1Image4Alt} src={images.serviceList1Image4} />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-image">
                                    <img className="d-block w-100" alt={imageAlt.serviceList1Image5Alt} src={images.serviceList1Image5} />
                                </div>
                            </Carousel.Item>
                        </Carousel> 
                    </div>       
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {serviceCategory.serviceCategory1}
                        </h2>
                    </div> 
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {pageContent.serviceCategory1Description}   
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService1 />
                    </div>
                </div>
            </div>
        </>
    )
}



