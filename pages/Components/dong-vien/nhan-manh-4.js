import Button2 from '/pages/Components/buttons/button-2';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function NhanManh4(){

    return(
        <>
            <div className="nhan-manh-4-background">
                <div className="nhan-manh-4-content-1">
                    <div className="nhan-manh-4-content-1-wrapper">
                        <h2 className="nhan-manh-4-content-header">
                            {pageContent.section7Heading}
                        </h2>
                        <div className="nhan-manh-4-content-description">
                            {pageContent.section7Description}
                        </div>
                        <div>
                            <Button2 />
                        </div>
                    </div>
                    <div className="nhan-manh-4-content-1-image">
                        <img alt={imageAlt.section7Image1Alt} src={images.section7Image1} />
                    </div>
                </div>
                
                <div className="nhan-manh-4-content-2">
                    <div className="nhan-manh-4-content-2-image">
                        <img alt={imageAlt.section7Image2Alt} src={images.section7Image2} />
                    </div>
                    <div className="nhan-manh-4-content-2-wrapper">
                        <div className="nhan-manh-4-content-wrapper">
                            <h2 className="nhan-manh-4-content-header-4">
                                {pageContent.section8Heading}
                            </h2>
                            <div className="nhan-manh-4-content-description">
                                {pageContent.section8Description}
                            </div>
                            <div>
                                <Button2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}