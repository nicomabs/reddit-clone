import React, { useState } from 'react';
import Post from '../Post/Post';

export default function PostFeed() {
	const [posts, setPosts] = useState([
		{
			title: 'Mon title 1',
			desciption: 'Mon descriptif 1',
			votes: 1,
		},
		{
			title: 'Mon title 2',
			desciption: 'Mon descriptif 2',
			votes: 2,
		},
	]);

	const incrementOrDecrement = (indexToFind, value) => {
		const newPosts = posts.map((el, index) => {
			if (index === indexToFind) {
				return {
					...el,
					votes: el.votes + value,
				};
			}

			return el;
		});

		setPosts(newPosts);
	};

	const postsList = posts
		.filter(el => el.votes > 0)
		.map((el, index) => (
			<li>
				{
					<Post
						title={el.title}
						description={el.description}
						votes={el.votes}
						increment={() => incrementOrDecrement(index, 1)}
						decrement={() => incrementOrDecrement(index, -1)}
					/>
				}
			</li>
		));
	return (
		<div className="postfeed-container">
			<ul className="postslist">{postsList}</ul>
		</div>
	);
}
