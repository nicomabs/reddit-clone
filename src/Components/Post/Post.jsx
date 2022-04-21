import React, { useState } from 'react';
import Upvote from '../Button/Button';
import './Post.css';

export default function Post({
	title,
	description,
	votes,
	increment,
	decrement,
}) {
	return (
		<div className="post-container">
			<article>
				<h3>{title}</h3>
				<p>{description}</p>
			</article>
			<Upvote votes={votes} increment={increment} decrement={decrement} />
		</div>
	);
}
