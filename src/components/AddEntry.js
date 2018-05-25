import React from 'react';

const AddEntry = props => (
	<div>
		{props.errorMessage && <p>{props.errorMessage}</p>}
		<form onSubmit={props.handleAddEntry}>
			<select name="emotion">
				<option defaultValue value={false} selected disabled hidden>
					What are you feeling right now?
				</option>
				<optgroup label="High Activation">
					<option value="excited">Excited</option>
					<option value="surprised">Surprised</option>
					<option value="active">Active</option>
					<option value="rapt">Rapt</option>
				</optgroup>
				<optgroup label="Positive Affect">
					<option value="enthusiastic">Enthusiastic</option>
					<option value="cheerful">Cheerful</option>
					<option value="excited">Excited</option>
					<option value="euphoric">Euphoric</option>
					<option value="animated">Animated</option>
					<option value="peppy">Peppy</option>
				</optgroup>
				<optgroup label="Pleasant or Positive">
					<option value="happy">Happy</option>
					<option value="delighted">Delighted</option>
					<option value="glad">Glad</option>
					<option value="joyful">Joyful</option>
					<option value="hearty">Hearty</option>
					<option value="satisfied">Satisfied</option>
				</optgroup>
			</select>
			<input
				name="trigger"
				type="text"
				placeholder="What did trigger that emotion??"
			/>
			<input type="submit" value="Add Entry" />
		</form>
	</div>
);

export default AddEntry;
