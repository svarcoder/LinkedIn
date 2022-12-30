import React, { useEffect } from "react";
import {
	Container,
	Content,
	Logo,
	Nav,
	NavList,
	NavListWrap,
	Search,
	SearchIcon,
	SignOut,
	User,
	Work,
} from "./style";
import HomeLogo from "../../../../asset/images/home-logo.svg";
import SearchI from "../../../../asset/images/search-icon.svg";
import NavHome from "../../../../asset/images/nav-home.svg";
import NavNetwork from "../../../../asset/images/nav-network.svg";
import NavJobs from "../../../../asset/images/nav-jobs.svg";
import NavMessage from "../../../../asset/images/nav-messaging.svg";
import NavNotification from "../../../../asset/images/nav-notifications.svg";
import UserLogo from "../../../../asset/images/user.svg";
import DownIcon from "../../../../asset/images/down-icon.svg";
import NavWork from "../../../../asset/images/nav-work.svg";
import { connect } from "react-redux";
import { singOutAPI } from "../../../../logic/action/action";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	singOutAPI: () => dispatch(singOutAPI()),
});

const Header = (props: any) => {
	return (
		<Container>
			<Content>
				<Logo>
					<a href='/home'>
						<img src={HomeLogo} alt='' />
					</a>
				</Logo>
				<Search>
					<div>
						<input type='text' placeholder='Search' />
					</div>
					<SearchIcon>
						<img src={SearchI} alt='' />
					</SearchIcon>
				</Search>
				<Nav>
					<NavListWrap>
						<NavList className='active'>
							<a>
								<img src={NavHome} alt='' />
								<span>Home</span>
							</a>
						</NavList>

						<NavList>
							<a>
								<img src={NavNetwork} alt='' />
								<span>My Network</span>
							</a>
						</NavList>

						<NavList>
							<a>
								<img src={NavJobs} alt='' />
								<span>Jobs</span>
							</a>
						</NavList>

						<NavList>
							<a>
								<img src={NavMessage} alt='' />
								<span>Messaging</span>
							</a>
						</NavList>

						<NavList>
							<a>
								<img src={NavNotification} alt='' />
								<span>Notifications</span>
							</a>
						</NavList>

						<User>
							<a>
								{props.user && props.user.photoURL ? (
									<img src={props.user.photoURL} alt='' />
								) : (
									<img src={UserLogo} alt='' />
								)}

								<span>
									Me
									<img src={DownIcon} alt='' />
								</span>
							</a>

							<SignOut onClick={() => props.singOutAPI()}>
								<a>Sign Out</a>
							</SignOut>
						</User>

						<Work>
							<a>
								<img src={NavWork} alt='' />
								<span>
									Work
									<img src={DownIcon} alt='' />
								</span>
							</a>
						</Work>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
