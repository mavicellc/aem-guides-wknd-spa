import './import-components'
import { AuthoringUtils, Constants, ModelManager } from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'
import './App.scss'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      router: new VueRouter({
        mode: 'history'
      }),
      render: h => {
        return h(App, {
          props: {
            cqChildren: pageModel[Constants.CHILDREN_PROP],
            cqItems: pageModel[Constants.ITEMS_PROP],
            cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
            cqPath: pageModel[Constants.PATH_PROP],
            isInEditor: AuthoringUtils.isInEditor(),
            locationPathname: window.location.pathname,
            injectPropsOnInit: false
          }
        })
      }
    }).$mount('#spa-root')
  })
})
