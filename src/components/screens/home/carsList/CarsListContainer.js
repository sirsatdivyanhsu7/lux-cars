import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../../redux/Actions';

import CarsList from './CarsList';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsList);
