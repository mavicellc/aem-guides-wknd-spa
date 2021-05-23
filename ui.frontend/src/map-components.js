import Text from './components/Text/Text'
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

// AppPage Mapping
MapTo('wknd-spa-vue/components/page')(withComponentMappingContext(AppPage))
