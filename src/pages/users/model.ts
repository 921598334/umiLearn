import { format } from 'prettier';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { initOrgInfoRequest,editRequest,addRequest } from './service'

interface UserModelTyoe{
    namespace: 'users',
    state:{},
    
    effects:{
        query:Effect;
        edit:Effect
    },
    reduce:{
        save:Reducer;
        editReducers:Reducer;
    },
    subscriptions:{
        setup:Subscription;
    }
}

const UserModel:UserModelTyoe = {
    namespace: 'users',
    state: {
        name: '',
    },
    effects: {
        //call调用远程服务器上数据，put直接调用reduce
        *query({ payload }, { call, put }) {
            console.log('*query开始执行')

            const response = yield call(initOrgInfoRequest, payload);

            console.log('initOrgInfoRequest返回为：')
            console.log(response)
           
            yield put({ type: 'save', payload: {response} });
        },
        *edit({ payload }, { call, put }) {
            console.log('*edit 开始执行')

            const response = yield call(editRequest, payload);

            console.log('editRequest 返回为：')
            console.log(response)
           
            
            yield put({ type: 'editReducers', payload: {response} });

        },


        *add({ payload }, { call, put }) {
            console.log('*add 开始执行')

            const response = yield call(addRequest, payload);

            console.log('addRequest 返回为：')
            console.log(response)
           
            
            yield put({ type: 'addReducers', payload: {response} });

        },
    },
    reducers: {
       
        save(state, action) {

            console.log('sava开始执行')
            console.log(action.payload.response)
            return {...state,mydata:action.payload.response}
        },

        editReducers(state, action) {

            console.log('editReducers 开始执行')
            console.log(action.payload.response)
            return {...state,mydata:action.payload.response}
        },

        addReducers(state, action) {

            console.log('addReducers 开始执行')
            console.log(action.payload.response)
            return {...state,mydata:action.payload.response}
        },
        
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/users/u1') {

                    console.log('访问了：/users/u1')

                    dispatch({
                        type: 'query',
                        payload:{
                            id:23,
                            name:'赞赏',
                        }
                    })
                }
            });
        }
    }
};
export default UserModel;