import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { button } from '/pages/core/info';


export default function Button1(){
    return <>
        <div className="learn-more-button-to-mobile">
            <Link href={button.button1LinkToMobile} legacyBehavior>
                <div className="button-model-1">
                    {button.button1Content}
                </div>
            </Link>
        </div>
        <div className="learn-more-button-to-tablet">
            <Link href={button.button1LinkToTablet} legacyBehavior>
                <div className="button-model-1">
                    {button.button1Content}
                </div>
            </Link>
        </div>
        <div className="learn-more-button-to-desktop">
            <Link href={button.button1LinkToDesktop} legacyBehavior>
                <div className="button-model-1">
                    {button.button1Content}
                </div>
            </Link>
        </div>
    </>;
}