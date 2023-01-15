import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService5(){
    return(
        <>
            <div className="button-view-details-service-5-to-mobile">
                <Link href={button.button10LinkToMobile}>
                    <div className="button-model-2">
                        {button.button10Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-tablet">
                <Link href={button.button10LinkToTablet}>
                    <div className="button-model-2">
                        {button.button10Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-5-to-desktop">
                <Link href={button.button10LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button10Content}
                    </div>
                </Link>
            </div>
        </>
    )
}