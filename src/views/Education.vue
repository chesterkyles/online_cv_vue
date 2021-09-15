<template>
  <div :id="$options.name" class="col-10">
    <h1>{{$options.name}}</h1>
    <EducationItem v-for="(school, index) in educationList" :key="index" :school="school" />
  </div>
</template>

<script>
import EducationItem from '../components/EducationItem'
import { education } from '../assets/json/education.json'

export default {
  name: 'Education',
  components: {
    EducationItem,
  },
  data() {
    return {
      educationList: education
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
