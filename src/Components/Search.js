import { Button } from '@mui/material';
import { Input, Select, DatePicker } from 'antd';
import React, { useState } from 'react';
const { Option } = Select

const options = [{ label: 'Mode', value: 'mode' }, { label: 'Number', value: 'number' }, { label: 'Transactions Created At', value: 'createdAt' }, { label: 'Seller line order id', value: 'sellerLineOrderId' }]

function Search({ handleSearch }) {

    const [filterValue, setFilterValue] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    return (
        <div data-testid="search-test">
            {filterValue === 'createdAt' ? ['startDate', 'endDate'].map((type, index) => 
                <DatePicker
                    format="DD-MM-YYYY"
                    placeholder={type === "startDate" ? ("SEARCH_START_DATE_PLACEHOLDER") : ("SEARCH_END_DATE_PLACEHOLDER")}
                    style={{ width: "300px" }}
                    onChange={(date) => {
                        if (type === 'startDate') setStartDate(date.toISOString())
                        else setEndDate(date.toISOString())
                    }}
                    data-testid={type === 'startDate' ? 'start-date' : 'end-date'}
                    key={index} 
                />) :
                <Input
                    name="search-input"
                    placeholder={("SEARCH_INPUT_PLACEHOLDER")}
                    defaultValue="eventId"
                    allowClear
                    value={searchValue}
                    style={{ width: "300px" }}
                    size="middle"
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                />
            }
            <Select
                placeholder={("SEARCH_SELECT_PLACEHOLDER")}
                style={{ width: 200 }}
                size="middle"
                allowClear
                value={filterValue}
                data-testid="search-testid"
                onChange={(value) => {
                    setFilterValue(value || "")
                }}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
            <Button 
                onClick={() => {
                    if(filterValue === 'createdAt') handleSearch(filterValue, {startDate, endDate})
                    else handleSearch(filterValue, searchValue)
                }}
                data-testid="search-button-testid"
            >   Search
            </Button>
        </div>
    )
}

export default Search;
