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
            {JSON.stringify(props.record)}
            
        </Modal>
    )
}

export default UserModel