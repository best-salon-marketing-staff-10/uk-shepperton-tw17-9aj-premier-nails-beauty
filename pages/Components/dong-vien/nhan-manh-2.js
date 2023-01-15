import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function NhanManh2(){
    return(
        <>
            <div className="nhan-manh-2-background">
                <div className="nhan-manh-content">
                    <div className="nhan-manh-content-wrapper">
                        <h2 className="nhan-manh-content-header">
                            {pageContent.section5Heading}
                        </h2>
                        <div className="nhan-manh-content-description">
                            {pageContent.section5Description}
                        </div>
                    </div>
                    <div>
                        <img alt={imageAlt.section5Image1Alt} src={images.section5Image1} />
                    </div>
                </div>
            </div>
        </>
        
    )
}