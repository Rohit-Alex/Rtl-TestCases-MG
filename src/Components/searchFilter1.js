import { Button } from 'antd';
import React, { useState } from 'react'
import { PxToRem } from '../utils';
import { MonthYearSelector } from './MonthYearSelector';

function SearchFilter1() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startMonth, setStartMonth] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endMonth, setEndMonth] = useState('')
    const [endYear, setEndYear] = useState('')

    const changeStartDateMonth = (value) => {
        setStartMonth(value)
    }

    const changeEndDateMonth = (value) => {
        setEndMonth(value)
    }

    const changeEndYear = (value) => {
        setEndYear(value)
    }

    const changeStartYear = (value) => {
        setStartYear(value)
    }

    const WrapperHandleFilterByDate = () => {
    }

    return (
    <div>
            <div>
                <div
                    >
                    <div>
                        <div divor='#515151' fontSize={PxToRem(12)} lineHeight={PxToRem(15)}>
                            {('FROM').toUpperCase()}
                        </div>
                    </div>
                    <div paddingLeft={PxToRem(7)}>
                        <div divor='#515151' fontSize={PxToRem(12)} lineHeight={PxToRem(15)}>
                            {('TO').toUpperCase()}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <MonthYearSelector
                            dataTestId='start-date'
                            selectedDate={startDate}
                            maxDate={new Date(endDate)}
                            handleChangeMonth={changeStartDateMonth}
                            handleChangeYear={changeStartYear}
                            handleDateChange={(date) => {
                                console.log(date, 'start date')
                                setStartDate(date)
                            }}
                        />
                        <div>
                            <Button
                                variant='primary-button'
                                style={{ width: PxToRem(80), justifyContent: 'center' }}
                                onClick={WrapperHandleFilterByDate}>
                                {('APPLY')}
                            </Button>
                        </div>
                    </div>
                    <div>
                        <MonthYearSelector
                            dataTestId='end-date'
                            selectedDate={endDate}
                            handleChangeMonth={changeEndDateMonth}
                            handleChangeYear={changeEndYear}
                            handleDateChange={(date) => {
                                setEndDate(date)
                            }}
                            minDate={new Date(startDate)}
                        />
                        <div>
                            <Button
                                variant='secondary-button'
                                background='#f2f2f2'
                                divor='#666'
                                style={{ width: PxToRem(80), justifyContent: 'center' }}
                                onClick={() => {
                                    // setSearchBy('');
                                }}>
                                {('CANCEL')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default SearchFilter1