import { FunctionComponent } from "react";
import "./style.css";

interface DayProps {
    name: string;
}

const Day: FunctionComponent<DayProps> = ({ name }) => {
    return (
        <div className="day">{name}</div>
    )
};

export default Day;
