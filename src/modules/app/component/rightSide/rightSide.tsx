import React, { useCallback, useEffect } from "react";
import {
	Avatar,
	BannerCard,
	Container,
	FeedList,
	FollowCard,
	Recommendation,
	Title,
} from "./style";
import RecommendationI from "../../../../asset/images/right-icon.svg";
import Feed from "../../../../asset/images/feed-icon.svg";

const RightSide = (props: any) => {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Add to your feed</h2>
					<img src={Feed} alt='' />
				</Title>

				<FeedList>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Linkedin</span>
							<button>Follow</button>
						</div>
					</li>
					<li>
						<a>
							<Avatar />
						</a>
						<div>
							<span>#Video</span>
							<button>Follow</button>
						</div>
					</li>
				</FeedList>

				<Recommendation>
					View all recommendations
					<img src={RecommendationI} alt='' />
				</Recommendation>
			</FollowCard>
			<BannerCard>
				<img
					src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
					alt=''
				/>
			</BannerCard>
		</Container>
	);
};

export default RightSide;
