import 'isomorphic-fetch';

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	magicNum: Math.floor(Math.random() * 100) + 1
})

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = num => ({
	type: ADD_GUESS,
	num: num
});

export const ADD_RECORD = 'ADD_RECORD';
export const addRecord = (data) => dispatch => {
	let obj = JSON.stringify({record : data});
	console.log('post data: ', obj)
	const url = "http://localhost:8081/record";
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

export const FETCH_RECORD = 'FETCH_RECORD';
export const fetchRecord = () => dispatch => {
	const url = "http://localhost:8081/record";
	return fetch(url).then(response => {
		// if (!response.ok) {
		// 	const error = new Error(response.statusText)
		// 	error.response = response
		// 	throw error;
		// }
		console.log('RECORD: ', response.body.record)

		// return response;
	})
	// .then(response =>
	// 	// console.log('hey! response:', response)
	// 	response.json()
	// )
	// .then(data =>
	// 	console.log('response data: ', data)
	// 	// dispatch(fetchSuccess(data))
	// )
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
