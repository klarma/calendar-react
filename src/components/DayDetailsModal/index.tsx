import { FunctionComponent, useState, useEffect } from "react";

interface DayDetailsModalProps {
    changeVisibility: ()=> void;
    numberOfWeek: number;
    nameOfMonth: string;
    weather: unknown;
}

const DayDetailsModal: FunctionComponent<DayDetailsModalProps> = ({changeVisibility}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(()=>{
        setIsVisible(!isVisible);
    },[isVisible]);

    return isVisible ? (
        <div>
            Details
        </div>
    ) : null
};

export default DayDetailsModal;
