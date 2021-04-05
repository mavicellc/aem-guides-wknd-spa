<template>
  <div>
    <div
      v-if="richText"
      :id="modelId"
      data-rte-editelement
      v-html="getRichTextContent()"
    ></div>
    <div v-else
         :id="modelId"
         data-rte-editelement
         v-html="text">
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
import extractModelId from '../../utils/extract-model-id'

export default {
  name: 'Text',
  props: {
    cqPath: {
      type: String
    },
    richText: {
      type: Boolean
    },
    text: {
      type: String
    }
  },
  computed: {
    modelId () {
      return extractModelId(this.cqPath)
    }
  },
  methods: {
    getRichTextContent () {
      return DOMPurify.sanitize(this.text)
    }
  }
}

</script>
<style scoped lang="scss">
</style>
