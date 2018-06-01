import React from 'react';

const AddEntry = props => (
	<div className="container">
		{props.errorMessage && <p>{props.errorMessage}</p>}
		<form onSubmit={props.handleAddEntry} className="addEntry">
			<select name="emotion">
				<option defaultValue value={true} selected disabled hidden>
					How are you feeling right now?
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
				<optgroup label="Low Activation / Lack of stimulation - positive affect">
					<option value="dazed">Nostalgic</option>
					<option value="bored">Modest</option>
					<option value="listless">Cheerful</option>
					<option value="numb">Relaxed</option>
					<option value="tired">Happy</option>
					<option value="lethargic">Rested</option>
					<option value="heavy">Calm</option>
					<option value="distressed">Cheerful</option>
					<option value="tired">Easy</option>
					<option value="ashamed">Shy</option>
					<option value="disappointed">Serious</option>
					<option value="disappointed">Sleepy</option>
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
				<optgroup label="Negative affect">
					<option value="unhappy">Jealous</option>
					<option value="depressed">Disgusted</option>
					<option value="sad">Confused</option>
					<option value="sour">Stressed</option>
					<option value="deary">Angry</option>
					<option value="downcast">Frightened</option>
					<option value="downcast">Upset</option>
					<option value="downcast">Jittery</option>
					<option value="downcast">Concerned</option>
					<option value="downcast">Contradictory</option>
					<option value="downcast">Alarmed</option>
					<option value="downcast">Furious</option>
				</optgroup>
			</select>
			<input
				name="trigger"
				type="text"
				className="addEntry__input"
				placeholder="What did trigger that feeling?"
			/>
			<input type="submit" className="button" value="Add Entry" />
		</form>
	</div>
);

export default AddEntry;
