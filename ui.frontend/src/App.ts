import { withModel } from '@mavice/aem-vue-editable-components'
import { Component, Mixins } from 'vue-property-decorator'
import { RouteHelperMixin } from '@/components/RouteHelper/RouteHelperMixin'

@Component
export class App extends Mixins(RouteHelperMixin) {
}

export default withModel(App)
