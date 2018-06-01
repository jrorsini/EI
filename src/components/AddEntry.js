import React from 'react';

const AddEntry = props => (
	<div className="container">
		{props.errorMessage && <p>{props.errorMessage}</p>}
		<form onSubmit={props.handleAddEntry} className="addEntry">
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
				<optgroup label="Low Activation / Lack of stimulation">
					<option value="calm">Calm</option>
					<option value="quiet">Quiet</option>
					<option value="inactive">Inactive</option>
					<option value="lazy">Lazy</option>
					<option value="passive">Passive</option>
				</optgroup>
				<optgroup label="Low Activation / Lack of stimulation - negative affect">
					<option value="dazed">Dazed</option>
					<option value="bored">bored</option>
					<option value="listless">Listless</option>
					<option value="numb">Numb</option>
					<option value="tired">Tired</option>
					<option value="lethargic">Lethargic</option>
					<option value="heavy">Heavy</option>
					<option value="distressed">Distressed</option>
					<option value="tired">Tired</option>
					<option value="ashamed">Ashamed</option>
					<option value="disappointed">Disappointed</option>
				</optgroup>
				<optgroup label="Unpleasant / negative">
					<option value="unhappy">Unhappy</option>
					<option value="depressed">Depressed</option>
					<option value="sad">Sad</option>
					<option value="sour">Sour</option>
					<option value="deary">Deary</option>
					<option value="downcast">Downcast</option>
				</optgroup>
			</select>
			<input
				name="trigger"
				type="text"
				placeholder="What did trigger that emotion??"
			/>
			<input type="submit" className="button" value="Add Entry" />
		</form>
	</div>
);

export default AddEntry;
