import React from 'react';
import {connect} from 'react-redux';

function PrevGuesses(props) {
	// have access to guessed numbers array in props.
	let list;
	list = props.guessedNumbers.map((num, index) => {
		return (
			<li key={index}>{num}</li>
		);
	});
	// console.log("guesses length: ", props.guessedNumbers.length)
	if(props.guessedNumbers.length > 0){
	return (
		<div id="prev-guesses">
			<h3>Previous Guesses:</h3>
			<ul>{list}</ul>
		</div>
	)} else return <div></div>
}

const mapStateToProps = (state, props) => ({
  guessedNumbers: state.guessedNumbers
});

export default connect(mapStateToProps)(PrevGuesses);
