import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import DescriptionWrapper from './Descriptions'
import SpinnerContainer from './Spinner'
import { fetchMethod } from '../utils'

const GeneralInfo = () => {
    const [rowData, setRowData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllData = async () => {
        try {
            const data = await fetchMethod('https://jsonplaceholder.typicode.com/todos')
            setRowData(data.generalInfo)
        }
        catch(err) {
            console.log(err, 'err')
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])


    return (
        <div className="generalInfo" data-testid='generalInfo-testid'>
            {isLoading ? (
                <SpinnerContainer isLoading={isLoading} />
            ) : (
                <Card bordered={false} className="audit-hoverable" title="General Information">
                    <DescriptionWrapper
                        options={{ ...rowData, transactionStatus: rowData.transactionStatus ? ('CREATED') : ('NOT_CREATED') }}
                        column={6}
                        layout="vertical"
                        bordered
                    />

                </Card>
            )}
        </div>
    )
}

export default GeneralInfo