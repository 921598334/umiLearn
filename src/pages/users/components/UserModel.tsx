import React from 'react'
import { Modal, Button } from 'antd';

const UserModel = (props) => {

    var isModalVisible = true

    return (
        <Modal title="Basic Modal"
            visible={props.visible}
            onOk={props.handleOK}
            onCancel={props.handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default UserModel