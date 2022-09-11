// import styled from "styled-components";
import { getMonthNames, PxToRem } from "../utils";
import DatePickerComponent from "./DateRange";


export const MonthYearSelector = ({
    selectedDate,
    maxDate,
    minDate,
    dataTestId,
    handleDateChange,
    handleChangeMonth,
    handleChangeYear
}) => {
    const years = Array(20)
        .fill(0)
        .map((_, idx) => new Date().getFullYear() + idx);
    const monthNames = getMonthNames();

    return (
        <>
            {/* <div>
                <Select
                    value={monthNames[selectedDate.getMonth()]}
                    onChange={({ target: { value } }) => handleChangeMonth(monthNames.indexOf(value))}>
                    {monthNames.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
                <Select value={selectedDate.getFullYear()} onChange={({ target: { value } }) => handleChangeYear(value)}>
                    {years.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
            </div> */}
            <div>
                <DatePickerComponent
                    dataTestId={dataTestId}
                    height={PxToRem(270)}
                    width='100%'
                    margin={`${PxToRem(7)} 0 0 0`}
                    date={selectedDate}
                    maxDate={maxDate}
                    minDate={minDate}
                    handleChange={handleDateChange}
                />
            </div>
        </>
    );
};
