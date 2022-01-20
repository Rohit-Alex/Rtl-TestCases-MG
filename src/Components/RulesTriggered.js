import React from 'react'
import { Card } from 'antd'
import DescriptionWrapper from './Descriptions';
import HorizontalCards from './HorizontalCards'


const RuleTriggered = ({ data }) => {

    const { ruleList, ...rest } = data;
    return (
        <Card bordered={false} data-testid='RuleTriggered-test-id'>
            <DescriptionWrapper options={rest} span={3} />
            <HorizontalCards options={ruleList} />
        </Card>
    )
}


export default RuleTriggered