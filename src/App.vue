<template>
  <div class="main">
    <Sidebar :menu="sidebarMenu"/>
    <div class="container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
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
.main {
  --bs-bg-opacity: 0.2;
  background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity));
  display: flex;
  flex-wrap: nowrap;
  height: -webkit-fill-available;
}

.container {
  width: 100%;
}

.container > .content {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1,h2,h3,h4 {
  text-transform: uppercase;
  font-family: 'Saira Condensed', sans-serif;
  font-stretch: ultra-condensed;
}
</style>
