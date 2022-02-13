import { FunctionComponent } from "react";
import StyledDay from "./styled";
interface DayProps {
    name: string;
};

const Day: FunctionComponent<DayProps> = ({ name }) => {
    return (
        <StyledDay>{name}</StyledDay>
    )
};

export default Day;
