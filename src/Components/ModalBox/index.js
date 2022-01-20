import React from 'react'
import { Button } from 'antd'
import ReactJson from 'react-json-view'
import Modal from 'antd/lib/modal/Modal'

const ModalBox = ({ title, name, isModalVisible, handleCancel, jsonValue }) => {
    return (
        <Modal
            className="Modal"
            title={title}
            visible={isModalVisible}
            onCancel={handleCancel}
            width={700}
            footer={
                <Button key="back" type="primary" onClick={handleCancel}>
                    {('CLOSE')}
                </Button>
            }
            data-testid='Modal-testid'
        >
            <ReactJson
                src={jsonValue}
                enableClipboard={false}
                displayObjectSize={false}
                displayDataTypes={false}
                name={name}
                collapsed={3}
                data-testid='react-json-testid'
            />
        </Modal>
    )
}


export default ModalBox