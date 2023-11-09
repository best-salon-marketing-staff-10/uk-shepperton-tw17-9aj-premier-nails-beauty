import { serviceList8 } from '/pages/core/info';

export default function Service8PriceList(){
    return(
        <>
        <div className="service-list-8">
            <div className="price-list-details-services">
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList8.service1}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList8.service1Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList8.service1Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList8.service1Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList8.service2}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList8.service2Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList8.service2Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList8.service2Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList8.service3}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList8.service3Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList8.service3Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList8.service3Price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}