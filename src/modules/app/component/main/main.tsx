import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
	Container,
	ShareBox,
	ArticleC,
	ShareActor,
	Description,
	ShareImg,
	SocialCount,
	SocialAction,
	Contain,
} from "./style";
import User from "../../../../asset/images/user.svg";
import PhotoIcon from "../../../../asset/images/photo-icon.svg";
import Video from "../../../../asset/images/video.svg";
import Event from "../../../../asset/images/event.svg";
import Article from "../../../../asset/images/article.svg";
import Ellipsis from "../../../../asset/images/ellipsis.svg";
import Like from "../../../../asset/images/like.svg";
import Comment from "../../../../asset/images/comment.svg";
import Share from "../../../../asset/images/share.svg";
import Send from "../../../../asset/images/send.svg";
import PostModel from "../postmodel";
import { getArticleAPI } from "../../../../logic/action/action";
import ReactPlayer from "react-player";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
		loading: state.articleState.loading,
		articles: state.articleState.articles,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	getArticleAPI: () => dispatch(getArticleAPI()),
});

const Main = (props: any) => {
	const [showModel, setshowModel] = useState("close");

	useEffect(() => {
		props.getArticleAPI();
	}, []);

	const handelClick = (e: any) => {
		e.preventDefault();
		if (e.target !== e.currentTarget) {
			return;
		}
		switch (showModel) {
			case "open":
				setshowModel("close");

				break;
			case "close":
				setshowModel("open");

				break;

			default:
				setshowModel("close");
				break;
		}
	};
	return (
		<>
			{props.articles.length === 0 ? (
				<>
					<p>There are no articles</p>
				</>
			) : (
				<Container>
					<ShareBox>
						<div>
							{props.user && props.user.photoURL ? (
								<img src={props.user.photoURL} alt='' />
							) : (
								<img src={User} alt='' />
							)}
							<button
								onClick={handelClick}
								disabled={props.loading ? true : false}>
								Start a post
							</button>
						</div>

						<div>
							<button>
								<img src={PhotoIcon} alt='' />
								<span>Photo</span>
							</button>

							<button>
								<img src={Video} alt='' />
								<span>Video</span>
							</button>
							<button>
								<img src={Event} alt='' />
								<span>Event</span>
							</button>
							<button>
								<img src={Article} alt='' />
								<span>Write a article</span>
							</button>
						</div>
					</ShareBox>
					<Contain>
						{props.loading && `Loading`}
						{props?.articles?.length > 0 &&
							props?.articles.map((item: any, i: number) => (
								<div key={i}>
									<ArticleC>
										<ShareActor>
											<a>
												<img src={item?.actor?.image} alt='' />
												<div>
													<span>{item?.actor?.title} </span>

													<span>{item?.actor?.description} </span>

													<span>
														{item?.actor?.date.toDate().toLocaleDateString()}{" "}
													</span>
												</div>
											</a>
											<button>
												<img src={Ellipsis} alt='' />
											</button>
										</ShareActor>
										<Description>{item?.image}</Description>
										<ShareImg>
											<a>
												{!item?.shareImage && item?.video ? (
													<ReactPlayer width={"100%"} url={item?.video} />
												) : (
													item?.shareImage && (
														<img src={item?.shareImage} alt='' />
													)
												)}
											</a>
										</ShareImg>
										<SocialCount>
											<li>
												<button>
													<img
														src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
														alt=''
													/>
													<img
														src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
														alt=''
													/>
													<span>75</span>
												</button>
											</li>
											<li>
												<a>{item?.comments} Comment</a>
											</li>
										</SocialCount>
										<SocialAction>
											<button>
												<img src={Like} alt='' />
												<span>Like</span>
											</button>
											<button>
												<img src={Comment} alt='' />
												<span>Comment</span>
											</button>
											<button>
												<img src={Share} alt='' />
												<span>Share</span>
											</button>
											<button>
												<img src={Send} alt='' />
												<span>Send</span>
											</button>
										</SocialAction>
									</ArticleC>
								</div>
							))}
					</Contain>

					<PostModel showModel={showModel} handelClick={handelClick} />
				</Container>
			)}
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
