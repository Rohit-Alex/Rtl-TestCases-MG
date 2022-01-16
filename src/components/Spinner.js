import { Spin } from 'antd'


const SpinnerContainer = ({ children, size, isLoading, message }) => {
    return (
        <Spin size={size} spinning={isLoading} tip={message} data-testid="spinner-container">
            {children}
        </Spin>
    )
}


export default SpinnerContainer