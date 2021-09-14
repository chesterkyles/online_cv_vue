<template>
  <div class="postcard dark blue">
    <img class="postcard__img" :src="require(`../assets/images/${school.image}`)" :alt="school.name" />
    <div class="postcard__text">
      <h1 class="postcard__title blue">{{ school.name }}</h1>
      <h5 class="postcard__subtitle">{{ school.degree }}</h5>
      <div class="postcard__bar"></div>
      <div class="postcard__preview-txt">
        <span>Year Attended: </span>{{ school.year }}
      </div>
      <div class="postcard__preview-txt">
        <span>Thesis: </span>{{ school.remarks }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: {
    school: Object,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/postcard.scss";

span {
  --bs-text-opacity: 0.9;
  color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
  font-weight: 600;
}
</style>
