<template>
  <div :id="$options.name" class="col-10">
    <h1>{{$options.name}}</h1>
    <h3 class="my-4">Programming Languages &amp; Tools</h3>
    <SkillList :skills="skills" />
    <h3 class="mb-2 mt-5">Workflows</h3>
    <SkillWorkflows :workflows="workflows"/>
  </div>
</template>

<script>
import SkillList from '../components/SkillList'
import SkillWorkflows from '../components/SkillWorkflows'
import { skills, workflows } from '../assets/json/skills.json'

export default {
  name: 'Skills',
  components: {
    SkillList,
    SkillWorkflows,
  },
  data() {
    return {
      skills: skills,
      workflows: workflows,
    }
  },
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

  h3 {
    text-align: center;
  }
}
</style>
