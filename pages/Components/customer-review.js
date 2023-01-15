import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3';
import { pageContent } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { images } from '/pages/core/info';





export default function CustomerReview() {
    return (
        <>
            <div className="customer-review">
                <div className="customer-review-text">
                    <div className="customer-review-title">
                        {pageContent.customerReviewHeading}
                    </div>
                    <div>
                        {pageContent.customerReviewDescription}
                    </div>
                    <div className="divider">
                    </div>
                </div>
                
                <div className="customer-review-carousel">
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item >
                            <div className="carousel-image">
                                <img 
                                    className="customer-review-carousel-image"
                                    src={images.cusReviewImage1}
                                    alt={imageAlt.cusReviewImage1Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="customer-review-carousel-image"
                                    src={images.cusReviewImage2}
                                    alt={imageAlt.cusReviewImage2Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="customer-review-carousel-image"
                                    src={images.cusReviewImage3}
                                    alt={imageAlt.cusReviewImage3Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="customer-review-carousel-image"
                                    src={images.cusReviewImage4}
                                    alt={imageAlt.cusReviewImage4Alt}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img
                                    className="customer-review-carousel-image"
                                    src={images.cusReviewImage5}
                                    alt={imageAlt.cusReviewImage5Alt}
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>    
                <div className="button">
                    
                </div>       
            </div>
        </>
    )
}