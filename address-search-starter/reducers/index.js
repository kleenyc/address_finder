// Reducer function goes here
import { SEARCH, RESULTS } from '../actions';

const initialState = ''
export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH:
			return state;
		case RESULTS:
			return [
		...state];
		default: 
			return state;
	}
};

