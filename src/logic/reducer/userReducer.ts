import { SET_USER } from "../action/action";

const initialState = {
	user: null,
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};
			break;

		default:
			return state;
	}
};

export default userReducer;
