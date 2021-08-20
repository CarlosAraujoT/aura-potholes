export const itemReducer = (state, action) => {
	switch (action.type) {
		case "setId":
			return {
				...state,
				id: action.payload,
			};

		case "reset":
			return {
				...state,
				id: 0,
			};

		default:
			return state;
	}
};
