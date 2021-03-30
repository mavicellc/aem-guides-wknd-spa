import './import-components'
import { AuthoringUtils, Constants, ModelManager } from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      render: h => h(App, {
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
    }).$mount('#spa-root')
  })
})
