import React, { useEffect } from 'react'
import { Modal, Button, Form, Input, message } from 'antd';

const UserModel = (props) => {

    const [form] = Form.useForm();

    console.log('选择的record:')
    console.log(props.record)

    //第一个参数是要执行的函数，第二个参数是一个列表，列表中的值变化时执行函数
    useEffect(() => {

        if(props.record===null){
            form.resetFields()
        }else{
            //如果传入的是null或者undefined，哪不会生效
            form.setFieldsValue(props.record)
        }
        
    }, [props.record])



    return (
        <Modal
            title="Basic Modal"
            visible={props.visible}
            onOk={() => {
                form.submit()
            }}
            onCancel={props.handleCancel}
            forceRender
            >
            
            {/* {JSON.stringify(props.record)} */}

            <Form
                form={form}
                name="basic"
                // initialValues={{ 
                //     remember: true,
                //     name:'张',
                // }}
                onFinish={props.onFinish}
                onFinishFailed={() => {
                    message.error('提交失败');
                }}
            >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="地址"
                    name="address"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


            </Form>



        </Modal>
    )
}

export default UserModel