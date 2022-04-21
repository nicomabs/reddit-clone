import React, { useState } from 'react';

export default function Upvote() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<button Style="color:orange" onClick={increment}>
				incrementer
			</button>
			<button Style="color:red" onClick={decrement}>
				decrementer
			</button>
			<div>{count}</div>
		</div>
	);
}
