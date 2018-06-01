import React from 'react';

const EntryList = ({ entries }) => {
	console.log(entries);
	return (
		<div className="container">
			<ul className="entryList">
				{entries.map((_entry, index) => (
					<li className="entryList__item" key={index}>
						{_entry.emotion} {_entry.trigger}
					</li>
				))}
			</ul>
		</div>
	);
};

export default EntryList;
