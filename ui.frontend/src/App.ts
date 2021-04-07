import { withModel } from '@mavice/aem-vue-editable-components'
import { Component, Mixins } from 'vue-property-decorator'
import { RouteHelperMixin } from '@/components/RouteHelper/RouteHelperMixin'
import Header from '@/components/Header/Header.vue'

@Component
export class App extends Mixins(RouteHelperMixin) {
  render (createElement: Function) {
    return createElement('div', [
      createElement(Header),
      ...this.childComponents.map((component) => createElement(component)),
      ...this.childPages.map((component) => createElement(component))
    ])
  }
}

export default withModel(App)
