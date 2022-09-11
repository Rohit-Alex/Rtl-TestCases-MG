import { Input } from 'antd'
import { debounce } from 'lodash';
import React, { useState } from 'react'
import { useCallback } from 'react';

const DebounceMethod = () => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedSave = useCallback(
        debounce((nextVal) => console.log('inside debounce after 400', nextVal), 400),
        []
    );
    const handleSearch = (e) => {
        const nextValue = e.target.value 
        setSearchValue(nextValue)
        debouncedSave(nextValue);
    }
  return (
      <Input placeholder='SEARCH_RULE_NAME' onChange={handleSearch} value={searchValue}/>
  )
}

export default DebounceMethod