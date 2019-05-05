import * as React from 'react';

export interface EntryFormProps {
	firstname: string;
	lastname: string;
}

export default class EntryForm extends React.Component<EntryFormProps, {}> {
	render() {
		const { firstname, lastname } = this.props;
		return (
			<h1>
				Hello from {firstname} and {lastname}!
			</h1>
		);
	}
}
