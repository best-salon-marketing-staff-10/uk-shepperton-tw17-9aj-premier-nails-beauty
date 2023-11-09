import { serviceList7 } from '/pages/core/info';

export default function Service7PriceList(){
    return(
        <>
        <div className="service-list-7">
            <div className="price-list-details-services">
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList7.service5}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList7.service5Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList7.service5Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList7.service5Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList7.service6}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList7.service6Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList7.service6Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList7.service6Price}
                        </span>
                    </div>
                </div>
                <div className="price-list-details-services-container">
                    <div className="price-list-details-services-item">
                        <div className="price-list-details-services-name">
                            <span className="price-list-details-services-name">
                                {serviceList7.service7}
                            </span>
                            <span className="price-list-details-services-name-notice">
                                
                            </span>
                        </div>
                        <div className="price-list-details-services-time">
                            <span className="price-list-details-services-time">
                                {serviceList7.service7Time}
                            </span>
                        </div>
                        <div className="price-list-details-services-description">
                            <span className="price-list-details-services-description">
                                {serviceList7.service7Description}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-price">
                        <span className="price-list-addition-info">
                            
                        </span>
                        <span className="price-list-details-services-price">
                           £{serviceList7.service7Price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}