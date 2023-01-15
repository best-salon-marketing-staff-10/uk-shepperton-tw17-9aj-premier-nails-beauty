import NavDropdown from 'react-bootstrap/NavDropdown';
import Button3 from '/pages/Components/buttons/button-3.js';
import { processedInfo } from '/pages/core/info';

export default function Offers(){
    return(
        <>
            <div className="offers">
                <div className="offers-content-text">
                        <div className="offers-title">
                            <h1 className="title-1">
                                {processedInfo.offerTitle}
                            </h1>
                            <div className="offers-divider">
                                <NavDropdown.Divider /> 
                            </div>
                        </div>
                    <div className="offers-description">
                        <div>
                            {processedInfo.offerDescription}
                        </div>
                        <div className="offers">
                            <div className="offers-heading">
                                {processedInfo.offerHeading}
                            </div>
                            <div className="offers-content">
                                <div>
                                    {processedInfo.offerContent1}
                                </div>
                                <div>
                                    {processedInfo.offerContent2}
                                </div>
                                <div>
                                    {processedInfo.offerContent3}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="button">
                        <Button3 />
                    </div>
                </div>
            </div>
        </>
    );
}