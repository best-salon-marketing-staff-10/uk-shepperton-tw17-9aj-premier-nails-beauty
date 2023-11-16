import Link from 'next/link';
import { button } from '/pages/core/info';

export default function Button2(){
    return <>  
        <Link href={button.button2LinkTo} legacyBehavior>
            <div className="button-model-1">
                {button.button2Content}
            </div>
        </Link>
    </>;
}