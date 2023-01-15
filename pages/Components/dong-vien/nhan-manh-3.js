import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function NhanManh3(){
    return(
        <>
            <div className="nhan-manh-3-background">
                <div className="nhan-manh-content">
                    <div className="nhan-manh-content-wrapper">
                        <h2 className="nhan-manh-content-header">
                            {pageContent.section6Heading}
                        </h2>
                        <div className="nhan-manh-content-description">
                            {pageContent.section6Description}
                        </div>
                        <div>
                            <img alt={imageAlt.section6Image1Alt} src={images.section6Image1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}