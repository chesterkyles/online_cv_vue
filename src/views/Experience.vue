<template>
  <div :id="$options.name" class="row col-10 col-md-11 mt-0 pt-0">
    <div class="col-1 p-0"><h1>{{ $options.name }}</h1></div>
    <div class="col-11 experience-item">
      <ExperienceItem v-for="(job,index) in experienceList" :key="index" :job="job" />
    </div>
  </div>
</template>

<script>
import ExperienceItem from '../components/ExperienceItem'
import { experience } from '../assets/resources.json'

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
</style>
