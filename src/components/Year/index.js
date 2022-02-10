import Month from "../Month";

const Year = ({ days }) => {
    const amountMonthsOfYear = 12;
    const indexOfMonths = [...Array(amountMonthsOfYear).keys()];

    return (
        <>
            {
                indexOfMonths.map(indexOfMonth => (
                    <Month
                        days={days}
                        key={indexOfMonth}
                        daysOfMonth={new Date(2022, indexOfMonth + 1, 0).getDate()}
                    />
                ))
            }
        </>
    )
};

export default Year;
