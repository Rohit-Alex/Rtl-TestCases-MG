// import es from 'date-fns/locale/es';
// import en from 'date-fns/locale/en-GB';
import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getMonthNames, PxToRem } from '../utils';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';


// registerLocale('es', es);
// registerLocale('en', en);

const DatePickerComponent = ({
    date,
    handleChange,
    datesDisabled,
    width,
    height,
    margin,
    monthPicker,
    maxDate,
    minDate,
    filterDate,
    isHoliday,
    dataTestId,
    locale = 'en'
}) => {
    const monthNames = getMonthNames();
    return (
        <Wrapper>
            <Form>
                <Form.Group controlId="date1">
            <DatePicker
                data-testid={dataTestId}
                placeholderText="date1"
                locale={locale}
                maxDate={maxDate}
                minDate={minDate}
                excludeDates={datesDisabled}
                dayClassName={isHoliday && (date => (isHoliday(date) ? 'react-datepicker__holiday' : ''))}
                filterDate={filterDate}
                renderCustomHeader={({ date, decreaseMonth, increaseMonth, changeMonth, changeYear }) => (
                    <Row>
                        <TransparentButton onClick={decreaseMonth}>
                            <span>ICON1</span>
                        </TransparentButton>
                        <Text>
                            {monthNames[date.getMonth()]}
                        </Text>
                        <TransparentButton onClick={increaseMonth}>
                            <span>ICON2</span>

                        </TransparentButton>
                    </Row>
                )}
                selected={date}
                onChange={handleChange}
                inline
                disabledKeyboardNavigation
                fixedHeight
            />
                    </Form.Group>
            </Form>
        </Wrapper>
    );
};

export default DatePickerComponent;

const Wrapper = styled.div`

`;

const TransparentButton = styled.button`
    
`

const Text = styled.button`
    color: 'pink';
    fontWeight: 500;
    fontSize: ${PxToRem(14)};
    lineHeight: ${PxToRem(24)}
`
const Row = styled.button`
    justifyContent:'space-between';
    padding: 0${PxToRem(8)}; 
    position:'relative';
`