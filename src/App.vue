<template>
  <div class="main">
    <Sidebar :menu="sidebarMenu"/>
    <Header :menu="sidebarMenu"/>
    <div class="container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { sidebarMenu } from './assets/json/sidebar.json'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
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
