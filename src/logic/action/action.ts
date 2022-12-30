import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
	addDoc,
	collection,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
	auth,
	provider,
	provider2,
	storage,
	db,
} from "../../modules/firebase/firebase";

export const SET_USER = "SET_USER";
export const SET_LOADING_STATE = "SET_LOADING_STATE";
export const GET_ARTICLE = "GET_ARTICLE";

export const setUser = (payload: any) => ({
	type: SET_USER,
	user: payload,
});

export const setLoading = (status: any) => ({
	type: SET_LOADING_STATE,
	status: status,
});
export const getArticle = (payload: any) => ({
	type: GET_ARTICLE,
	payload: payload,
});

export const singAPI = () => {
	return (dispatch: any) => {
		signInWithPopup(auth, provider)
			.then((result) => {
				dispatch(setUser(result.user));
			})
			.catch((error) => {
				alert(error.message);
			});
	};
};

export const facebookSingAPI = () => {
	return (dispatch: any) => {
		signInWithPopup(auth, provider2)
			.then((result) => {
				console.log("====================================");
				console.log(result);
				console.log("====================================");
				dispatch(setUser(result.user));
			})
			.catch((error) => {
				alert(error.message);
			});
	};
};

export const getUserAuth = () => {
	return (dispatch: any) => {
		onAuthStateChanged(auth, async (user: any) => {
			if (user) {
				dispatch(setUser(user));
			}
		});
	};
};

export const singOutAPI = () => {
	return (dispatch: any) => {
		signOut(auth)
			.then(() => {
				dispatch(setUser(null));
			})
			.catch((error) => {
				alert(error.message);
			});
	};
};

export const postArticleAPI = (payload: any) => {
	return (dispatch: any) => {
		dispatch(setLoading(true));
		if (payload.image !== "") {
			const storageRef = ref(storage, `images/${payload.image.name}`);
			const uploadTask = uploadBytesResumable(storageRef, payload.image);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
					}
				},
				(error) => {
					alert(error.message);
				},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						console.log("File available at", downloadURL);
						console.log("File available at", payload);

						const docRef = await addDoc(collection(db, "articles"), {
							actor: {
								title: payload.user.displayName,
								description: payload.user.email,
								date: payload.timestamp,
								image: payload.user.photoURL,
							},
							video: payload.video,
							shareImage: downloadURL,
							comments: 0,
							image: payload.description,
						});
						dispatch(setLoading(false));
						console.log("Document written with ID: ", docRef.id);
					});
				}
			);
		} else if (payload.video) {
			const docRef = addDoc(collection(db, "articles"), {
				actor: {
					title: payload.user.displayName,
					description: payload.user.email,
					date: payload.timestamp,
					image: payload.user.photoURL,
				},
				video: payload.video,
				shareImage: "",
				comments: 0,
				image: payload.description,
			});
			dispatch(setLoading(false));
			console.log("Document written with ID: ", docRef);
		}
	};
};

export const getArticleAPI = () => {
	return (dispatch: any) => {
		let payload;
		onSnapshot(collection(db, "articles"), (snapshot) => {
			payload = snapshot.docs.map((doc: any) => doc.data());
			dispatch(getArticle(payload));
			console.log("====================================");
			console.log(payload);
			console.log("====================================");
		});
	};
};
