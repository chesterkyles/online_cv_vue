<template>
<!--  navbar-expand navbar-light bg-white topbar mb-4 static-top shadow -->
  <header class="navbar">
    <div v-outside="hideMenu">
      <tasty-burger-button
        ref="hamburger"
        type="spin"
        :active="isActive"
        :color="color"
        :active-color="activeColor"
        :rounded="true"
        @toggle="onToggle"
    />
      <transition name="fade">
        <Navigation 
          :menu="menu" 
          v-if="isActive"
          @click.native="hideMenu" />
      </transition>
    </div>
  </header>
</template>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers'
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css'

import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    TastyBurgerButton,
    Navigation,
  },
  props: {
    menu: Array
  },
  data() {
    return {
      color: "white",
      activeColor: "white",
      isActive: false
    }
  },
  methods: {
    onToggle(active) {
      this.isActive = active
    },
    hideMenu() {
      this.isActive = false
    }
  },
  directives: {
    outside: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      },
    }
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: none;
  position: fixed;
  top: 0;
  width:100%;
  background-image: linear-gradient(-10deg, rgb(44, 78, 88, 0.95), rgba(var(--bs-dark-rgb)) 30%);
  z-index: 999;
}

.hamburger {
  padding: 5px 15px;
  opacity: 0.7!important;

  .hamburger-inner {
    background-color: rgba(var(--bs-white-rgb), 1)!important;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .navbar {
    display:block;
  }
}
</style>
