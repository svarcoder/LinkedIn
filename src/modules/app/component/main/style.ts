import styled from "styled-components";

export const Container = styled.div`
	grid-area: main;
`;
export const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
export const ShareBox = styled(CommonCard)`
	display: flex;
	flex-direction: column;
	color: #958b74;
	margin: 0 0 8px;
	background: white;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			font-weight: 600;
		}

		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px 0px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				border-radius: 35px;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 35px;
				background-color: white;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
				span {
					color: #70b59f;
				}
			}
		}
	}
`;
export const ArticleC = styled(CommonCard)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;
export const ShareActor = styled.div`
	padding-right: 48px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	align-items: center;
	display: flex;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		text-decoration: none;
		img {
			height: 48px;
			width: 48px;
		}

		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;
			span {
				text-align: left;
				&::first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}
				&:nth-child(n + 1) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}

	button {
		position: absolute;
		right: 12px;
		top: 0;
		background: transparent;
		border: none;
		outline: none;
	}
`;
export const Description = styled.div`
	padding: 0 16px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.9);
	font-size: 14px;
	text-align: left;
`;
export const ShareImg = styled.main`
	margin-top: 8px;
	width: 100%;
	display: block;
	position: relative;
	background-color: #f9fafb;
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;
export const SocialCount = styled.div`
	line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9e5df;
	list-style: none;
	li {
		margin-right: 5px;
		font-size: 12px;
		button {
			display: flex;
		}
	}
`;
export const SocialAction = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;
	margin: 0;
	min-height: 40px;
	padding: 4px 8px;
	button {
		display: inline-flex;
		align-items: center;
		padding: 8px;
		color: #0a66c2;
		@media (max-width: 768px) {
			span {
				margin-left: 8px;
			}
		}
	}
`;
export const Contain = styled.div`
	text-align: center;
	& > img {
		width: 30px;
	}
`;
