import * as actions from '../actions/index';

const initialGameState = {
	guessedNumbers: [],
	answer: 34,
	feedback: 'make a guess',
	count: 0
}

export const mainReducer = (state = initialGameState, action) => {
	if (action.type === actions.ADD_GUESS) {
		var response = '';
		var ln = state.answer;
		var un = action.num;
		var diff = Math.abs(ln - un)
		var count = state.count;

	    if (diff === 0) {
			response += 'you are freaking incredible, wow good job, good effort'

		} else if (diff <= 10) {
   			response += 'you are so hot, i can\'t even compute'

		} else if (diff <= 20) {
			response += 'its okay... some of us are just not meant to win'

		} else if (diff <= 40) {
			response += 'maybe you should just give up'

		} else {
			response += 'i honestly dont know what to tell ya.. '
		}
		count++

		return { ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			feedback: response,
			count: count
			}
	}

	if(action.type === actions.NEW_GAME) {
		return { ...state,
			answer: action.magicNum,
			count: 0,
			feedback: 'welcome, prepare to be destroyed',
			guessedNumbers: []
			}
	}

	return state;
};
