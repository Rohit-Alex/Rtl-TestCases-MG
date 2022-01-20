import React from 'react'
import { Card, Timeline, Space, Typography } from 'antd'
import Exceptions from './Exceptions'
import TimeLineDetails from './Timeline'
import { traceFlow } from '../utils'

const { Text } = Typography

const Home = () => {
    
    const getTimeLineColor = (loglevel) => {
        switch (loglevel) {
            case 'WARN':
                return 'gold'
            case 'ERROR':
                return 'red'
            default:
                return 'blue'
        }
    }

    const exceptions = traceFlow.find((trace) => trace.groupCode === 'EXCEPTIONS')

    return (
        <Card className="audit-hoverable" title="Settlement Flow" data-testid='Home-test-id'>
            <Space direction="vertical" size={'large'}>
                <Exceptions exceptions={exceptions} />
                <Timeline data-testid='Timeline-color-test-id'>
                    {traceFlow
                        .filter((trace) => trace.groupCode !== 'EXCEPTIONS' && trace.groupCode)
                        .map((traces) => {
                            const value = traces.data
                            const color = getTimeLineColor(traces.logLevel)
                            return (
                                <Timeline.Item
                                    data-testid="timeline-css"
                                    className={`timeline-css timeline-${color}`}
                                    key={traces.groupCode}
                                    color={color}
                                >
                                    <Text level={5} type="primary">
                                        {(traces.groupCode)}
                                    </Text>
                                    <TimeLineDetails traceKey={traces.groupCode} value={value} />
                                </Timeline.Item>
                            )
                        })}
                </Timeline>
            </Space>
        </Card>
    )
}

export default Home