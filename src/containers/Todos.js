import { connect } from 'react-redux'
import Todos from '../components/Todos'
import { removeItem as removeItemAction } from '../actions/'

function mapStateToProps ({ todos }) {
  return {
    todos 
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeItem: itemName => dispatch(removeItemAction(itemName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)

