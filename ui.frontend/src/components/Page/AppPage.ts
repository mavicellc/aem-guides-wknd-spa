import { Page, PageModel } from '@mavice/aem-vue-editable-components'
import { Component, Mixins, Prop } from 'vue-property-decorator'
import { Model } from '@adobe/aem-spa-page-model-manager'

@Component
export default class AppPage extends Mixins(Page) {
  @Prop({ default: () => {} }) cqItems!: { [key: string]: Model };
  @Prop({ default: () => [] }) cqItemsOrder!: string[];
  @Prop({ default: '' }) cqPath!: string;
  @Prop({ default: () => {} }) cqChildren!: { [key: string]: PageModel };
}
