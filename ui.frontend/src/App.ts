import { Component, Mixins } from 'vue-property-decorator'
import { RouteHelperMixin } from '@/components/RouteHelper/RouteHelperMixin'
import Header from '@/components/Header/Header.vue'

@Component
export default class App extends Mixins(RouteHelperMixin) {
  render (createElement: Function) {
    return createElement('div', [
      createElement(Header),
      ...this.childComponents.map((component) => createElement(component)),
      createElement('router-view')
    ])
  }
}
