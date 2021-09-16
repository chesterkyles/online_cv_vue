<template>
  <nav>    
    <ul class="nav nav-pills flex-column mt-2 mx-1">
      <SidebarItem v-for="(item, index) in menu" :key="index" :item="item" />
    </ul>
  </nav>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'Navigation',
  components: {
    SidebarItem,
  },
  props: {
    menu: Array
  },
}
</script>
