import React from 'react';
import AddEntry from './AddEntry';
import moment from 'moment';

export default class EmotionalDiary extends React.Component {
	state = {
		entry: []
	};
	handleAddEntry = e => {
		e.preventDefault();
		console.log(e.target.elements);
		const emotion = e.target.elements.emotion.value;
		const trigger = e.target.elements.trigger.value;

		emotion && console.log("Your entry doesn't have any emotions");
		!trigger && console.log("Your entry doesn't have any trigger");

		this.setState(prevState => ({
			entry: prevState.entry.concat({
				emotion,
				trigger
			})
		}));
	};

	render() {
		return (
			<div>
				<h1>Emotional Diary</h1>
				<AddEntry handleAddEntry={this.handleAddEntry} />
			</div>
		);
	}
}
