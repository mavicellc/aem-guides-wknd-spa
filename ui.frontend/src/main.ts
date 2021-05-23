import './map-components'
import { AuthoringUtils, ModelManager } from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'
import './App.scss'
import VueRouter from 'vue-router'
import { Constants } from '@mavice/aem-vue-editable-components'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      router: new VueRouter({
        mode: 'history',
        routes: [
          {
            name: 'root',
            path: '*',
            component: Vue.extend({
              render (createElement: Function) {
                return createElement(App, {
                  props: {
                    cqChildren: pageModel[Constants.CHILDREN_PROP],
                    cqItems: pageModel[Constants.ITEMS_PROP],
                    cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
                    cqPath: pageModel[Constants.PATH_PROP],
                    isInEditor: AuthoringUtils.isInEditor(),
                    locationPathname: window.location.pathname,
                    injectPropsOnInit: true
                  }
                })
              }
            })
          }
        ]
      }),
      render (createElement: Function) {
        return createElement(
          'div',
          {
            class: [Constants._PAGE_CLASS_NAMES],
            attrs: {
              'data-cq-data-path': pageModel[Constants.PATH_PROP],
              id: 'spa-root'
            }
          }, [
            createElement('router-view')
          ]
        )
      }
    }).$mount('#spa-root')
  })
})
