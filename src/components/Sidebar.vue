<template>
  <div class="flex-column p-4 text-white sidebar sticky-top">
    <div class="img-sidebar">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles"
      >
      </vue-particles>
      <div class="img-container" v-lazy-container="{ selector: 'img' }">
        <router-link :to="{ name: 'Home' }">
          <img :data-src="require(`../assets/images/${$options.profilePic}`)">
        </router-link>
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
    SidebarItem,
  },
  props: {
    menu: Array
  },
  profilePic: "profile.jpg",
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  background-image: linear-gradient(-20deg, rgb(44, 78, 88, 0.95), rgba(var(--bs-dark-rgb)) 30%);
  display: flex;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display:none;
  }
}

.img-sidebar {
  height: 47.5%;
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

.particles {
  height:220px;
  padding:10px;
}
</style>
