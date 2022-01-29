import { notification } from "antd"
import axios from "axios"

export const STATUS = {
    transactionStatus: true
}
export const constructMessage = (logLevel, message) => {
    return {
        data: {
            logLevel,
            message
        }
    }
}

export const fetchMethod = (url) => fetch(url).then(res => {
    return new Promise((resolve, reject) => {
        if (res.status === 200 && res.ok) {
            resolve(res.json())
        }
        else reject('Api failure')
    })
})

export const notificationHandler = (type, description, message) => {
    notification[type]({
        message,
        description,
    });
}


export const POST = (url, body) => {
    console.log('inside post method');
    return axios.post(url, body)
}
export const TRANSACTION_DATA_COLUMN = [
    {
        title: "Transaction Number ",
        label: "number",
        dataIndex: "number"
    },
    {
        title: "Transaction Type Name",
        label: "name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Transaction Type Mode",
        label: "mode",
        dataIndex: "mode"
    },
    {
        title: "Net Amount",
        label: "netAmount",
        dataIndex: "netAmount"
    },
    {
        title: "Seller Name",
        label: "sellerId",
        dataIndex: "sellerId"
    },
    {
        title: "Seller Order Line Id",
        label: "sellerOrderLineId",
        dataIndex: "sellerOrderLineId"
    },
    {
        title: "Created At",
        label: "createdAt",
        dataIndex: "createdAt"
    },
    {
        title: "Trace Id ",
        label: "traceId",
        dataIndex: "traceId"
    },
    {
        title: "Action",
        label: "action",
        dataIndex: "action"
    }
];

export const columnList = [
    {
        title: "Transaction Number ",
        value: "number",
        dataIndex: "number"
    },
    {
        title: "Transaction Type Name",
        value: "name",
        dataIndex: "name"
    },
    {
        title: "Transaction Type Mode",
        value: "mode",
        dataIndex: "mode"
    },
    {
        title: "Net Amount",
        value: "netAmount",
        dataIndex: "netAmount"
    },
    {
        title: "Seller Name",
        value: "sellerId",
        dataIndex: "sellerId"
    },
    {
        title: "Seller Order Line Id",
        value: "sellerOrderLineId",
        dataIndex: "sellerOrderLineId"
    },
    {
        title: "Created At",
        value: "createdAt",
        dataIndex: "createdAt"
    },
    {
        title: "Trace Id ",
        value: "traceId",
        dataIndex: "traceId"
    }
    // {
    //  title: "Action",
    //  value: "action",
    //  dataIndex: "action",
    // },
];

export const traceFlow = [
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

const baseUrl = process.env.REACT_APP_API_BASE_URL

const getUrl = (location, params) => {
    try {
        const url = new URL(location)
        url.search = new URLSearchParams(params)
        return [null, url]
    } catch (err) {
        return [
            {
                description: err.message,
                title: "BAD_REQUEST",
                key: "URL",
                duration: 0,
            },
            null,
        ]
    }
}

export const ApiLocations = {
    GET_TRACE_DETAILS: () => {
        return [null, 'https://www.placeholder.com/todos']
    },
    GET_TRANSACTION_SEARCH: () => {
        return getUrl(`${baseUrl}/transactions/search`)
    },
    GET_API: () => {
        return getUrl(`${baseUrl}/500error`)
    },
}
