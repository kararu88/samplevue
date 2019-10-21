<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <TaskForm/>
      <TaskForm/>
      <TextInput/>
      <CheckBoxComponent/>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm'
import TextInput from "@/components/TextInput";
import CheckBoxComponent from "@/components/CheckBoxComponent";

export default {
  name: 'app',
  components: {
      TaskForm,
      TextInput,
      CheckBoxComponent,
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
