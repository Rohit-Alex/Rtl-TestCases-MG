import { Button } from '@mui/material';

import { useEffect, useState } from 'react';
import { useDemoCounterContext } from '../Context/DemoContex';

const DemoCounter = () => {
    const { count, message, increment, reset } = useDemoCounterContext()
    const [dependency1, setDependency1] = useState(1)
    const [dependency2, setDependency2] = useState({})
    const handleIncrementAndReset = () => {
        reset()
        setDependency2({name: 'rohit'})
        setDependency1(1)
    }
    useEffect(() => {
        increment()
    }, [dependency1, JSON.stringify(dependency2)])
    return (
        <>
            <div className='demo-count-header'>
                <h4>{count}</h4>
                <span>{message}</span>
            </div>
            <Button variant="outlined" onClick={increment} className='mt-2 ml-4'>Increment</Button>
            <Button variant="outlined" onClick={handleIncrementAndReset} className='mt-2 ml-4'>Search</Button>
            <Button variant="outlined" onClick={() => setDependency1(prev => prev + 1) } className='mt-2 ml-4'>Increase page</Button>
        </>
    );
};

export default DemoCounter;
