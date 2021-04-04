
import request from 'umi-request';


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
            console.log("服务端异常：");
            console.log(error);
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
            console.log("服务端异常：");
            console.log(error);
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
            console.log("服务端异常：");
            console.log(error);
        });


}
