import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService2(){
    return <>
        <div className="button-view-details-service-2-to-mobile">
            <Link href={button.button7LinkToMobile} legacyBehavior>
                <div className="button-model-2">
                    {button.button7Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-2-to-tablet">
            <Link href={button.button7LinkToTablet} legacyBehavior>
                <div className="button-model-2">
                    {button.button7Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-2-to-desktop">
            <Link href={button.button7LinkToDesktop} legacyBehavior>
                <div className="button-model-2">
                    {button.button7Content}
                </div>
            </Link>
        </div>
    </>;
}