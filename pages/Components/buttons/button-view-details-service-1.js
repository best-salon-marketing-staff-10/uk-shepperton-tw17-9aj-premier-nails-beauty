import Link from 'next/link';
import { button } from '/pages/core/info';


export default function ButtonViewDetailsService1(){
    
    return(
        <>
            <div className="button-view-details-service-1-to-mobile">
                <Link href={button.button6LinkToMobile}>
                    <div className="button-model-2">
                        {button.button6Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-tablet">
                <Link href={button.button6LinkToTablet}>
                    <div className="button-model-2">
                        {button.button6Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-1-to-desktop">
                <Link href={button.button6LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button6Content}
                    </div>
                </Link>
            </div>
        </>
    )
}