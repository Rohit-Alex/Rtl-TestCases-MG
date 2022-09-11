import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

let temp = [
    { boardId: "2", class: "X" },
    { boardId: "3", class: "V" }
];

const One = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(100);
    const [dataToDisplay, setDataToDisplay] = useState([])
    // const [boardData, setBoardData] = useState(temp)
    const boardData = useMemo(() => temp, [temp.length])
    useEffect(() => {
        setDataToDisplay(boardData)
    }, [boardData]);
    return (
        <div>
            <Button
                variant="outlined"
                value={counter}
                onClick={() => {
                    temp = [...temp, { boardId: counter + 4, class: "VI" }]
                    setCounter((prev) => prev + 1);
                }}
            >
                Click{" "}
            </Button>
            <h2>{counter}</h2>
            <Button
                variant="contained"
                value={counter1}
                onClick={() => {
                    temp = [...temp]
                    setCounter1((prev) => prev + 1);
                }}
            >
                Click1{" "}
            </Button>
            <h2>{counter1}</h2>
            {dataToDisplay.map((e) => (
                <div key={e.boardId}>
                    {e.boardId} {e.class}
                </div>
            ))}
        </div>
    );
};
export default One;
