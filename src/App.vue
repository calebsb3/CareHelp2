<template>
  <div id="app"><Scheduling></Scheduling></div>
</template>

<script>
import Scheduling from './components/Scheduling.vue';

export default {
  name: 'App',
  components: {
    Scheduling,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
