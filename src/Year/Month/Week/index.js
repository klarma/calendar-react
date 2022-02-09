import { Day } from "./Day";

export const Week = ({ days }) => (
    <div className="week">
        {days.map(day =>
            <Day name={day} key={day} />
        )}
    </div>
);
