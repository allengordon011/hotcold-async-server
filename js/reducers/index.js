import * as actions from '../actions/index';

const initialState = {
	guessedNumbers: [],
	answer: 0,
	feedback: '',
	count: 0,
	record: Infinity
}

export const mainReducer = (state = initialState, action) => {

	if (action.type === actions.FETCH_SUCCESS) {
		return [...state,
		record: action.num]

	}
	if (action.type === actions.ADD_GUESS) {

		let feedback = ""
		let guessDiff = Math.abs(action.num - state.answer);
		let count = state.count
		// console.log('guess: ', action.num);
		console.log('answer: ', state.answer)
		// console.log('diff: ', guessDiff);
		console.log('old record: ', state.record)

		if (guessDiff === 0){
			feedback = 'You Won! Click new game to play again';
			if(state.guessedNumbers.length + 1 < state.record){
			actions.addRecord(state.guessedNumbers.length + 1);
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
		count ++

		return { ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			feedback,
			count
		}
	}
	if(action.type === actions.NEW_GAME) {

		return { ...state,
			answer: action.magicNum,
			guessedNumbers: [],
			feedback: '',
			count: 0
		}
	}

	return state;
};
