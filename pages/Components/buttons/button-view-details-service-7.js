import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService7(){
    return <>
        <div className="button-view-details-service-7-to-mobile">
            <Link href={button.button12LinkToMobile} legacyBehavior>
                <div className="button-model-2">
                    {button.button12Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-7-to-tablet">
            <Link href={button.button12LinkToTablet} legacyBehavior>
                <div className="button-model-2">
                    {button.button12Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-7-to-desktop">
            <Link href={button.button12LinkToDesktop} legacyBehavior>
                <div className="button-model-2">
                    {button.button12Content}
                </div>
            </Link>
        </div>
    </>;
}