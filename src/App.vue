<template>
  <div id="app">

    <LinkOption/>
    <router-view></router-view>

  </div>
</template>

<script>
import LinkOption from './components/LinkOption.vue'

export default {
  name: 'App',
  components: {
    LinkOption
  }
}
</script>

<style>

</style>
