import { Space, Table } from "antd"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useTransactionSearchContext } from "../Context/TransactionData"
import { TRANSACTION_DATA_COLUMN } from "../utils"
import Search from "./Search"
import DropdownList from './Dropdown'

const TransactionList = () => {
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [requestBody, setRequestBody] = useState({})

    const tenant  = 'sadasdswq13123'

    const {
        getTransactionSearch,
        resetDataOnSearch,
        transactionData,
        pagination,
        isLoading,
    } = useTransactionSearchContext()

    const handleSearch = async (key, value) => {
        await resetDataOnSearch()
        let body = { pageIndex: 1, pageSize: 20, tenant }

        if (typeof value === "object") {
            if (value.startDate) body = { ...body, startDate: value.startDate }
            if (value.endDate) body = { ...body, endDate: value.endDate }
        } else {
            if (key && value) body = { ...body, [key]: value }
        }
        setRequestBody(body)
        if (page === 1 && Object.keys(body).length >= 3)
            await getTransactionSearch(body)
        else setPage(1)
    }

    useEffect(() => {
        const getTransactionData = async () => {
            const defaultValues = {
                tenant,
                pageIndex: 1,
                pageSize: 20,
            }
            await getTransactionSearch({
                ...defaultValues,
                ...requestBody,
                pageIndex: page,
            })
        }
        getTransactionData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, tenant])

    const nextData = () => {
        if (page > pagination?.totalPages) {
            setHasMore(false)
            return
        }
        setPage((prev) => prev + 1)
    }

    const [filteredValues, setFilteredValues] = useState([])
    const [selectedValue, setSelectedValues] = useState(
        TRANSACTION_DATA_COLUMN.map((e) => e.dataIndex)
    )

    useEffect(() => {
        const updatedValues = TRANSACTION_DATA_COLUMN.filter((e) =>
            selectedValue.includes(e.dataIndex)
        )
        updatedValues.push({
            title: "Action",
            label: "action",
            dataIndex: "action",
            key: "action",
            render: () => <a href="events/details">{("VIEW")}</a>,
        })
        setFilteredValues(updatedValues)
    }, [selectedValue])

    const handleChangeCheckbox = (values) => {
        setSelectedValues(values)
    }
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
                <Search handleSearch={handleSearch} />
                <DropdownList
                    columnList={TRANSACTION_DATA_COLUMN}
                    selectedValue={selectedValue}
                    handleChangeCheckbox={handleChangeCheckbox}
                />
            </Space>
            <InfiniteScroll
                dataLength={transactionData?.length} // This is important field to render the next data
                next={nextData}
                hasMore={hasMore}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Table
                    loading={isLoading}
                    columns={filteredValues}
                    data={transactionData}
                    pagination={false}
                />
            </InfiniteScroll>
        </Space>
    )
}

export default TransactionList