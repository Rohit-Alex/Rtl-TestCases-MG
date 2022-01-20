import React from 'react'
import { Card } from 'antd'
import DescriptionWrapper from './Descriptions'

const EventProcessing = ({ data }) => {
    return (
        <Card bordered={false} data-testid="eventProcessing-test-id">
            <DescriptionWrapper options={data} span={3} />
        </Card>
    )
}




export default EventProcessing