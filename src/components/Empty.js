import React from 'react'
import { Empty } from 'antd'

const EmptyWrapper = ({ description, image }) => {
    let imageValue
    if (image === 'simple') {
        imageValue = Empty.PRESENTED_IMAGE_SIMPLE
    } else if (image === 'default') {
        imageValue = Empty.PRESENTED_IMAGE_DEFAULT
    } else {
        imageValue = image
    }
    return <Empty description={description} image={imageValue} data-testid="empty-testId"/>
}


export default EmptyWrapper