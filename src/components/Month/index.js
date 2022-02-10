import Week from "../Week";
import "./style.css";

const Month = ({ days, daysOfMonth }) => {
    const amountWeeksOfMonth = 6;
    const indexOfWeeks = [...Array(amountWeeksOfMonth).keys()];

    return (
        <>
            <div className="month">
                {indexOfWeeks.map(indexOfWeek => (
                    <Week days={days} key={indexOfWeek} />
                ))}
            </div>
        </>
    )
};

export default Month;
