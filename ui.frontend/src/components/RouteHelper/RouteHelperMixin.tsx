/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

import Vue, { VueConstructor } from 'vue'
import { Component, Mixins } from 'vue-property-decorator'
import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager'
import { ComponentMapping, Constants, Page, Utils } from '@mavice/aem-vue-editable-components'

/**
 * A mixin that provides routes and route to component mapping for the child pages
 *
 */

@Component({})
export class RouteHelperMixin extends Mixins(Page) {
  mounted () {
    if (this.cqChildren) {
      // @ts-ignore
      Object.keys(this.cqChildren).map<VueConstructor>((itemKey) => {
        const itemProps = Utils.modelToProps(this.cqChildren[itemKey])
        const ItemComponent: any = ComponentMapping.get(itemProps.cqType)
        const path = itemProps.cqPath.substring(itemProps.cqPath.lastIndexOf('/') + 1)
        if (ItemComponent) {
          this.$router.addRoute('root',
            {
              path: '(.*)' + path + '.html' || '',
              component: Vue.extend({
                name: 'Route',
                render (h: Function) {
                  return h(ItemComponent, {
                    props: {
                      ...itemProps,
                      cqPath: itemProps.cqPath,
                      isInEditor: AuthoringUtils.isInEditor(),
                      injectPropsOnInit: false
                    }
                  })
                }
              })
            }
          )
        }
      })
    }
  }

  render () {
    return <div class={Constants._PAGE_CLASS_NAMES} data-cq-data-path={this.cqPath}>
      {this.childComponents}
      <router-view></router-view>
    </div>
  }
}
