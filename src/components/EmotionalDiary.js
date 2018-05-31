import React from 'react';
import AddEntry from './AddEntry';
import Header from './Header';
import moment from 'moment';

export default class EmotionalDiary extends React.Component {
	state = {
		entries: [],
		triggers: [],
		errorMessage: null
	};
	handleAddEntry = e => {
		e.preventDefault();
		console.log(e.target.elements);
		const emotion = e.target.elements.emotion.value;
		const trigger = e.target.elements.trigger.value;

		emotion &&
			this.setState(() => ({
				errorMessage: "Your entry doesn't have any emotions"
			}));
		!trigger &&
			this.setState(() => ({
				errorMessage: "Your entry doesn't have any trigger"
			}));

		this.setState(prevState => ({
			entries: prevState.entries.concat({
				emotion,
				trigger
			}),
			trigger:
				prevState.trigger.indexOf(trigger) === -1
					? prevState.trigger.concat(trigger)
					: prevState.trigger
		}));
	};

	render() {
		return (
			<div>
				<Header />
				<AddEntry
					handleAddEntry={this.handleAddEntry}
					errorMessage={this.state.errorMessage}
					triggers={this.state.triggers}
				/>
			</div>
		);
	}
}
