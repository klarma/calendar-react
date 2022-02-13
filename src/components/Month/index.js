import Week from "../Week";
import StyledMonth from "./styled";

const Month = ({ days, daysOfMonth }) => {
    const amountWeeksOfMonth = 6;
    const indexOfWeeks = [...Array(amountWeeksOfMonth).keys()];

    return (
        <>
            <StyledMonth className="month">
                {indexOfWeeks.map(indexOfWeek => (
                    <Week days={days} key={indexOfWeek} />
                ))}
            </StyledMonth>
        </>
    )
};

export default Month;
