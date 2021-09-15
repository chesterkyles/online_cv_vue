<template>
  <div :id="$options.name" class="row col-10 col-md-11">
    <div class="col-lg-1 p-0"><h1>{{ $options.name }}</h1></div>
    <div class="col-lg-11 mb-4">
      <ExperienceItem v-for="(job,index) in experienceList" :key="index" :job="job" />
    </div>
  </div>
</template>

<script>
import ExperienceItem from '../components/ExperienceItem'
import { experience } from '../assets/json/experience.json'

export default {
  name: 'Experience',
  components: {
    ExperienceItem,
  },
  data() {
    return {
      experienceList: experience
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  margin: 0;
}

.row {
  align-items: center!important;
}

@media screen and (max-width: 992px) {
  h1 {
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    text-align: center;
    font-size: 3rem!important;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
