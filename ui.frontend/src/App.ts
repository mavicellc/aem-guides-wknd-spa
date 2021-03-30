import { Page, withModel } from '@mavice/aem-vue-editable-components'
import { Component, Mixins, Prop, Vue } from 'vue-property-decorator'

@Component
export class App extends (Page) {
}

export default withModel(App)
