// import React from 'react'
import React,{useState} from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';
import UserMoel from './components/UserModel'

//返回namespace-users
const u1 = ({ users }) => {

  const [modelVisible, setModelVisible] = useState(false)


  
  const handleOk = () => {
    setModelVisible(false)
  };

  const handleCancel = () => {
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
          <a onClick={()=>{
            setModelVisible(true)
          }}>Edit</a>
          <a >Delete</a>
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
      <h1 >user</h1>
      <Table loading={!data} columns={columns} dataSource={data} />
      <UserMoel visible={modelVisible} handleOK={handleOk} handleCancel={handleCancel}></UserMoel>

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