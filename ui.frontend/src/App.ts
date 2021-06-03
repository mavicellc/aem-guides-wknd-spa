import { Component, Mixins } from 'vue-property-decorator'
import { Page } from '@mavice/aem-vue-editable-components'

@Component
export default class App extends Mixins(Page) {
}
