import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3.js';
import Button4 from '/pages/Components/buttons/button-4.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function Location(){

    return <>
        <div className="location">
            <div className="location-image">
                <img alt={imageAlt.LocationImage1Alt} src={images.LocationImage1} />
            </div>
            <div className="location-text">
                <h2 className="location-title">
                    {pageContent.locationHeading}
                </h2>
                <div className="location-header">
                    {changedInfo.businessAddressLevel2}
                </div>
                <div className="location-description">
                    <div className="location-description">
                        {changedInfo.businessAddressLevel1}
                        <br />
                        {changedInfo.businessAddressLevel2}
                        <br />
                        {changedInfo.businessPostCode}
                    </div>
                    <Link href={processedInfo.callBusiness} legacyBehavior>
                        <div className="phone-tiem">
                            {changedInfo.businessPhoneNumber}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="button">
                <Button4 />
            </div>
        </div>
    </>;
}