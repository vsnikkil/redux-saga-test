import { connect } from 'react-redux'
import Application from '../components/Application'
import { addItem, removeItem } from '../actions/'

function mapStateToProps ({ items }) {
  return {
    items
  }
}

export default connect(mapStateToProps)(Application)

