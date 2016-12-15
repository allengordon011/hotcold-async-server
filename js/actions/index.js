

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

export const FETCH
