<template>
  <div>
    <h2>{{label}}</h2>
    <div class="weather-widget-container">
      <open-weather-widget api-key=""/>
    </div>
  </div>
</template>
<script>
import OpenWeatherWidget from 'vue-open-weather-widget'
import 'vue-open-weather-widget/dist/vue-open-weather-widget.css'

// Open weather API Key
// For simplicity it is hard coded in the file, ideally this is extracted in to an environment variable
const API_KEY = 'c40064d06756e1e43acab3ac03178942'

export default {
  name: 'OpenWeather',
  props: {
    label: {
      type: String
    }
  },
  components: {
    OpenWeatherWidget
  }
}
</script>

<style scoped>

</style>
