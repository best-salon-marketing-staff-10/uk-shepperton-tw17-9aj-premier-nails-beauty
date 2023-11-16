import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from '/pages/core/info';

export default function Button4(){
    const content = "Find us";
    return <>
        <div className="button-4">
            <Link href={button.button4LinkTo} legacyBehavior>
                <div className="button-model-1">
                    {button.button4Content}
                </div>
            </Link>
        </div>
    </>;
}