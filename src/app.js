import React from 'react';
import ReactDOM from 'react-dom';
import EmotionalDiary from './components/EmotionalDiary';
import Header from './components/Header';
import '../node_modules/normalize.css/normalize.css';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';

const demoState = {
	entries: []
};
const store = createStore((state = demoState, action) => {
	return state;
});

console.log(store.getState());

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
	<div className="container">
		<h2>Entry List</h2>
	</div>
);

ReactDOM.render(<EmotionalDiaryRouter />, document.getElementById('app'));
