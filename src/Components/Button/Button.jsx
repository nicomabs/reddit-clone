import React, { useState } from 'react';

export default function Upvote({ votes, increment, decrement }) {
	return (
		<div>
			<button Style="color:orange" onClick={increment}>
				incrementer
			</button>
			<button Style="color:red" onClick={decrement}>
				decrementer
			</button>
			<div>{votes}</div>
		</div>
	);
}
