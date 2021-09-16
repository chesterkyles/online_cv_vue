<template>
  <div class="my-1">
    <div v-if="isDownload(info.icon)">
      <a :href="pdfFile" :download="info.text">
        <i :class="info.icon"></i><span>{{info.text}}</span>
      </a>
    </div>
    <div v-else>
      <i :class="info.icon"></i><span>{{info.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutInfo',
  props: {
    info: Object
  },
  methods: {
    isDownload(icon) {
      return icon.includes("download");
    }
  },
  data() {
    return {
      pdfFile: `${process.env.BASE_URL}chestercolita_cv.pdf`
    }
  }
}
</script>

<style scoped lang="scss">
i {
  margin-right: 0.5rem;
  width: 15px;
}

a {
  color: var(--bs-body-color);
  text-decoration: none;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
}

@media screen and (max-width: 768px) {
  span {
    font-size: 0.8rem;
  }
}
</style>
