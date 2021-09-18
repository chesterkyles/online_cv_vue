<template>
  <div :id="$options.name" class="col-10">
    <h1>My {{$options.name}}</h1>
    <div class="row justify-content-center mb-2 mb-xxl-5">
      <ServiceItem v-for="(service, index) in services" :key="index" :service="service" />
    </div>
    <div class="text-center my-4">
      <router-link :to="{ name: 'Contact' }">
        <Button class="px-5" text="Contact Me"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import ServiceItem from '../components/ServiceItem'
import Button from '../components/Button'
import { services } from '../assets/json/service.json'

export default {
  name: 'Services',
  components: {
    ServiceItem,
    Button,
  },
  data() {
    return {
      services: services
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 3.8rem;
  line-height: 4rem;
  margin-bottom: 50px;

  @media screen and (max-width: 1400px) {

  font-weight: 700;
  font-size: 3.3rem;
  margin-bottom: 20px;
  margin-top: 30px;
  }
}
</style>
