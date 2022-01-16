import React from 'react'
import { Alert } from 'antd'

const GET_TYPE_FROM_LOG = {
    WARN: 'warning',
    warn: 'warning',
    ERROR: 'error',
    error: 'error',
    SUCCESS: 'success',
    success: 'success',
    INFO: 'info',
    info: 'info',
}

const Exceptions = ({ exceptions }) => {
    const { data } = exceptions;

    if (!data || (data && (!data.message || !data.logLevel))) {
        return null
    }
    return <Alert message={data.message} type={GET_TYPE_FROM_LOG[data.logLevel]} showIcon data-testid="alert-test-id"/>
}



export default Exceptions