import React from "react";

interface Props {
    number: number;
}

const Circle: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">
            <b>{number}</b>
        </div>
    );
}

export default Circle;