import * as React from 'react';
import * as ReactDOM from 'react-dom';

import EntryForm from './components/EntryForm';

ReactDOM.render(
	<EntryForm firstname="Bob" lastname="Doe" />,
	document.getElementById('app')
);
