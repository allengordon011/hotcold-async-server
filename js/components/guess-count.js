import React from 'react';

import {connect} from 'react-redux'

export default function GuessCount(props) {
	
  return (
    <p>Guess #{props.stateCount}!</p>
  )
}

// const mapStateToProps = (state, props) => ({
//   count: state.count
// });

// export default connect(mapStateToProps)(GuessCount)