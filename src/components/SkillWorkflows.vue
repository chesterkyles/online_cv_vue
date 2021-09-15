<template>
  <ul class="list-group px-2">
    <li v-for="flow in workflows" :key="flow" class="list-group-item">
      <i class="fas fa-check"></i>&nbsp;<span>{{ flow }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SkillWorkflows',
  props: {
    workflows: Array,
  }
}  
</script>

<style scoped lang="scss">
.list-group-item {
  background-color: transparent;
  opacity: 0.8;
  padding-bottom: 0px;
  border: 0px;

  &:hover{
    --bs-text-opacity: 1;
    --bs-dark-info: 47, 124, 148;
    color: rgba(var(--bs-dark-info), var(--bs-text-opacity))!important;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>
