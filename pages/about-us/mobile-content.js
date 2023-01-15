import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Button2 from '/pages/Components/buttons/button-2.js';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import CustomerReview from '/pages/Components/customer-review.js';
import OurStory from '/pages/about-us/our-story';
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';


export default function MobileContent(){
    //Cần biến đoạn này thành component cho ngon lành, component carousel hay gì đó tùy có thể ko cần carousel
    return(
        <>
            <div className="mobile-about-us">
                <div>
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage1Alt} src={images.mobileAboutUsImage1} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage2Alt} src={images.mobileAboutUsImage2} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.mobileAboutUsImage3Alt} src={images.mobileAboutUsImage3} />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>

                <div className="mobile-about-us-our-story">
                    <OurStory />
                </div>
                <div className="button">
                    <Button2 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <DongVien1 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <DongVien2 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <DongVien3 />
                </div>
                <div className="mobile-about-us-dong-vien">
                    <div className="time-schedule">
                        <TimeSchedule />
                    </div>
                </div>
                
            </div>
        </>
    )
}