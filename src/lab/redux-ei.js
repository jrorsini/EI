import { createStore } from 'redux';

const demoState = {
	lang: 'fr',
	greeting: 'Bonjour',
	text: {
		fr: 'Bonjour',
		en: 'Hello',
		jp: '‚±‚ñ‚É‚¿‚Í'
	}
};

const store = createStore((state = demoState, action) => {
	switch (action.type) {
		case 'CHANGE_LANG':
			return { ...state, greeting: state.text[action.lang], lang: action.lang };
			break;
		default:
			return state;
			break;
	}
});

const unsubscribe = store.subscribe(() => {
	console.log(store.getState().greeting);
});

const changeLang = lang => ({
	type: 'CHANGE_LANG',
	lang
});

store.dispatch(changeLang('en'));
store.dispatch(changeLang('jp'));
store.dispatch(changeLang('fr'));
