import {profileAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types";
import {CallHistoryMethodAction, push} from "connected-react-router";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "../redux-store";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const GET_USER_STATUS = "profile/GET-USER-STATUS";
const SET_USER_PHOTO = "profile/SET-USER-PHOTO";


type ProfileInitialStateType = {
    posts: PostType[];
    profile: ProfileType | undefined;
    status: string
}

let initialState: ProfileInitialStateType = {
    posts: [
        {id: 1, message: "Hey! How are you?"},
        {id: 2, message: "Good!"},
        {id: 3, message: "briliant!"}
    ],
    profile: undefined,
    status: ""
};

type ProfileStateActions = AddPostActionCreatorType
    | SetUserProfileActionCreatorType
    | GetUserStatusActionCreatorType
    | SavePhotoActionCreatorType
    | CallHistoryMethodAction;

type ProfileThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ProfileStateActions | FormAction>;

export let profileReducer = (state = initialState, action: ProfileStateActions): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let text = action.text;
            if (text.trim()) {
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: state.posts.length + 1,
                            message: text.trim()
                        }
                    ]
                };
            }
            return state;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case GET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile!,
                    photos: action.file
                }
            }
        default:
            return state;
    }
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST;
    text: string
}

export const addPostActionCreator = (text: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        text
    };
};

type SetUserProfileActionCreatorType = {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType
}

export const setUserProfileActionCreator = (profile: ProfileType): SetUserProfileActionCreatorType => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

type GetUserStatusActionCreatorType = {
    type: typeof GET_USER_STATUS;
    status: string
}

export const getUserStatusActionCreator = (status: string): GetUserStatusActionCreatorType => {
    return {
        type: GET_USER_STATUS,
        status
    };
};

type SavePhotoActionCreatorType = {
    type: typeof SET_USER_PHOTO;
    file: PhotosType
}

export const savePhotoActionCreator = (file: PhotosType): SavePhotoActionCreatorType => {
    return {
        type: SET_USER_PHOTO,
        file
    };
};

export const getUserThunkCreator = (id: number): ProfileThunkType => {
    return async (dispatch) => {
        try {
            let res = await profileAPI.getProfile(id);
            dispatch(setUserProfileActionCreator(res));
        } catch (e) {
            dispatch(push('/profile/error'));
        }
    };
};

export const getUserStatusThunkCreator = (id: number): ProfileThunkType => {
    return async (dispatch) => {
        let res = await profileAPI.getStatus(id);
        dispatch(getUserStatusActionCreator(res));
    };
};

export const updateUserStatusThunkCreator = (status: string): ProfileThunkType => {
    return async (dispatch) => {
        let res = await profileAPI.updateStatus(status);
        if (res.resultCode === 0) dispatch(getUserStatusActionCreator(status));
    };
};

export const savePhotoThunkCreator = (file: File): ProfileThunkType => {
    return async (dispatch) => {
        let res = await profileAPI.savePhoto(file);
        if (res.resultCode === 0) dispatch(savePhotoActionCreator(res.data.photos));
    };
}

export const saveDataThunkCreator = (data: ProfileType): ProfileThunkType => {
    return async (dispatch, getState) => {
        let res = await profileAPI.saveProfile(data);
        if (res.resultCode === 0) {
            let id = getState().auth.userId;
            if (!id){
                dispatch(push('/profile/error'));
                return;
            }
            dispatch(getUserThunkCreator(id));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: res.messages[0]}));
            return Promise.reject(res.messages[0]);
        }
    };
}
