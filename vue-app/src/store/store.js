import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        allVideos: []
    },
    getters: {
        getVideoInfo: state => {
            return state.allVideos;
        },
        getFavoriteVideoInfo: state => {
            return state.allVideos.filter(video => video.favorite === true)
        }
    },
    mutations: {
        submitVideoInfo(state, data){
            state.allVideos = data;
        }
    },
    actions: {
        async callVideoInfo({commit}){
            const _path = "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos";
            const { data } = await axios.get(_path);
            commit('submitVideoInfo', data)
        }
    }
});

export default store;
