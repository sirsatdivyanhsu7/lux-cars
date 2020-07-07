import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateID} from '../../../redux/Actions';

import LoginScreen from './LoginScreen';

function mapStateToProps(state) {
  return {
    userID: state.auth.userID,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({updateID}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
