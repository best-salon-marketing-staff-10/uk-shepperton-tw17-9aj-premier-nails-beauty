import Button3 from '/pages/Components/buttons/button-3.js';
import { processedBusinessOpeningTime } from '/pages/core/info';
import { pageContent } from '/pages/core/info';


export default function TimeSchedule(){
    return(
        <>
            <div className="time-schedule">
                <div className="time-schedule-text">
                    <div className="time-schedule-title">
                        {pageContent.timeScheduleHeading}
                    </div>
                    <div className="time-schedule-description">
                            <div className="time-schedule-description">
                                {processedBusinessOpeningTime.workingTimeMon}
                                <br />
                                {processedBusinessOpeningTime.workingTimeTue}
                                <br />
                                {processedBusinessOpeningTime.workingTimeWed}
                                <br />
                                {processedBusinessOpeningTime.workingTimeThu}
                                <br />
                                {processedBusinessOpeningTime.workingTimeFri}
                                <br />
                                {processedBusinessOpeningTime.workingTimeSat}
                                <br />
                                {processedBusinessOpeningTime.workingTimeSun}
                            </div>   
                    </div>
                </div>
                <div className="button">
                    <Button3 />
                </div>
            </div>
        </>
    )
}