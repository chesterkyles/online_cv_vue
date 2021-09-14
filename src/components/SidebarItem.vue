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

.nav-link:hover {
  --bs-bg-opacity: 0.1;
  background-color: rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important;
}
</style>
