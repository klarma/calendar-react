import { Month } from "./Month";

export const Year = ({ days }) => {
    const amountMonthsOfYear = 12;
    const indexOfMonths = [...Array(amountMonthsOfYear).keys()];
    
    return (
        <>
            {
                indexOfMonths.map(indexOfMonth => (
                    <Month days={days} key={indexOfMonth} />
                ))
            }
        </>
    )
};