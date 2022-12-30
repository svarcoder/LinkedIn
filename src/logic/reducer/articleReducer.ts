import { GET_ARTICLE, SET_LOADING_STATE } from "../action/action";

const initialState = {
	loading: false,
	articles: [],
};

const articleReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_LOADING_STATE:
			return {
				...state,
				loading: action.status,
			};
			break;
		case GET_ARTICLE:
			return {
				...state,
				articles: action.payload,
			};
			break;

		default:
			return state;
	}
};

export default articleReducer;
