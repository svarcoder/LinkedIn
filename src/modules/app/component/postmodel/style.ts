import styled from "styled-components";

export const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`;

export const Content = styled.div`
	width: 100%;
	max-width: 552px;
	background-color: white;
	max-height: 90%;
	overflow: initial;
	position: relative;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	top: 32px;
	margin: 0 auto;
`;

export const Header = styled.div`
	display: block;
	padding: 16px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	font-size: 16px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		height: 40px;
		width: 40px;
		min-width: auto;
		color: rgba(0, 0, 0, 0.15);
		svg,
		img {
			pointer-events: none;
		}
	}
`;

export const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto;
	vertical-align: baseline;
	background: transparent;
	padding: 8px 12px;
`;

export const UserInfo = styled.div`
	display: flex;
	padding: 12px 24px;
	align-items: center;
	svg,
	img {
		width: 48px;
		height: 48px;
		background-clip: content-box;
		border: 2px solid transparent;
		border-radius: 50%;
	}
	span {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		margin-left: 5px;
	}
`;

export const SharedCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 24px 12px 16px;
`;

export const AssetButton = styled.button`
	display: flex;
	align-items: center;
	height: 40px;
	min-width: auto;
	color: rgba(0, 0, 0, 0.5);
`;

export const AttachAsset = styled.div`
	align-items: center;
	display: flex;
	padding-right: 8px;
	${AssetButton} {
		width: 40px;
	}
`;

export const ShareComment = styled.div`
	padding-left: 8px;
	margin-right: auto;
	border-left: 1px solid rgba(0, 0, 0, 0.15);
	${AssetButton} {
		svg {
			margin-right: 5px;
		}
	}
`;
export const PostButton = styled.button`
	min-width: 60px;
	border-radius: 20px;
	padding-left: 16px;
	padding-right: 16px;
	background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
	color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
	&:hover {
		background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
	}
`;
export const Editor = styled.div`
	padding: 12px 24px;
	textarea {
		width: 100%;
		min-height: 100px;
		resize: none;
	}
	input {
		width: 100%;
		height: 35px;
		font-size: 16px;
		margin-bottom: 20px;
	}
`;
export const UploadImage = styled.div`
	text-align: center;
	img {
		width: 100%;
	}
`;
