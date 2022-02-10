import Day from "../Day";

const Week = ({ days }) => (
    <div className="week">
        {days.map(day =>
            <Day name={day} key={day} />
        )}
    </div>
);

export default Week;
