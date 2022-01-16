import React from 'react'
import { BackTop } from 'antd'

const BackToTop = ({ visibilityHeight, duration, children }) => {
    return (
        <BackTop
            visibilityHeight={visibilityHeight}
            duration={duration}
            data-testid="back-top-testId"
        >{children}
        </BackTop>
    )
}



export default BackToTop