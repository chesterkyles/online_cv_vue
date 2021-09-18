<template>
    <div class="col-xxl-3 m-1 m-xl-2 card" v-lazy-container="{ selector: 'img' }">
      <img class="d-none d-lg-block" 
        :data-src="require(`../assets/images/${service.icon}`)"
        :alt="service.name"
        @contextmenu.prevent="handler"
      />
      <h3>{{ service.name }}</h3>
      <div class="categories">
        <span v-for="category in service.categories" :key="category" class="badge">{{ category }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    service: Object,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/border.scss';

$bs-info-bg: rgba(31, 154, 192);
$dark-bg:  rgba(var(--bs-dark-rgb), 0.7);
.card {
  // background-image: linear-gradient(190deg, $gray-info-bg, $dark-bg 40%);
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  max-width: 500px;
  transition: 1s;
  @include magic-border(2px, $bs-info-bg, 0.2s, -1);


  @media screen and (min-width: 1570px) {
    width: 330px;
    padding: 50px;
  }
}


img {
  padding: 10px;
  width: 100px;

  @media screen and (min-width: 1570px) {
    padding: 10px;
    width:150px;
  }
}

.categories {
  margin-top: 5px;
  margin-bottom: 5px;

  > span {
    margin-right: 10px;
    margin-top: 7px;
    background-color: $bs-info-bg;
  }
}

</style>
