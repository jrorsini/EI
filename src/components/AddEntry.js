import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AddEntry extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		activation: 'Activation level',
		affect: 'Kind of affect',
		emotion: 'Feeling right now'
	};
	handleActivationChange = activation => {
		this.setState({ activation });
	};
	handleAffectChange = affect => {
		this.setState({ affect });
	};

	render() {
		const { activation, affect, emotion } = this.state;

		return (
			<div className="container">
				{this.props.errorMessage && <p>{this.props.errorMessage}</p>}
				<form onSubmit={this.props.handleAddEntry} className="addEntry">
					<div className="addEntry__line">
						<Select
							name="activationLevel"
							placeholder="Activation level"
							value={activation}
							onChange={this.handleActivationChange}
							options={[
								{ value: 'high', label: 'High' },
								{ value: 'normal', label: 'Normal' },
								{ value: 'low', label: 'Low' }
							]}
						/>
						<Select
							name="AffectType"
							placeholder="Kind of affect"
							value={affect}
							onChange={this.handleAffectChange}
							options={[
								{ value: 'positive', label: 'Positive' },
								{ value: 'neutral', label: 'Neutral' },
								{ value: 'negative', label: 'Negative' }
							]}
						/>
					</div>
					<div className="addEntry__line">
						<input
							name="trigger"
							type="text"
							className="addEntry__input"
							placeholder="What did trigger that feeling?"
						/>
					</div>
					<div className="addEntry__line">
						<input
							type="submit"
							className="button addEntry__button"
							value="Add Entry"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default AddEntry;

/*


const AddEntry = props => (
	<div className="container">
		{props.errorMessage && <p>{props.errorMessage}</p>}
		<form onSubmit={props.handleAddEntry} className="addEntry">
			<div className="addEntry__line">
				<Select
					name="activationLevel"
					placeholder={props.inputs.activation}
					value={props.inputs.activation}
					options={[
						{ value: 'high', label: 'High' },
						{ value: 'normal', label: 'Normal' },
						{ value: 'low', label: 'Low' }
					]}
				/>
			</div>
			<div className="addEntry__line">
				<input
					name="trigger"
					type="text"
					className="addEntry__input"
					placeholder="What did trigger that feeling?"
				/>
			</div>
			<div className="addEntry__line">
				<input
					type="submit"
					className="button addEntry__button"
					value="Add Entry"
				/>
			</div>
		</form>
	</div>
);

<select name="AffectType" onChange={() => {}}>
					<option defaultValue value={''} selected disabled hidden>
						Kind of affect
					</option>
					<option value="positive">Positive</option>
					<option value="neutral">Neutral</option>
					<option value="negative">Negative</option>
				</select>
				<select name="emotion" onChange={() => {}}>
					<option defaultValue value={''} selected disabled hidden>
						Feeling right now
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
						<option value="sleepy">Sleepy</option>
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

 */
