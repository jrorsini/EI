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
			</ul>
		</div>
	</Router>
);

ReactDOM.render(<EmotionalDiary />, document.getElementById('app'));
