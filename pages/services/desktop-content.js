import Button3 from '/pages/Components/buttons/button-3';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule';
import CustomerReview from '/pages/Components/customer-review';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1';
import Service1 from '/pages/services/service-1';
import Service2 from '/pages/services/service-2';
import Service3 from '/pages/services/service-3';
import Service4 from '/pages/services/service-4';
import Service5 from '/pages/services/service-5';
import Service6 from '/pages/services/service-6';
import Service7 from '/pages/services/service-7';
import Service1PriceList from '/pages/services/service-1-price-list';
import Service2PriceList from '/pages/services/service-2-price-list';
import Service3PriceList from '/pages/services/service-3-price-list';
import Service4PriceList from '/pages/services/service-4-price-list';
import Service5PriceList from '/pages/services/service-5-price-list';
import Service6PriceList from '/pages/services/service-6-price-list';
import Service7PriceList from '/pages/services/service-7-price-list';
import Offers from '/pages/Components/offers/offers';

export default function DesktopContent(){
    return(
        <>
            <div className="services-list">
                <div className="services-list-1">
                    <div className="service-container">
                        <div>
                                <Service1 />
                        </div>
                        <div id="d-service-list-1">
                            <Service1PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                    <div className="services-list-2">
                        <div className="service-container">
                        <div>
                            <Service2 />
                        </div>
                        <div id="d-service-list-2">
                            <Service2PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                <div className="services-list-3">
                    <div className="service-container">
                        <div>
                            <Service3 />
                        </div>
                        <div id="d-service-list-3">
                            <Service3PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                <div className="services-list-4">
                    <div className="service-container">
                        <div>
                            <Service4 />
                        </div>
                        <div id="d-service-list-4">
                            <Service4PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                
                <div className="services-list-5">
                    <div className="service-container">
                        <div>
                            <Service5 />
                        </div>
                        <div id="d-service-list-5">
                            <Service5PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                
                <div className="services-list-6">
                    <div className="service-container">
                        <div>
                            <Service6 />
                        </div>
                        <div id="d-service-list-6">
                        <Service6PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>

                <div className="services-list-7">
                    <div className="service-container">
                        <div>
                            <Service7 />
                        </div>
                        <div id="d-service-list-7">
                        <Service7PriceList />
                        </div>
                        <div className="button">
                            <Button3 />
                        </div>
                    </div>
                </div>
                <div>
                    <TimeSchedule />
                </div>
                <div>
                    <Offers />
                </div>
                
            </div>
        </>
    )
}