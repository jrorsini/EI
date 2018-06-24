import React from 'react';

const EntryList = ({ entries }) => {
	return (
		<div className="container">
			<ul className="entryList">
				{entries.map((_entry, index) => (
					<li className="entryList__item" key={index}>
						<p className="entryList__trigger">
							<span className="entryList__feeling">{_entry.emotion}</span>
							{_entry.trigger}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EntryList;
