<template>
    <div class='movie-item'>
        <p><span class="enhanced-text">Title:</span> {{ movie.title }}</p>
        <p><span class="enhanced-text">Genre:</span> {{ movie.genre }}</p> 
        <p><span class="enhanced-text">Year:</span> {{ movie.year }}</p>
        <p><span class="enhanced-text">Description:</span><br>{{ movie.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,
    },
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
