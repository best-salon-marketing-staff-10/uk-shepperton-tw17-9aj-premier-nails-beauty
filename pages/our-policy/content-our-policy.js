import Link from "next/link";
import { changedInfo } from "../core/info";
import { processedInfo } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function ContentOurPolicy(){
    return(
        <>
            <div className="content-our-policy">
                <h1 className="content-heading-h1">
                    {pageContent.contentOurPolicyHeadingMain}
                </h1>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall2}
                    </h2>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription2}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription22}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription23}
                    </p>
                </div>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall3}
                    </h2>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription3}
                    </div>
                </div>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall4}
                    </h2>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription41}
                        <a className="content-description-link-a" href={processedInfo.callBusiness}>
                            {changedInfo.businessPhoneNumber}
                        </a>
                        {pageContent.contentOurPolicyDescription42}
                    </div>
                </div>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall1}
                    </h2>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription1}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription12}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription13}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription14}
                    </p>
                </div>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall5}
                    </h2>
                    <div className="content-description">
                        {pageContent.contentOurPolicyDescription5}
                    </div>
                </div>
                <div className="content-block">
                    <h2 className="content-heading-h2">
                        {pageContent.contentOurPolicyHeadingSmall6}
                    </h2>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription6}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription61}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription62}
                    </p>
                    <p className="content-description">
                        {pageContent.contentOurPolicyDescription63}
                    </p>
                </div>
            </div>
        </>
    );
}