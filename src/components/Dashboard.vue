<template>
    <div class='dashboard'>
        <h1>Movies <span class='title-diff-color'>Dashboard</span></h1>
        <p>Welcome to our page! We have a large variety of movies that is constantly updated. 
            Check it out!<br/>Use either the button below to retrive all movies or the search functionality to retrieve a certain movie.</p>
        
        <div class='dashboard__menu'>
            <button class='dashboard__button' @click="showMovies()">Show Movies</button>
            <div class="dashboard__search-area">
                <i class="fa fa-search fa-lg search-area__icon"></i>
                <input v-model="movieTitleSearchString" 
                type="text" class="search-area__field" placeholder="Search Movie...">
            </div>
        </div>
        
        <div v-if="getMovieList.length">
            <div v-for="movie in getMovieList" :key="movie.id">
                <movie-list-item :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
import MovieListItem from './MovieListItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Dashboard',
    components: {
    'movie-list-item': MovieListItem,
    },
    data() {
        return {
            movieTitleSearchString: '',
        }
    },
    computed: {
        ...mapGetters({
            dashboardMoviesList: 'getMovies',
        }),

        getMovieList() {
            return this.movieTitleSearchString.length > 0 
                ? this.filteredDashboardMovieList
                : this.dashboardMoviesList;
        },
        filteredDashboardMovieList() {
            let movieTitleSearchString = this.movieTitleSearchString.toLowerCase();
            return this.dashboardMoviesList.filter(movie => {
                if(movie.title.toLowerCase().indexOf(movieTitleSearchString) != -1) {
                    return movie;
                }
            })
        },
     },
    methods: {
        ...mapActions([
            'selectMovies'
        ]),
        showMovies() {
            this.movieTitleSearchString = '';
            this.selectMovies();
        },
    },
}
</script>

<style scoped>
.title-diff-color {
  color: #E84A5F;
}
.dashboard__button {
    background: #99B899;
    border-radius: 3px;
    color: #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    width: 150px;
    height: 55px;
    margin: 25px;
}
.dashboard__button:hover {
    background: #8aa18a;
}
.dashboard__menu {
    display: flex;
    align-items: center;
    justify-content: center;
}
.dashboard__search-area{
    background: #e6e6e6;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    padding: 0 20px;
    width: 150px;
}
.search-area__field {
    border: none;
    background-color:transparent;
    width: 100%;
    font-size: 17px;
    color: #696969;
    padding-top: 3px;
}
.search-area__field:focus {
    outline: none;
}
.search-area__icon {
    color: #999999;
    margin-right: 12px;
}
::placeholder {
    color: #999999;
    opacity: 1;
}
</style>
