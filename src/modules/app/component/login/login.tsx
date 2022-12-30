import React from "react";
import {
	Container,
	Form,
	Google,
	Hero,
	Join,
	Nav,
	Section,
	SignIn,
} from "./style";
import LoginLogo from "../../../../asset/images/login-logo.svg";
import LoginHero from "../../../../asset/images/login-hero.svg";
import GoogleLogo from "../../../../asset/images/google.svg";
import { IoMdCall } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { connect } from "react-redux";
import { facebookSingAPI, singAPI } from "../../../../logic/action/action";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	singAPI: () => dispatch(singAPI()),
	facebookSingAPI: () => dispatch(facebookSingAPI()),
});

const Login = (props: any) => {
	return (
		<Container>
			{props.user && <Redirect to='/home' />}
			<Nav>
				<a href='/'>
					<img src={LoginLogo} alt='' />
				</a>
				<div>
					<Join>Join now</Join>
					<SignIn>Sign in</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your professional community</h1>
					<img src={LoginHero} alt='' />
				</Hero>
				<Form>
					<Google onClick={() => props.singAPI()}>
						<img src={GoogleLogo} alt='' />
						Sign in with Google
					</Google>
					<Google onClick={() => props.facebookSingAPI()}>
						<BsFacebook size={22} />
						Sign in with Facebook
					</Google>
				</Form>
			</Section>
		</Container>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
