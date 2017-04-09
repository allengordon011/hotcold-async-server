import * as actions from '../actions/index';

const initialState = {
	guessedNumbers: [],
	answer: 0,
	feedback: '',
	count: 0,
	record: 99
}

export const mainReducer = (state = initialState, action) => {
	if(action.type === actions.NEW_GAME) {
		return { ...state,
			answer: action.magicNum,
			guessedNumbers: [],
			feedback: '',
			count: 0
		}
	}
	// if (action.type === actions.FETCH_RECORD) {
	// 	return { ...state,
	// 	record: action.num
	// 	}
	// }
	if (action.type === actions.ADD_GUESS) {
		return { ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			feedback : action.feedback,
			count : action.count
		}
	}
	if(action.type === actions.FETCH_SUCCESS) {
		console.log('FETCH SUCCESS! ', action.num.record)
		return { ...state,
			record: action.num.record
		}
	}
	return state;
};
