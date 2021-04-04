// import React from 'react'
import React, { useState } from 'react'
import { Table, Tag, Space, message, Popconfirm,Button } from 'antd';
import { connect } from 'umi';
import UserMoel from './components/UserModel'

//返回namespace-users
const u1 = ({ users, dispatch }) => {

  const [modelVisible, setModelVisible] = useState(false)
  const [record, setrecord] = useState(undefined)



  //关闭修改对话框
  const handleCancel = () => {
    setModelVisible(false)
  };

  //点击提交
  const onFinish = (values) => {

    if(record===null){
      dispatch({
        type: 'users/add',
        payload: { ...values},
      })
    }else{
      dispatch({
        type: 'users/edit',
        payload: { ...values, key: record.key },
      })
    }

    

    message.success('成功提交')
    setModelVisible(false)
  };


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => {
            setModelVisible(true)
            setrecord(record)
          }}>Edit</a>

          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={()=>{
              message.success('Click on Yes');
            }}
            onCancel={()=>{
              message.error('Click on No');
            }}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];


  console.log('u1的data')

  //users是reduce直接返回的数据
  const data = users.mydata




  console.log(data)



  return (
    <div className='ant-select-selection'>
      <h1 >u1</h1>
      <Button onClick={
        ()=>{
          setrecord(null)
          setModelVisible(true)
        }
      }>添加</Button>
      <Table loading={!data} columns={columns} dataSource={data} />
      <UserMoel
        visible={modelVisible}
        onFinish={onFinish}
        handleCancel={handleCancel}
        record={record}
      ></UserMoel>

    </div >
  )


}

//返回namespace-users
const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}

export default connect(mapStateToProps)(u1)