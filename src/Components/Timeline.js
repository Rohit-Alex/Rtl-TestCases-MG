import React from 'react'
import { Card, Space } from 'antd'

import EventProcessing from './EventProcessing'
import RuleTriggered from './RulesTriggered'
import RuleComputation from './RuleComputation'
import Exceptions from './Exceptions'
import Empty from './Empty'
import { constructMessage } from '../utils'


const TimeLineDetails = ({ value, traceKey }) => {

    const getStageComponent = (key, value) => {
        switch (key) {
            case 'EVENT_PROCESSING':
                return <EventProcessing data={value} />
            case 'RULES_TRIGGERED':
                return <RuleTriggered data={value} />
            case 'DATA_ENRICHMENT':
                return <div>Data enrizhment</div>
            case 'RULE_EVALUATION':
                return <div>Rule evaluation</div>
            case 'RULE_COMPUTATION':
                return <RuleComputation data={value} />
            case 'TRANSACTION_CREATION':
                return <div>Transacin</div>
            default:
                return <Card><Empty image='simple' description={('NO_STAGE_DATA')} /></Card>
        }
    }


    return <Space direction='vertical' style={{ width: '100%' }} data-testid='TimeLine-test-id'>
        <Exceptions exceptions={constructMessage(value.logLevel, value.message)} />
        {getStageComponent(traceKey, value)}
    </Space>

}


export default TimeLineDetails