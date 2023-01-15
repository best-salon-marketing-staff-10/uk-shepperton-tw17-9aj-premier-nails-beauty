import Link from 'next/link';
import { button } from '/pages/core/info';

export default function Button3(){
    return(
        <>
            <Link href={button.button3LinkTo}>
                <div className="button-model-1">
                    {button.button3Content}
                </div>
            </Link>
        </>
    )
}