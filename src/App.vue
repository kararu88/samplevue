<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FirstVueClass msg1="Hello My First Vue Class" msg2="OMG!!"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FirstVueClass from './components/FirstVueClass.vue'

export default {
  name: 'app',
  components: {
    FirstVueClass
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
