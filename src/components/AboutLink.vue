<template>
  <li class="list-inline-item mx-0">
    <a target="blank" :href="link.path">
      <span class="fa-stack fa-lg">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i :class="[link.icon, 'fab fa-stack-1x']"></i>
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'AboutLink',
  props: {
    link: Object
  }
}
</script>

<style scoped lang="scss">
.fa-stack {
  display: inline-block!important;
  height: 2em!important;
  position: relative!important;
  vertical-align: middle!important;
  width: 2.5em!important;
  text-align: center;
}

.fa-stack-1x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important;
}

a {
  .fa-stack {
    --bs-bg-opacity: 0.5;
    color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
    transition: color 0.5s ease;
  } 

  &:hover .fa-stack {
    color: rgba(var(--bs-info-rgb), 1)!important;
  }
}
</style>
