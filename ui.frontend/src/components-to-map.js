import Text from './components/Text'
import Image from './components/Image'
import AppPage from './components/AppPage'
import { withComponentMappingContext, MapTo } from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('wknd-spa-vue/components/text')(
  Text,
  {
    emptyLabel: 'Text',
    isEmpty: function (props) {
      return !props || !props.text || props.text.trim().length < 1
    },
    resourceType: 'wknd-spa-vue/components/text'
  }
)

MapTo(['wknd-spa-vue/components/image'])(Image, {
  emptyLabel: 'Image',

  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  }
})

// AppPage Mapping
MapTo('wknd-spa-vue/components/page')(withComponentMappingContext(AppPage))
