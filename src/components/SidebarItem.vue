<template>
  <li class="nav-item">
    <router-link :to="{ name: item.pathname }" class="nav-link text-white">
      <i :class="item.icon"></i>
      {{item.title}}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
i {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 25px;
}

.nav-link:hover:not(.router-link-active) {
  --bs-bg-opacity: 0.1;
  background-color: rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important;
}

.router-link-active,
.router-link-exact-active {
  --bs-bg-opacity: 0.5;
  background-color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
}

</style>
