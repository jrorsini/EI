import React from 'react';
import ReactDOM from 'react-dom';
import EmotionalDiary from './components/EmotionalDiary';
import Header from './components/Header';
import '../node_modules/normalize.css/normalize.css';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EmotionalDiaryRouter = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={EmotionalDiary} />
			<Route path="/list" component={List} />
		</div>
	</Router>
);

const List = () => (
	<div>
		<h2>About</h2>
	</div>
);

ReactDOM.render(<EmotionalDiaryRouter />, document.getElementById('app'));
