import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div className="header">
		<div className="container">
			<h1 className="header__title">Emotional Diary</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/list">List</Link>
				</li>
			</ul>
		</div>
	</div>
);

export default Header;
