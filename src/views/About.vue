<template>
  <div :id="$options.name" class="col-8">
    <h1>{{firstName}}&nbsp;<div class="text">{{lastName}}</div></h1>
    <h3 class="mb-4">
      <VueTyper
        :text='titles'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='30'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      />
    </h3>
    <AboutInfo v-for="(info, index) in infos" :key="index" :info="info" />

    <ul class="list-inline mx-0 mb-0 mt-4">
      <AboutLink v-for="(link, index) in links" :key="index" :link="link" />
    </ul>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import AboutInfo from '../components/AboutInfo'
import AboutLink from '../components/AboutLink'
import { personalInfo, personalLinks } from '../assets/json/about.json'

export default {
  name: 'About',
  components: {
    VueTyper,
    AboutInfo,
    AboutLink,
  },
  data() {
    return {
      firstName: "Chester Kyles",
      lastName: "Colita",
      titles: ["Web Developer", "Electronics Engineer"],
      infos: personalInfo,
      links: personalLinks,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 4.5rem;
  line-height: 4rem;
  font-weight: 700;
}

h3 {
  font-weight: 600;
}

.text {
  display: inline-block;
  --bs-text-opacity: 0.6;
  color: rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important;
  --bs-bg-opacity: 0.7;
  background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
  border-radius: 25px;
  padding: 0 15px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  ul {
    text-align: center;
  }
}
</style>
