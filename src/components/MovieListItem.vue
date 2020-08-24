<template>
    <div class='movie-item'>
        <p><span class="enhanced-text">Title:</span> {{ title }}</p>
        <p><span class="enhanced-text">Genre:</span> {{ genre }}</p> 
        <p><span class="enhanced-text">Year:</span> {{ year }}</p>
        <p><span class="enhanced-text">Description:</span><br>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,
    },
    data() {
        return {
            title: this.movie.title,
            genre: this.movie.genre,
            year: this.movie.year,
            description: this.movie.description,
        }
    }
}
</script>

<style scoped>
.movie-item {
    border: 1px solid black;
    margin: 5px;
    text-align: left;
    padding: 20px;
}
.enhanced-text {
    font-weight: bold;
}
</style>
