import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService7(){
    return <>
        <div className="button-view-details-service-8-to-mobile">
            <Link href={button.button13LinkToMobile} legacyBehavior>
                <div className="button-model-2">
                    {button.button13Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-8-to-tablet">
            <Link href={button.button13LinkToTablet} legacyBehavior>
                <div className="button-model-2">
                    {button.button13Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-8-to-desktop">
            <Link href={button.button13LinkToDesktop} legacyBehavior>
                <div className="button-model-2">
                    {button.button13Content}
                </div>
            </Link>
        </div>
    </>;
}