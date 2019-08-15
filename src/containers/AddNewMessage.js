import { connect } from 'react-redux';
import AddNewMessageComponent from '../components/AddNewMessage'
import { addMessage } from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addMessage: (message, from) => {
    dispatch(addMessage(message, from));
  }
})

export const AddNewMessage = connect(state => ({
  name: state.login
}), mapDispatchToProps)(AddNewMessageComponent)