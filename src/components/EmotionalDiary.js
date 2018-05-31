import React from 'react';
import AddEntry from './AddEntry';
import Header from './Header';
import EntryList from './EntryList';

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
			triggers:
				prevState.triggers.indexOf(trigger) === -1
					? prevState.triggers.concat(trigger)
					: prevState.triggers
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
				<EntryList />
			</div>
		);
	}
}
