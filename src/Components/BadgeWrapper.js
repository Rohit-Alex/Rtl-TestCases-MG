import React from 'react'
import { Tag } from 'antd'

const BadgeWrapper = ({ visible, color, text }) => {

    return <Tag
        color={color}
        visible={visible}
        style={{ textTransform: 'uppercase' }}
        data-testid="badge-testid"
    >
        {text}
    </Tag>
}



export default BadgeWrapper