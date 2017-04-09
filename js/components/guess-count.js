import React from 'react';
import {connect} from 'react-redux';

function GuessCount(props) {
    if(props.record != 99){
      return (
    		<div className="guess-count">
    			<p>You are on guess #{props.count}!</p>
                <p className="guess-record">Beat your record of # guesses: {props.record}!</p>

    		</div>

      )
  } else { return (
      <div className="guess-count">
          <p>You are on guess #{props.count}!</p>
      </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  count: state.count,
  record: state.record
});

export default connect(mapStateToProps)(GuessCount);
