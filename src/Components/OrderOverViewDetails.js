// import { useEffect, useRef } from "react";
import TransactionOverview from "./TransactionOverview";

const OrderOverviewDetails = ({ data }) => {
    // const renderCount = useRef(1)
    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1
    // }, [])

    // if (renderCount.current > 1) {
    //     return
    // }
    return (
        <div>
            This should work.
            <div>orderNumber: {data.orderNumber}</div>
            <div>Product: {data.product}</div>
            <TransactionOverview sellerOrderLineId={data.sellerOrderLineId}/>
        </div>
    );
};

export default OrderOverviewDetails;
