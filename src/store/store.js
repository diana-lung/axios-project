import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = 'https://exercise-axios.firebaseio.com';

export default new Vuex.Store({
    state: {
        movies: [ 
        ],
    },
    getters: {
        getMovies: state => {
            return state.movies;
        },
    },
    mutations: {
        renderMovies: (state) => {
            //select all movies
            state.movies = [];
            axios.get('/movies.json')
            .then(({data}) => {
                const newMovies = Object.keys(data).map(item => Object.assign({}, data[item], { id: item }));
                Vue.set(state, 'movies', [...newMovies]);
            })
            .catch(error => console.log(error));
        },
    },
    actions: {
        renderMovies: ({commit}) => {
            commit('renderMovies');
        },
    },
});
