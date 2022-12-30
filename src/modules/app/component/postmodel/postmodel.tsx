import React, { useState } from "react";
import { connect } from "react-redux";
import {
	AssetButton,
	AttachAsset,
	Container,
	Content,
	Editor,
	Header,
	PostButton,
	ShareComment,
	SharedContent,
	SharedCreation,
	UploadImage,
	UserInfo,
} from "./style";
import Close from "../../../../asset/images/close-icon.svg";
import User from "../../../../asset/images/user.svg";
import PhotoIcon from "../../../../asset/images/photo-icon.svg";
import Video from "../../../../asset/images/video.svg";
import AssetComment from "../../../../asset/images/assetComment.svg";
import ReactPlayer from "react-player";
import { db } from "../../../firebase/firebase";
import { Firestore, Timestamp } from "firebase/firestore";
import { postArticleAPI } from "../../../../logic/action/action";

const mapStateToProps = (state: any) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	postArticleAPI: (payload: any) => dispatch(postArticleAPI(payload)),
});

const PostModel = (props: any) => {
	const [editorText, setEditorText] = useState("");
	const [shareImage, setShareImage] = useState<any>("");
	const [videoLink, setVideoLink] = useState<any>("");
	const [assetArea, setAssetArea] = useState<any>("");

	const handelChange = (e: any) => {
		const image = e.target.files[0];
		if (image === "image" || image === undefined) {
			alert(`It is not a Image`);
			return;
		}
		setShareImage(image);
	};

	const reset = (e: any) => {
		setEditorText("");
		setShareImage("");
		setEditorText("");
		setAssetArea("");
		props.handelClick(e);
	};
	const switchAssetArea = (area: any) => {
		setShareImage("");
		setEditorText("");
		setAssetArea(area);
	};

	const postArticle = (e: any) => {
		e.preventDefault();
		if (e.target !== e.currentTarget) {
			return;
		}

		const payload = {
			image: shareImage,
			video: videoLink,
			user: props.user,
			description: editorText,
			timestamp: Timestamp.now(),
		};

		props.postArticleAPI(payload);
		reset(e);
	};

	return (
		<>
			{props.showModel === "open" && (
				<Container>
					<Content>
						<Header>
							<h2>Create a post</h2>
							<button onClick={(e) => reset(e)}>
								<img src={Close} alt='' />
							</button>
						</Header>
						<SharedContent>
							<UserInfo>
								{props.user && props.user.photoURL ? (
									<img src={props.user.photoURL} alt='' />
								) : (
									<img src={User} alt='' />
								)}
								<span> {props.user ? props.user.displayName : ""}</span>
							</UserInfo>
							<Editor>
								<textarea
									value={editorText}
									onChange={(e) => setEditorText(e.target.value)}
									placeholder='What do you think about?'
								/>
								{assetArea === "image" ? (
									<>
										<UploadImage>
											<input
												type='file'
												accept='image/gif, image/jpeg, image/png'
												id='file'
												name='image'
												style={{ display: "none" }}
												onChange={handelChange}
											/>
											<p>
												<label htmlFor='file'>Select a Image</label>
											</p>
											{shareImage && (
												<img src={URL.createObjectURL(shareImage)} alt='' />
											)}
										</UploadImage>
									</>
								) : (
									assetArea === "media" && (
										<>
											<input
												type='text'
												placeholder='Please input a vedeo link'
												value={videoLink}
												onChange={(e) => setVideoLink(e.target.value)}
											/>
											{videoLink && (
												<ReactPlayer width={"100%"} url={videoLink} />
											)}
										</>
									)
								)}
							</Editor>
						</SharedContent>
						<SharedCreation>
							<AttachAsset>
								<AssetButton onClick={() => switchAssetArea("image")}>
									<img src={PhotoIcon} alt='' />
								</AssetButton>
								<AssetButton onClick={() => switchAssetArea("media")}>
									<img src={Video} alt='' />
								</AssetButton>
							</AttachAsset>
							<ShareComment>
								<AssetButton>
									<img src={AssetComment} alt='' />
									Anyone
								</AssetButton>
							</ShareComment>

							<PostButton
								disabled={!editorText ? true : false}
								onClick={(e) => postArticle(e)}>
								Post
							</PostButton>
						</SharedCreation>
					</Content>
				</Container>
			)}
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
