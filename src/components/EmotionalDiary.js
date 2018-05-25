import React from 'react';
import AddEntry from './AddEntry';

export default class EmotionalDiary extends React.Component {
	render() {
		return (
			<div>
				<h1>Emotional Diary</h1>
				<AddEntry />
			</div>
		);
	}
}
