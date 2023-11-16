import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonFullListOfOurServices(){
    const content = "Full list of our services";

    return <>
        <Link href={button.button5LinkTo} legacyBehavior>
                <div className="button-model-1">
                    {button.button5Content}
                </div>
            </Link>
    </>;
}