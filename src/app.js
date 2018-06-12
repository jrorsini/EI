import React from 'react';
import ReactDOM from 'react-dom';
import EmotionalDiary from './components/EmotionalDiary';
import '../node_modules/normalize.css/normalize.css';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EmotionalDiaryRouter = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/list">List</Link>
				</li>
			</ul>
			<Route exact path="/" component={Home} />
			<Route path="/list" component={List} />
		</div>
	</Router>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const List = () => (
	<div>
		<h2>About</h2>
	</div>
);

ReactDOM.render(<EmotionalDiaryRouter />, document.getElementById('app'));
