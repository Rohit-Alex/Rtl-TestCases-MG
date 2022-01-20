import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

let boardData = [
    { boardId: "2", class: "X" },
    { boardId: "3", class: "V" }
];

const One = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(100);
    const data = boardData;

    useEffect(() => {
        console.log("useEffect running");
    }, [data]);
    return (
        <div>
            <Button
                variant="outlined"
                value={counter}
                onClick={() => {
                    boardData = [...boardData, { boardId: counter + 4, class: "VI" }];
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
                    boardData = [];
                    setCounter1((prev) => prev + 1);
                }}
            >
                Click1{" "}
            </Button>
            <h2>{counter1}</h2>
            {data.map((e) => (
                <div key={e.boardId}>
                    {e.boardId} {e.class}
                </div>
            ))}
        </div>
    );
};
export default One;
