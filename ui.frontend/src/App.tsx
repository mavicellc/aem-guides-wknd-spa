import { Component, Mixins } from 'vue-property-decorator'
import { RouteHelperMixin } from '@/components/RouteHelper/RouteHelperMixin'
import Header from '@/components/Header/Header.vue'
import { Constants } from '@mavice/aem-vue-editable-components'

@Component
export default class App extends Mixins(RouteHelperMixin) {
  render (createElement: Function) {
    return <div class={Constants._PAGE_CLASS_NAMES} data-cq-data-path={this.cqPath}>
      {createElement(Header)}
      {this.childComponents}
      <router-view></router-view>
    </div>
  }
}
