<template>
  <div class="d-flex flex-column p-3 text-white bg-dark sidebar">
    <div class="img-sidebar">
      <div class="img-container">
        <img src="../assets/profile.jpg">
      </div>
    </div>
    <ul class="nav nav-pills flex-column mb-auto">
      <SidebarItem v-for="(item, index) in menu" :key="index" :item="item" />
    </ul>
    <hr>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  props: {
    menu: Array
  }
}
</script>

<style scoped>
.sidebar {
  width: 300px;
}

.img-sidebar {
  height: 48%;
  padding-bottom: 20px;
  position: relative;
}

.img-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  padding-bottom: 30px;
}

img { 
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  height: 170px; 
  width : 170px;
  object-fit: cover;
  padding: 0.3rem;
  --bs-bg-opacity: 0.5;
  background-color: rgba(var(--bs-white-rgb),var(--bs-bg-opacity));
}
</style>