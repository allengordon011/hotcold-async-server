import React from 'react'

export default function GameContainer() {

	return(
		<div className="gameContainer">
			<Guesses />
			<Form />
			<GuessCount />
			<PastGuesses />
		</div>

		)
}