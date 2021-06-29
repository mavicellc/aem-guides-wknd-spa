<template>
  <div class="Banner">
    <h4>{{bannerText}}</h4>
    <div class="BannerImage">
      <img
        class="Image-src"
        :src="src"
        :alt="alt"
        :title="title ? title : alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    bannerText: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
