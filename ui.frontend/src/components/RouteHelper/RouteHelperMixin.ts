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

import { VueConstructor } from 'vue'
import { Page, Utils } from '@mavice/aem-vue-editable-components'
import { Component, Mixins } from 'vue-property-decorator'

/**
 * A mixin that provides routes and route to component mapping for the child pages
 *
 */

@Component({})
export class RouteHelperMixin extends Mixins(Page) {
  created () {
    if (this.cqChildren && this.$router) {
      // @ts-ignore
      Object.keys(this.cqChildren).map<VueConstructor>((itemKey, i) => {
        const itemProps = Utils.modelToProps(this.cqChildren[itemKey])
        const ItemComponent: any = this.state.componentMapping.get(itemProps.cqType)
        const isInEditor = this.isInEditor
        if (ItemComponent) {
          this.$router.addRoute('root', {
            path: itemProps.cqPath + '.html',
            name: itemProps.cqPath + '.html',
            props: {
              ...itemProps,
              containerProps: itemProps,
              cqPath: itemProps.cqPath,
              isInEditor: isInEditor
            },
            component: ItemComponent
          })
        }
      })
    }
  }

  render (createElement: Function) {
    return createElement('div', [
      ...this.childComponents.map((component) => createElement(component)),
      createElement('router-view')
    ])
  }
}
