import { useEffect, useState } from "react";
import { useDemoCounterContext } from "../Context/DemoContex";

const obj = {
    one: "Rohit",
    two: "Alex",
    three: 'Nirali',
    four: 'Mg'
};

const TransactionOverview = ({ sellerOrderLineId, helperFlag }) => {
    const { expandedRowData } = useDemoCounterContext()
    const [cachedMemory, setCachedMemory] = useState({})

    useEffect(() => {
        console.log("comp mounted")
        const memoizeOf = memoizedValue();
        if (sellerOrderLineId in cachedMemory) return
        const memoizedValueForArg = memoizeOf(sellerOrderLineId)
    }, [expandedRowData?.sellerOrderLineId])

    const memoizedValue = () => {
        let cache = {};
        return (value) => {
            console.log("inside memoized fun outer")
            if (value in cache) {
                console.log("inside cached fun outer")

                return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
            } else {
                console.log("inside cached fun calc")
                // some api call
                let result = obj[value];
                cache[value] = result;
                setCachedMemory(cache)
                return result;
            }
            
        };
    };

    return <div>My name is {cachedMemory[sellerOrderLineId]}</div>;
};

export default TransactionOverview;
