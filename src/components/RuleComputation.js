import React from 'react'
import { Card, Typography, Space } from 'antd'
import HorizontalCards from './HorizontalCards';

const { Title } = Typography;

const RuleComputation = ({ data }) => {

    return (
        <Card bordered={false} data-testid='rule-computation-testid'>
            <Space direction='vertical' size={'middle'}>
                {Object.keys(data).map((transactionKey, i) => {
                    const value = data[transactionKey]
                    return <div key={`${transactionKey}_${i}`}>
                        <Title level={5} title='Transaction Type Name'>{transactionKey}</Title>
                        <HorizontalCards options={value} />
                    </div>
                })}
            </Space>
        </Card>
    )
}



export default RuleComputation