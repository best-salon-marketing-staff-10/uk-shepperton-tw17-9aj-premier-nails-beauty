import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService6(){
    return(
        <>
            <div className="button-view-details-service-6-to-mobile">
                <Link href={button.button11LinkToMobile}>
                    <div className="button-model-2">
                        {button.button11Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-tablet">
                <Link href={button.button11LinkToTablet}>
                    <div className="button-model-2">
                        {button.button11Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-6-to-desktop">
                <Link href={button.button11LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button11Content}
                    </div>
                </Link>
            </div>
        </>
    )
}