// import { subDays } from "date-fns";
import { subDays } from "date-fns";
import { useCallback, useState } from "react";
import DatePickers from "./DatePickers";
// import "./styles.css";

export default function Nirali() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [clickedStartFirst, setClickedStartFirst] = useState(false)
    const [clickedEndFirst, setClickedEndFirst] = useState(false)

    const disabledDateForEndDate = current => {
        // setTimeout(() => {
            // console.log(startDate, 'disabled end date')
            if (!startDate) return current && current.valueOf() > new Date();
            else {
                // if (clickedEndFirst) return (current.valueOf() > new Date() || current < subDays(startDate, 1))
                // else 
                return current.valueOf() > new Date() || current.valueOf() < startDate;
            }
        // })
    };
    const disabledDateForStartDate = (current) => {
        return current && current.valueOf() > Date.now();
    };
    return (
        <div className="App">
            <DatePickers
                data-testid="startDate-test-id"
                format="YYYY-MM-DD"
                placeholder={"SEARCH_START_DATE_PLACEHOLDER"}
                style={{ width: "150px" }}
                disabledDate={disabledDateForStartDate}
                value={startDate}
                onChange={date => {
                    // reset when user clears start date i.e end date also gets null

                    if (!date) {
                        setClickedEndFirst(false)
                        setClickedStartFirst(false)
                        setStartDate("");
                    } else {
                        // if (!clickedStartFirst && !clickedEndFirst) setClickedStartFirst(true)
                        setStartDate(date);
                    }
                    setEndDate("");
                    // setClickedEndFirst(true)

                }}
            />
            <DatePickers
                data-testid="endDate-test-id"
                placeholder={"SEARCH_END_DATE_PLACEHOLDER"}
                style={{ width: "150px" }}
                disabledDate={disabledDateForEndDate}
                value={endDate}
                onChange={(date) => {
                    console.log('clicked on end date', date)

                    // if (clickedEndFirst) setClickedEndFirst(false)

                    
                    if (!date) {
                        setEndDate('');
                        // setStartDate('');
                    } else {
                        if (!clickedEndFirst && !clickedStartFirst) {
                            setClickedEndFirst(true)
                        }
                        setEndDate(date);
                    }
                }}
            />
        </div>
    );
}
