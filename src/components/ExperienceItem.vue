<template>
  <div class="postcard dark blue">
    <div class="card_text">
      <h3>{{ job.title }}, <span>{{ job.company }}</span></h3>
      <h4>{{ job.years }}</h4>
      <div class="card_details_list">
        <div class="card_details_bar"></div>
        <ul class="m-0">
          <li v-for="description in job.description" :key="description"> {{ description }} </li>
        </ul>
      </div>
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

  > span {
    --bs-text-opacity: 0.1;
    color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
    font-weight: 600;
  }
}

@media screen and (max-width: 768px) {
  .postcard {
    max-height: 300px!important;
    
    &:hover {
      max-height: 500px!important;
    }
  }

  h3, h4 {
    text-align: center;
  }

  h3 { font-size: 1.3rem; }

  h4 { 
    font-size: 1.2rem; 
    text-transform: none;
  }

  .card_details_bar, .card_details_list {
    display: none!important;
  }

  .card_text {
    padding: 1rem!important;
  }
}

.postcard {
  max-height: 140px;
  overflow: hidden;
  transition: max-height 0.8s ease-in-out; 

  .card_details_bar {
    --bs-bg-opacity: 0.8;
    background-color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
    height: 2px;
    margin: 10px 5px;
    border-radius: 5px;
  }

  .card_details_list {
    opacity: 0;
    max-height: 0px;
    transition: opacity 1s, max-height 0.5s;
  }

  &:hover {
    max-height: 500px!important;

    .card_details_list {
      opacity: 1;
      max-height: 999px;
    }
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
