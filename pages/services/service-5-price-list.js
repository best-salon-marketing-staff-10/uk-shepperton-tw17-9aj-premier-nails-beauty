import { serviceList5 } from '/pages/core/info';

export default function Service5PriceList(){
    return(
        <>
            <div className="service-list-5">
                <div className="price-list-details-services">
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service1}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service1Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service1Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service1Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service5}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service5Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service5Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service5Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <span className="price-list-details-services-name">
                                    {serviceList5.service6}
                                </span>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList5.service6Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList5.service6Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList5.service6Price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}