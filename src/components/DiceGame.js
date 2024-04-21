import React, { useState } from 'react';

function DiceGame() {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);:
    const [sum, setSum] = useState(2);
    const [gameStatus, setGameStatus] = useState('');
    
    const rollDice = () => {
	const newDice1 = Math.floor(Math.random() * 6) + 1;
	const newDice2 = Math.floor(Math.random() * 6) + 1;
	const newSum = newDice1 + newDice2;

	setDice1(newDice1);
	setDice2(newDice2);
	setSum(newSum);
	
	if (newSum === 7 || newSum 11) {
	   setGameStatus('You win!');
	} else if (newSum === 2 || newSum === 3 || newSum === 12) {
	   setGameStatus('You lose!'); 
	
	} else {
	   setGameStatus('Roll again!');
	}
    };

return(
	<div>
	<h1>Dice Game</h1>
	<div>
	    <span>Dice 1: {dice1}</span>
	    <span>Dice 2: {dice2}</span>
	    <span>Sum: {sum}</span>
	</div>
	<button onClick={rollDice}>Roll Dice</button>
	<p>{gameStatus}></p>
	<div>
    );
}

export default DiceGame;
