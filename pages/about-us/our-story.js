import { pageContent } from '/pages/core/info';

export default function OurStory(){
    return(
        <>
        <div className="our-story">
            <div className="our-story-block">
                        <h1 className="our-story-heading">
                            {pageContent.ourStoryHeading}
                        </h1>
                        <div className="our-story-description">
                            <p className="our-story-description">
                            {pageContent.ourStoryDescription}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
