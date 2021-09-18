<template>
  <button type="submit" :class="[addClass, 'btn rounded-pill']">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    addClass: String,
    text: String,
  }
}
</script>

<style scoped lang="scss">
button {
  border-color: rgba(var(--bs-info-rgb), 0.7);
  background-color: rgba(var(--bs-info-rgb), 0.7);
  box-shadow: 0 .125rem .25rem rgba(23, 88, 107, 0.95)!important;
  transition-property: transform;
  transition: all 0.5s;

  > span {
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-0.15em);
  }

  &:focus {
    background-color: rgba(var(--bs-info-rgb), 0.5);
  }
}
</style>
