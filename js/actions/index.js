import 'isomorphic-fetch';
import store from '../store';

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	magicNum: Math.floor(Math.random() * 100) + 1
	});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (num, feedback, count) => ({
	type: ADD_GUESS,
	num,
	feedback,
	count
});

export const checkGuess = (guess) => (dispatch, getState) => {
	let feedback = "";
	const state = store.getState();
	let guessDiff = Math.abs(guess - state.answer);
	let count = state.count;
	// console.log('guess: ', action.num);
	console.log('answer: ', state.answer)
	// console.log('diff: ', guessDiff);
	console.log('old record: ', state.record)

	if (guessDiff === 0){
		if(state.guessedNumbers.length + 1 < state.record){
			console.log('NEW RECORD! ', state.guessedNumbers.length + 1);
			feedback = 'You scored a NEW RECORD! Click NEW GAME to play again.';
			dispatch(addRecord(state.guessedNumbers.length + 1));
		} else if (state.record === undefined){
			feedback = 'Good job! Click NEW GAME to play again.';
		} else {
			feedback = 'Great! But, keep trying to beat your record! Click NEW GAME to play again.';
		}
	}
	else if (guessDiff <= 10){
		feedback = 'You\'re hot';
	}
	else if((guessDiff > 10) && (guessDiff <= 20)){
		feedback = 'Getting warmer!';
	}
	else if((guessDiff > 20) && (guessDiff <= 30)){
		feedback = 'Getting colder!';
	}
	else {
		feedback = 'You\'re cold'
	}
	count ++;
	dispatch(addGuess(guess, feedback, count));
}

const url = "http://localhost:8081/record";

export const ADD_RECORD = 'ADD_RECORD';
export const addRecord = (data) => dispatch => {
	let obj = JSON.stringify({record : data});
	console.log('post data: ', obj)
	fetch(url, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: obj
	  })
		.catch(error =>
			dispatch(fetchError(data, error))
		)
}

// export const FETCH_RECORD = 'FETCH_RECORD';
export const fetchRecord = () => dispatch => {
	console.log('fetching record!')
	return fetch(url).then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data =>
		dispatch(fetchSuccess(data))
	)
	.catch(error =>
		dispatch(fetchError(null, error))
	)
};

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = num => ({
	type: FETCH_SUCCESS,
	num
});

const FETCH_ERROR = 'FETCH_ERROR';
const fetchError = err => ({
	type: FETCH_ERROR,
	err
})
