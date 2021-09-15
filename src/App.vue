<template>
  <main>
    <Sidebar :menu="sidebarMenu"/>
    <div class="container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar'
import { sidebarMenu } from './assets/json/sidebar.json'

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarMenu: sidebarMenu
    }
  }
}
</script>

<style>
@import './assets/scss/global.scss';
</style>
