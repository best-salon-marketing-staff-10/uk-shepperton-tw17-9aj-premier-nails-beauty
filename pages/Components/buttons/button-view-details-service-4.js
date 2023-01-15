import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService4(){
    return(
        <>
            <div className="button-view-details-service-4-to-mobile">
                <Link href={button.button9LinkToMobile}>
                    <div className="button-model-2">
                        {button.button9Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-tablet">
                <Link href={button.button9LinkToTablet}>
                    <div className="button-model-2">
                        {button.button9Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-4-to-desktop">
                <Link href={button.button9LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button9Content}
                    </div>
                </Link>
            </div>
        </>
    )
}