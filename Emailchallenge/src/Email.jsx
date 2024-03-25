export default function Email(props) {
    return (
        <div className="email">
            <p>Hi {props.name},</p>

            <p className="p1">
                I wanted to let you know as soon as possible that I will be staying home from work today.
            </p>
            <p className="p2">
                Unfortunately, I developed a stomach bug that has made it very difficult to get work done.
            </p>
            <p className="p3">
                I went to urgent care last night and was told it should subside within {props.numberOfHours} hours. I do not expect to be online throughout the day.
            </p>
            <p className="p4">
                While I do plan to be back in the office tomorrow, I’ve asked Kelly to take over for me today in case any emergencies arise. I had an important call scheduled with a supplier, but Daniel has agreed to manage the meeting.
            </p>
            <p className="p5">
                Please let me know of any additional steps you’d like me to take to ensure the day runs as smoothly as possible in my absence.
            </p>

            <p>Thank you,</p>
            <p>{props.name}</p>
        </div>
    )
}