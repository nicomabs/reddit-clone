import './App.css';
import Upvote from './Components/Button/Button';
import PostFeed from './Components/PostFeed/PostFeed';

function App() {
	return (
		<div className="App">
			<header className="App-header">Reddit Clone</header>
			<PostFeed />
		</div>
	);
}

export default App;
