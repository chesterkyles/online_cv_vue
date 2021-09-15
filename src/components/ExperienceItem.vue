<template>
  <div class="postcard dark blue">
    <div class="card_text">
      <h3>{{ job.title }}, <span>{{ job.company }}</span></h3>
      <h4>{{ job.years }}</h4>
      <div class="card_details"></div>
      <ul class="m-0">
        <li v-for="description in job.description" :key="description"> {{ description }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: {
    job: Object,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/postcard.scss";

h3 {
  margin: 0px;
}

h3 > span {
  --bs-text-opacity: 0.1;
  color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
  font-weight: 600;
}

.postcard {
  max-height: 105px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out; 

  .card_details {
    --bs-bg-opacity: 0.8;
    background-color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
    width: 50px;
    height: 2px;
    margin: 10px 0;
    border-radius: 5px;
    opacity: 0;
    transition: width 0.5s ease 0.05s, opacity 0.5s ease 0.05s;
  }

  &:hover {
    max-height: 300px!important;
  }

  &:hover .card_details {
    opacity: 1!important;
    width: 100px!important;
  }
}

.card_text {
  padding: 1.5rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
}
</style>
