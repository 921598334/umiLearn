
import request from 'umi-request';
import  { extend } from 'umi-request';
import {  message } from 'antd';

const errorHandler = function(error) {
    console.log('出现错误')
    const codeMap = {
      '404': '页面没有找到',
      '022': 'It’s a big mistake,',
      // ....
    };
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
     
      message.error(error.data.message)
      
    } else {
      // The request was made but no response was received or error occurs when setting up the request.
      console.log("网络问题，请求超时间");
    }
  
    //throw error; // If throw. The error will continue to be thrown.
  
    // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
    //发现错误后返回空，这样可以让表格不一直显示读取中状态
     return null;
  };
  


export async function initOrgInfoRequest(payload) {

    console.log("initOrgInfoRequest 开始执行")
    console.log(payload)


    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    
    //由于设置了代理，所以需要在访问后端的接口前加/api
    return request('/api/test', {
         method: 'post',
         params: payload,
    })
        .then(function (response) {
            console.log('返回成功')
            console.log(response);

            return data;

        })
        .catch(function (error) {
            
            return errorHandler(error);
            
        });


}







export async function editRequest(payload) {

    console.log("editRequest 开始执行")
    console.log(payload)

    const data = [
        {
            key: '1',
            name: 'John ',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim ',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe ',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    
    //由于设置了代理，所以需要在访问后端的接口前加/api
    return request('/api/test', {
         method: 'post',
         params: payload,
    })
        .then(function (response) {
            console.log('返回成功')
            console.log(response);

            return data;
        })
        .catch(function (error) {
            return errorHandler(error);
        });


}






export async function addRequest(payload) {

    console.log("addRequest 开始执行")
    console.log(payload)

    const data = [
        {
            key: '1',
            name: 'John ',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim ',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe ',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'denng ',
            age: 33,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    
    //由于设置了代理，所以需要在访问后端的接口前加/api
    return request('/api/test', {
         method: 'post',
         params: payload,
    })
        .then(function (response) {
            console.log('返回成功')
            console.log(response);


            return data;

        })
        .catch(function (error) {
            return errorHandler(error);
        });


}
