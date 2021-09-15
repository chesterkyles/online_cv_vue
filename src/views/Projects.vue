<template>
  <div :id="$options.name" class="col-10">
    <h1>{{$options.name}}</h1>
    <div class="slider_container">
      <slider ref="slider" :options="options">
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
            <i class="fas fa-tools"></i>&nbsp;Page Under Construction!
          </slideritem>
          <div slot="loading">loading...</div>
      </slider>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'

export default {
  name: 'Projects',
  components: {
    slider,
    slideritem
  },
    data () {
    return {
      // Write project list here
      // Transfer to projects.json
      someList:[
        {
          style: {'background': '#1bbc9b'}
        },
        {
          style: {'background': '#4bbfc3'}
        },
        {
          style: {'background': '#7baabe'}
        }
      ],
      options: {
        currentPage: 0
      }
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

.slider_container {
  width:100%;
  margin:20px auto;
  height:400px
}
</style>
