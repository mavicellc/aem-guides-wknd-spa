import Text from './components/Text/Text'
import Image from './components/Image/Image'
import Banner from './components/Banner/Banner'
import AppPage from './components/Page/AppPage'
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

// Image Component Mapping
MapTo('wknd-spa-vue/components/image')(
  Image,
  {
    emptyLabel: 'Image',
    isEmpty: function (props) {
      return !props || !props.src || props.src.trim().length < 1
    },
    resourceType: 'wknd-spa-vue/components/image'
  }
)

MapTo('wknd-spa-react/components/banner')(Banner, {
  emptyLabel: 'Banner',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  }
})

// AppPage Mapping
MapTo('wknd-spa-vue/components/page')(withComponentMappingContext(AppPage))
