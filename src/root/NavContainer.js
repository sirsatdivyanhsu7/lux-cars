import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../redux/Actions';

import Navigation from './Navigation';

function mapStateToProps(state) {
  return {
    shouldShowLoader: state.dataReducer._showLoader,
    shouldShowMessagePopup: state.messageReducer._showMessagePopup,
    heading: state.messageReducer._heading,
    message: state.messageReducer._message,
  };
}

function mapDispatchToProps(dispatch) {
  const mergedActions = Object.assign({}, Actions);
  return bindActionCreators(mergedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
