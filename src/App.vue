<template>
  <div id="app">
    <b-container>
    <h1 id="title">作業実績記録アプリ</h1>
    <TaskForm/>
    <TimeLine/>
    </b-container>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm'
import TimeLine from './components/TimeLine'

export default {
  name: 'app',
  components: {
      TaskForm,
      TimeLine,
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

#title {
  text-align: left;
  margin-bottom: 0.4em;
  padding-left: 0.3em;
}

</style>
