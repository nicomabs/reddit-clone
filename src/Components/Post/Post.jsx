import React, { useState } from 'react';
import Upvote from '../Button/Button';
import './Post.css';

export default function Post() {
	const topic = '/E loremakjsbdekcsbdckbsdc';
	const subject = 'qsdcbm<kbsibcuerbcekbrcsldicbqsobcquidcqsbdpuciqsbvpzievc';

	return (
		<div className="post-container">
			<article>
				<h3>{topic}</h3>
				<p>{subject}</p>
			</article>
			<Upvote />
		</div>
	);
}
