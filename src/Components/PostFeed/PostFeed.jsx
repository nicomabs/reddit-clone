import React from 'react';
import Post from '../Post/Post';

export default function PostFeed() {
	const numbers = [1, 2, 3, 4, 5, 6, 7];
	const postsList = numbers.map(el => (
		<li>
			<Post />
		</li>
	));
	return (
		<div className="postfeed-container">
			<ul className="postslist">{postsList}</ul>
		</div>
	);
}
