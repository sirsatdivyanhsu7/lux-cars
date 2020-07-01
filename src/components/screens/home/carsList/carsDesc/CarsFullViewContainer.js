import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../../../redux/Actions';

import CarsFullView from './CarsFullView';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsFullView);
