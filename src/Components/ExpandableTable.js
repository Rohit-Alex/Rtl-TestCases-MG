import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import OrderOverviewDetails from "./OrderOverViewDetails";
import { useDemoCounterContext } from "../Context/DemoContex";

const dataSource = [
    {
        sellerOrderLineId: 'four',
        orderNumber: "1000584921",
        tenant: "5f66269c-6d96-48fb-abe0-e91ae769c54c",
        orderDate: "2022-07-06T08:30:40.994774Z",
        product: "Roberta Allen Mug Colibri Turquesa",
        sellerSku: "881333151",
        price: {
            currency: "CLP",
            centAmount: 3895,
            fraction: 1
        },
        commission: {
            currency: "CLP",
            centAmount: -253,
            fraction: 1
        },
        fees: {
            currency: "CLP",
            centAmount: 0,
            fraction: 1
        },
        payoutAmount: {
            currency: "CLP",
            centAmount: 3642,
            fraction: 1
        },
        operationalStatus: "Delivered",
        payoutStatus: "UNPAID",
        offeringId: "881333151",
        unitPrice: {
            currency: "CLP",
            centAmount: 3895,
            fraction: 1
        },
        key: 4
    },
    {
        sellerOrderLineId: 'three',
        orderNumber: "1054347752",
        tenant: "5f66269c-6d96-48fb-abe0-e91ae769c54c",
        orderDate: "2022-05-24T12:33:50.723296Z",
        product: "SHORT ALGODON N DISHORTCOT BLACK 12",
        sellerSku: "882281375",
        price: {
            currency: "CLP",
            centAmount: 7990,
            fraction: 1
        },
        commission: {
            currency: "CLP",
            centAmount: -519,
            fraction: 1
        },
        fees: {
            currency: "CLP",
            centAmount: 0,
            fraction: 1
        },
        payoutAmount: {
            currency: "CLP",
            centAmount: 7471,
            fraction: 1
        },
        operationalStatus: "Delivered",
        payoutStatus: "UNPAID",
        offeringId: "882281375",
        unitPrice: {
            currency: "CLP",
            centAmount: 7990,
            fraction: 1
        },
        key: 3
    },
    {
        sellerOrderLineId: 'two',
        orderNumber: "1000197979",
        tenant: "5f66269c-6d96-48fb-abe0-e91ae769c54c",
        orderDate: "2021-12-23T21:21:43.056882Z",
        product: "Rosen Cama Americana Beat 2 Plazas Base Dividida + Textil",
        sellerSku: "4612217",
        price: {
            currency: "CLP",
            centAmount: 264990,
            fraction: 1
        },
        commission: {
            currency: "CLP",
            centAmount: -17549,
            fraction: 1
        },
        fees: {
            currency: "CLP",
            centAmount: 4990,
            fraction: 1
        },
        payoutAmount: {
            currency: "CLP",
            centAmount: 252431,
            fraction: 1
        },
        operationalStatus: "Delivered",
        payoutStatus: "UNPAID",
        offeringId: "4612217",
        unitPrice: {
            currency: "CLP",
            centAmount: 264990,
            fraction: 1
        },
        key: 2
    },
    {
        sellerOrderLineId: 'one',
        orderNumber: "1000192813",
        tenant: "5f66269c-6d96-48fb-abe0-e91ae769c54c",
        orderDate: "2021-12-21T14:16:40.379681Z",
        product: "Rosen Cama Americana Beat 2 Plazas Base Dividida + Textil",
        sellerSku: "4612217",
        price: {
            currency: "CLP",
            centAmount: 264990,
            fraction: 1
        },
        commission: {
            currency: "CLP",
            centAmount: -17549,
            fraction: 1
        },
        fees: {
            currency: "CLP",
            centAmount: 4990,
            fraction: 1
        },
        payoutAmount: {
            currency: "CLP",
            centAmount: 252431,
            fraction: 1
        },
        operationalStatus: "Delivered",
        payoutStatus: "UNPAID",
        offeringId: "4612217",
        unitPrice: {
            currency: "CLP",
            centAmount: 264990,
            fraction: 1
        },
        key: 1
    }
];

const columns = [
    {
        title: "ORDER_NO",
        label: "orderNumber",
        dataIndex: "orderNumber",
        key: "orderNumber",
        render: (e) => (
            <a
                href={`${"https://www.google.com"}/order/index/order-detail/id`}
                target="_blank"
            >
                {e}
            </a>
        )
    },
    {
        title: "ORDER_DATE",
        label: "orderDate",
        dataIndex: "orderDate",
        align: "center",
        render: (orderDate) => new Date(orderDate).toDateString()
    },
    {
        title: "PRODUCT",
        label: "product",
        dataIndex: "product",
        align: "center"
    },
    {
        title: "SELLER_SKU",
        label: "sellerSku",
        dataIndex: "sellerSku",
        align: "center",
        width: "120px"
    },
    {
        title: "PRICE",
        label: "price",
        dataIndex: "price",
        render: (price) => price,
        align: "center"
    },
    {
        title: "COMMISSION",
        label: "commission",
        dataIndex: "commission",
        render: (commission) => {
            return commission?.centAmount;
        },
        align: "center"
    },
    {
        title: "FEES",
        label: "fees",
        dataIndex: "fees",
        render: (fees) => {
            return fees?.centAmount;
        },
        align: "center"
    },
    {
        title: "PAYOUT_AMOUNT",
        label: "payoutAmount",
        dataIndex: "payoutAmount",
        render: (payoutAmount) => {
            return payoutAmount?.centAmount;
        },
        align: "center"
    },
    {
        title: "OPERATION_STATUS",
        label: "operationalStatus",
        dataIndex: "operationalStatus",
        align: "center"
    },
    {
        title: "PAYOUT_STATUS",
        label: "payoutStatus",
        dataIndex: "payoutStatus",
        width: "110px",
        align: "center"
    }
];

export default function ExpandableTable({ helperFlag, setHelperFlag }) {
    const [expandedRow, setExpandedRow] = useState(undefined);
    const { updateCurrentExpandedRow } = useDemoCounterContext()

    const expandedRowRender = (record) => {
        return (
            <div className="order-sub-details">
                <OrderOverviewDetails data={record} />
            </div>
        )
    }

    
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            onExpand={(isExpanded, record) => {
                setExpandedRow(isExpanded ? record.key : undefined);
            }}
            expandedRowRender={expandedRowRender}
            expandedRowKeys={[expandedRow]}
            onExpandedRowsChange={(expandedRow) => { 
                const currentExpandedRowKey = expandedRow.slice(-1)[0]
                const requiredData = dataSource.find(e => e.key === currentExpandedRowKey)
                updateCurrentExpandedRow(requiredData)
            }}
        />
    );
}
