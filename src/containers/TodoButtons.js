import { connect } from 'react-redux'
import TodoButtons from '../components/TodoButtons'
import { asyncAddItem as asyncAddItemAction } from '../actions/'

function mapDispatchToProps (dispatch) {
  return {
    addItem: itemName => dispatch(asyncAddItemAction(itemName))
  }
}

export default connect(undefined, mapDispatchToProps)(TodoButtons)

