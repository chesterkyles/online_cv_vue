<template>
  <div :id="$options.name" class="col-10 mt-0 pt-0">
    <h1>{{$options.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped>
h1 {
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: 700;
}
</style>
