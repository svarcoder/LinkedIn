import React, { useCallback, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
	AddPhotoText,
	ArtCard,
	CardBackground,
	CommunityCard,
	Container,
	Item,
	Link,
	Photo,
	UserInfo,
	Widget,
} from "./style";
import WidgetI from "../../../../asset/images/widget-icon.svg";
import ItemI from "../../../../asset/images/item-icon.svg";
import Plus from "../../../../asset/images/plus-icon.svg";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
	};
};

const LeftSide = (props: any) => {
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />
					<a>
						<Photo />
						<Link>Welcome, {props.user ? props.user.displayName : ""}</Link>
					</a>
					<a>
						<AddPhotoText>Add a photo</AddPhotoText>
					</a>
				</UserInfo>
				<Widget>
					<a>
						<div>
							<span>Connections</span>
							<span>Grow your network</span>
						</div>
						<img src={WidgetI} alt='' />
					</a>
				</Widget>
				<Item>
					<span>
						<img src={ItemI} alt='' />
						My Items
					</span>
				</Item>
			</ArtCard>

			<CommunityCard>
				<a>
					<span>Groups</span>
				</a>
				<a>
					<span>
						Events
						<img src={Plus} alt='' />
					</span>
				</a>
				<a>
					<span>Follow Hashtags</span>
				</a>
				<a>
					<span>Discover more</span>
				</a>
			</CommunityCard>
		</Container>
	);
};

export default connect(mapStateToProps)(LeftSide);
