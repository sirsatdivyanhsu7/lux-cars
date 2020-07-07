import {connect} from 'react-redux';

import CarsFullView from './CarsFullView';

function mapStateToProps(state) {
  return {
    userID: state.auth.userID,
  };
}

export default connect(mapStateToProps)(CarsFullView);
