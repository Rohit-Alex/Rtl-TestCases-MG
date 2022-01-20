/* Supporting File for Description component. 
* Renders `View` Button with onClick opens a Modal
*/
import { Button } from 'antd';
import React, { useState } from 'react'

import Modal from "../ModalBox";

function parseJSONSafely(jsonString, isArray = false) {
    try {
        return JSON.parse(jsonString)
    } catch (e) {
        return isArray ? [] : {}
    }
}

const ViewModalHandler = ({ modalLabel, modalValue }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const jsonObject = modalValue ? parseJSONSafely(modalValue) : {}
    return <div data-testid="viewmodal-test-id">
        <Button type={'link'} onClick={() => setIsModalOpen(!isModalOpen)}>View</Button>
        <Modal title={modalLabel} jsonValue={jsonObject} isModalVisible={isModalOpen} handleCancel={() => setIsModalOpen(false)} data-testid='modal-testid'/>
    </div>
}


export default ViewModalHandler