<template>
  <ul class="list-inline text-center px-2">
    <li v-for="(skill,index) in skills" :key="index" class="list-inline-item">
      <i :class="skill.icon" v-tooltip=" {
        content: showPercentage(skill.name, skill.percentage),
        html: true,
      }"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SkillList',
  props: {
    skills: Array,
  },
  methods: {
    showPercentage(name, percentage) {
      return `<h3>${name} <span class="text-info">${percentage}</span></h3>`;
    }
  }
}
</script>

<style scoped lang="scss">
.list-inline-item > i {
  font-size: 3.2rem;
  opacity: 0.6;
  padding: 0.8rem;

  &:hover {
    --bs-bg-opacity: 0.6;
    color: rgba(47, 124, 148, 0.95)!important;
  }
}
</style>