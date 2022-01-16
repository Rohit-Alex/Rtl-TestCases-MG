import React from 'react'
import { Card, Timeline, Space, Typography } from 'antd'
import Exceptions from './Exceptions'
import TimeLineDetails from './Timeline'

const { Text } = Typography

const Home = () => {
    const traceFlow =  [
        {
            groupCode: 'EXCEPTIONS',
            groupOrder: 0,
            logLevel: 'INFO',
            data: {
                logLevel: 'WARN',
                message:
                'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
            },
        },
        {
            groupCode: 'EVENT_PROCESSING',
            groupOrder: 1,
            logLevel: 'INFO',
            data: {
                logLevel: 'error',
                message:
                'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                sellerOrderId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                sellerOrderLineId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                categoryId: 'G103',
            },
        },
        {
            groupCode: 'RULES_TRIGGERED',
            groupOrder: 2,
            logLevel: 'INFO',
            data: {
                rulesTriggeredCount: 2,
                ruleList: [
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit',
                        isRuleIgnored: false,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'CREDIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit and extra oofff',
                        isRuleIgnored: true,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'DEBIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit and extra oofff',
                        isRuleIgnored: true,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'DEBIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit and extra oofff',
                        isRuleIgnored: true,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'DEBIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit and extra oofff',
                        isRuleIgnored: true,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'DEBIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        ruleName: 'sales commission calculate - debit and extra oofff',
                        isRuleIgnored: true,
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'DEBIT',
                        condition:
                        '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                ],
            },
        },
        {
            groupCode: 'DATA_ENRICHMENT',
            groupOrder: 3,
            logLevel: 'INFO',
            data: {
                systemAttributes: [
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        attributeName: '$.unitPrice',
                        attributeValue: '2586',
                    },
                ],
                userAttributes: [
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        attributeName: 'commission',
                        attributeValue: '10%',
                    },
                ],
            },
        },
        {
            groupCode: 'RULE_EVALUATION',
            groupOrder: 4,
            logLevel: 'INFO',
            data: [
                {
                    logLevel: 'WARN',
                    message:
                    'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                    ruleName: '20% of shipping rates',
                    ruleEvaluationResult: true,
                    condition:
                    '{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}',
                },
            ],
        },
        {
            groupCode: 'RULE_COMPUTATION',
            groupOrder: 5,
            logLevel: 'ERROR',
            data: {
                transactionTypeName: [
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        computionResult:
                        '{"currency":"CLP","centAmount":3510848880000000,"fraction":100000000}',
                        isBestFit: true,
                        ruleName: '20% off in Shipping Charge',
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'CREDIT',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                ],
                transactionTypeName2: [
                    {
                        logLevel: 'ERROR',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        computionResult:
                        '{"currency":"CLP","centAmount":3510848880000000,"fraction":100000000}',
                        isBestFit: false,
                        ruleName: 'This is new rule name which may contain extra',
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'Debit',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                    {
                        logLevel: 'WARN',
                        message:
                        'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                        computionResult:
                        '{"currency":"CLP","centAmount":3510848880000000,"fraction":100000000}',
                        isBestFit: true,
                        ruleName: '30% off in Shipping Charge',
                        transactionTypeName: 'Commission',
                        transactionTypeMode: 'CREDIT',
                        formula:
                        '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    },
                ],
            },
        },
        {
            groupCode: 'TRANSACTION_CREATION',
            groupOrder: 6,
            logLevel: 'WARN',
            data: [
                {
                    settlementId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    transactionCreatedAt: '2019-12-23T11:01:39Z',
                    transactionNumber: '<S0001>-CLP-06132021-A00X',
                    netAmount:
                    '{"currency":"CLP","centAmount":3510848880000000,"fraction":100000000',
                    transactionTypeName: 'Commission',
                    transactionTypeMode: 'CREDIT',
                    logLevel: 'WARN',
                    message:
                    'No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown',
                },
            ],
        },
    ]
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
                        .filter((trace) => trace.groupCode !== 'EXCEPTIONS')
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