import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle={('404_DESCRIPTION')}
            data-testid="Result-testid"
            extra={<Button type="primary" onClick={() => navigate('/')}>{('BACK_HOME')}</Button>}
        />
    )
}

export default NotFound