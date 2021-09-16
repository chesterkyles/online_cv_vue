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
.main {
  --bs-bg-opacity: 0.2;
  background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity));
  display: flex;
  flex-wrap: nowrap;
  height: -webkit-fill-available;
}

.container {
  width: 100%;
  overflow: hidden;
}

.container > .content {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

h1,h2,h3,h4 {
  text-transform: uppercase;
  font-family: 'Saira Condensed', sans-serif;
  font-stretch: ultra-condensed;
}

@media screen and (max-width: 768px) {
  .main {
    top: 50px;
    position: relative;
  }
}
</style>
