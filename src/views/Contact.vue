<template>
  <div :id="$options.name" class="row col-10 my-5 my-xl-0">
    <div class="col-xl-5 d-flex flex-column justify-content-center">
      <h1>Contact Me</h1>
      <h3>Interested in any of my offered services?&nbsp;
        <span>Send me a message&nbsp;&nbsp;<i class="far fa-envelope"></i></span>
      </h3>
      <span>
        If you don't get an answer immediately, please feel free to look me elsewhere.
        You can find me through the following links below:
      </span>
      <div class="bar mx-0 mt-4"></div>
      <ul class="list-inline mx-0 mb-0 mt-4">
        <AboutLink v-for="(link, index) in links" :key="index" :link="link" />
      </ul>
    </div>
    <div class="col-xl-7 ps-xl-5 mt-4 mt-xl-0">
      <ContactForm />
    </div>
  </div>
</template>

<script>

import AboutLink from '../components/AboutLink'
import ContactForm from '../components/ContactForm'
import { personalLinks } from '../assets/json/about.json'

export default {
  name: 'Contact',
  components: {
    AboutLink,
    ContactForm,
  },
  data() {
    return {
      links: personalLinks,
    }
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: 700;
}

h3 {
  text-transform: none!important;
  
  > span {
    color: rgba(40, 161, 197, 0.95)!important;
    font-weight: 600;
  }
}
</style>
