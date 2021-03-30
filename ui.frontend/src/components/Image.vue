<template>
  <div style="background-color: #fafafa;">
    <div :class="{image: alt === 'Testing'}" >
      <img :src="src" :alt="alt" :title="title" :class="{img: alt === 'Testing'}"/>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
import extractModelId from '../utils/extract-model-id'

export default {
  name: 'Image',
  props: {
    cqPath: {
      type: String
    },
    alt: {
      type: String
    },
    src: {
      type: String
    },
    title: {
      type: String
    },
    cqType: {
      type: String
    }
  }
}

</script>
<style scoped>
  .image {
    width: 50%;
    margin: 0 auto;
  }
  .img {
    width: 100%;
  }
</style>
