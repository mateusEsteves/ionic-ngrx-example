import {
	DECREMENT_COUNTER,
	INCREMENT_COUNTER,
	RESET_COUNTER,
} from "./app.states";

export function counterReducer(state, {type, payload}): number {
	switch (type) {
		case INCREMENT_COUNTER:
		return state + 1;
		case DECREMENT_COUNTER:
		return state - 1;
		case RESET_COUNTER:
		return  0;
		default:
		return state;
	}
}