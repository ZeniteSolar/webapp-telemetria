import Vuex from 'vuex';
import Vue from 'vue';
import Api from '@/services/api';
import _ from 'lodash';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    //filter: state => date =>  state.data.filter(item => item.x = date);  
    lastDate(state) {
        let data = state.data;
        if(data.length > 0) {
          let last = data[(data.length - 1)];
          return last.x;
        }
        return null;    
    }
  },
  actions: {
    appendData: ({commit, getters}, options) => {
        return new Promise((resolve) => {
            //let allFromDate = getters['filter']('2015-332-322');
            let latestDate = getters['lastDate']
            console.log(latestDate);
            Api().get(options.url, {params: {latestDate: latestDate}}).then((data)=>{
                console.log(data.data);
                commit('appendData', data.data)
                resolve(data.data)
            })
        })
    },
    loadData: function({commit}, options) {
        return new Promise((resolve) => {
            Api().get(options.url).then((data)=>{
                commit('setData', data.data)
                resolve(data.data)
            })
        })      
    },
  },
  mutations: {
    setData(state,data) {
        state.data = data;
    },
    appendData(state,newData) {
        let data = _.cloneDeep(state.data);
        newData = _.cloneDeep(newData);
        state.data = [...data,...newData];
    }
  }
});

export default store;
