import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {login} from "../http/login";
import router from "../router";
Vue.use(Vuex);

const store=new Vuex.Store({
    //唯一的数据来源  state==>data
    state: {
        indexSearch: {
            province: '',
            address: '',
            startTime: '',
            endTime: '',
            startDay: '',
            endDay: ''
        },
        token:'',
        collection:[],
    },

    //getters==>computed
    getters: {
        isCollection:(state)=>(id)=>{
            let flag=false;
            console.log(state);
                if (state.collection.length){
                    flag=state.collection.some(ele=>ele*1===id*1);
            }
            return flag;
        }

    },

    //方法mutations 修改state的唯一方法(同步)
    mutations: {
        setTime(state, payload) {
            let weekArr = ['Sun', 'Mon', 'Tur', 'Wed', 'Thu', 'Fri', 'Sat'];
            let {start, end, startDay, endDay} = payload;
            let date = new Date();
            let startTime = start ? start : date.getMonth() + 1 + '.' + date.getDate();
            let endTime = end ? end : date.getMonth() + 1 + '.' + date.getDate() + 2;
            startDay = startDay === undefined ? date.getDay() : startDay;
            endDay = endDay === undefined ? startDay + 2 : endDay;

            state.indexSearch.startDay = weekArr[startDay];
            state.indexSearch.endDay = weekArr[endDay];
            state.indexSearch.startTime = startTime;
            state.indexSearch.endTime = endTime;
        },
        setProvince(state, payload) {
            state.indexSearch.province = payload;
        },
        setToken(state,payload){
            state.token=payload;
        },
        setCollection(state,payload){
            state.collection=payload;

        },
        toggleCollection(state,sid){
            let flag=state.collection.indexOf(sid*1);
            if (flag>-1){
                state.collection.splice(flag,1);
            }else {
                state.collection.push(sid*1);
            }
        }

    },
    //actions:异步方法，提交 mutations
    actions:{
        handleLogin({commit},payload){
            let redirect=payload.redirect;
            let query=payload.query;
            delete payload.redirect;
            delete payload.query;
            login(payload).then(res=>{
                sessionStorage.setItem('token',res.token);
                commit('setToken',res.token);
                res.collection && commit('setCollection',res.collection.split(',').map(ele=>ele*1));
                router.replace({name:redirect,query:query})
            }).catch(error=>{
                console.log(error);
            })
        }
    },
    modules:{},


    plugins: [createPersistedState()],
})
    //actions：异步方法，提交mutations
    // actions:{
    //
    // },
    // modules:{
    //
    // }
export default store;