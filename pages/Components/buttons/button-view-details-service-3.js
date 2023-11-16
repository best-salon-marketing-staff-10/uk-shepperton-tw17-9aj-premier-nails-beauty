import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService3(){
    return <>
        <div className="button-view-details-service-3-to-mobile">
            <Link href={button.button8LinkToMobile} legacyBehavior>
                <div className="button-model-2">
                    {button.button8Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-3-to-tablet">
            <Link href={button.button8LinkToTablet} legacyBehavior>
                <div className="button-model-2">
                    {button.button8Content}
                </div>
            </Link>
        </div>
        <div className="button-view-details-service-3-to-desktop">
            <Link href={button.button8LinkToDesktop} legacyBehavior>
                <div className="button-model-2">
                    {button.button8Content}
                </div>
            </Link>
        </div>
    </>;
}