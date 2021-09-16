<template>
  <div class="postcard dark blue" v-lazy-container="{ selector: 'img' }">
    <img class="postcard_img" :data-src="require(`../assets/images/${school.image}`)" :alt="school.name" />
    <div class="postcard_text">
      <h1 class="postcard_title blue">{{ school.name }}</h1>
      <h5 class="postcard_subtitle">{{ school.degree }}</h5>
      <div class="postcard_bar"></div>
      <div class="postcard_preview-txt">
        <span>Year Attended: </span>{{ school.year }}
      </div>
      <div class="postcard_preview-txt">
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

@media screen and (max-width: 768px) {
  .postcard_text {
    text-align: center!important;
  }

  h1 {
    font-size: 1.5rem!important;
  }

  h5 {
    font-size: 1.2rem!important;
  }

  .postcard_preview-txt {
    font-size: 0.9rem!important;
    text-align: center!important;
  }
}
</style>
