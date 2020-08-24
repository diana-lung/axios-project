<template>
  <div id="app">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
export default {
  name: 'App',
  components: {
    'dashboard': Dashboard,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Raleway&display=swap');
#app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
h1 {
    color: #2A363B;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 50px;
}
button {
    outline: none;
    border: none;
    cursor: pointer;
}
</style>
