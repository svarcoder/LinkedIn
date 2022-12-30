import React, { useCallback, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Header from "../header";
import LeftSide from "../leftSide";
import Main from "../main";
import RightSide from "../rightSide";
import { Container, Layout, Section } from "./style";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch: any) => ({});

const Home = (props: any) => {
	return (
		<>
			<Header />
			<Container>
				{!props.user && <Redirect to='/' />}
				<Section>
					<h5>
						<a>Hiring in a hurry? - </a>
					</h5>
					<p>
						Find talented pros in record time with Upwork and keep business
						moving.
					</p>
				</Section>
				<Layout>
					<LeftSide />
					<Main />
					<RightSide />
				</Layout>
			</Container>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
