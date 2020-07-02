import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../redux/Actions';

import Navigation from './Navigation';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const mergedActions = Object.assign({}, Actions);
  return bindActionCreators(mergedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
