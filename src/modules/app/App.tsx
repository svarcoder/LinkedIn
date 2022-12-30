import React, { useEffect } from "react";
import HomeRoute from "./component/homeRoute/homeRoutes";
import { getUserAuth } from "../../logic/action/action";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

function App(props: any) {
	useEffect(() => {
		props.getUserAuth();
	}, []);

	return (
		<>
			<HomeRoute />
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
