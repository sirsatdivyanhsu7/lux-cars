import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../../redux/Actions';

import Home from './Home';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
