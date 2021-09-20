<template>
    <div class="col-xxl-3 m-1 m-xl-2 custom-card dark blue" v-lazy-container="{ selector: 'img' }">
      <div class="card-front">
        <img :data-src="require(`../assets/images/${service.icon}`)"
          :alt="service.name"
          @contextmenu.prevent="handler"
        />
        <h3>{{ service.name }}</h3>
        <div class="categories">
          <span v-for="category in service.categories" :key="category" class="badge">{{ category }}</span>
        </div>
      </div>
      <div class="card-back p-5">
        <h3 class="description">{{ service.description }}</h3>
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
@import '../assets/scss/postcard.scss';

$bs-info-bg: rgba(31, 154, 192);
$dark-bg:  rgb(44, 78, 88, 0.95);
.custom-card {
  height: auto!important;
  border-radius: 10px;
  border: 5px solid rgba(255,255,255, 0.9);
  padding: 30px;
  max-width: 500px;
  transition: 1s;
  -webkit-box-reflect:below 0px linear-gradient(transparent, transparent, #0004);
  color: #fff;
  transform-style: preserve-3d;
  perspective: 600px;

  &:hover .card-front {
    transform: rotateX(-180deg);
  }

  &:hover .card-back {
    transform: rotateX(0deg);
  }
}

h3 {
  text-transform: none!important;
}

.card-front {
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: .5s;
}

.card-back {
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent;
  backface-visibility: hidden;
  transform: rotateX(180deg);
    transition: .5s;
}

img {
  padding: 10px;
  width: 100px;
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

h3.description {
  font-size: 1.5rem;
}

@media screen and (min-width: 1570px) {
  .custom-card {
    width: 330px;
    padding: 50px;
  }

  img {
    padding: 10px;
    width:150px;
  }

  h3.description {
    font-size: 2rem;
  }

}

</style>
