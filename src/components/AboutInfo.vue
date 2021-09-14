<template>
  <div class="my-1">
    <i :class="info.icon"></i>{{info.text}}
  </div>
</template>

<script>
export default {
  name: 'AboutInfo',
  props: {
    info: Object
  }
}
</script>

<style scoped>
i {
  margin-right: 0.5rem;
  width: 15px;
}
</style>
