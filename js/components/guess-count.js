import React from 'react';
import {connect} from 'react-redux';

function GuessCount(props) {

  return (
		<div>
			<p>Beat your record of # guesses: {props.record}!</p>
			<p>You are on guess #{props.count}!</p>
		</div>

  )
}

const mapStateToProps = (state, props) => ({
  count: state.count,
  record: state.record
});

export default connect(mapStateToProps)(GuessCount);
