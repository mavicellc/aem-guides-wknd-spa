import { Component, Mixins } from 'vue-property-decorator'
import { RouteHelperMixin } from '@/components/RouteHelper/RouteHelperMixin'

@Component
export default class App extends Mixins(RouteHelperMixin) {
}
