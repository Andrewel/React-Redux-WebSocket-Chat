import { connect } from 'react-redux';
import AddNewMessageComponent from '../components/AddNewMessage'
import { addMessage } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addMessage: (from, message) => {
    dispatch(addMessage(from, message));
  }
})

export const AddNewMessage = connect(state => ({
  name: state.login,
}), mapDispatchToProps)(AddNewMessageComponent)