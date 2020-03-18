
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const GET_USER_STATUS = "GET-USER-STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hey! How are you?" },
    { id: 2, message: "Good!" },
    { id: 3, message: "briliant!" }
  ],
  profile: null,
  status: ''
};

export let profileReducer = (state = initialState, action) => {
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
      }
    case GET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
};

export const addPostActionCreator = text => {
  return {
    type: ADD_POST,
    text
  };
};

export const setUserProfileActionCreator = profile => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserStatusActionCreator = status => {
  return {
    type: GET_USER_STATUS,
    status
  }
}

export const getUserThunkCreator = (id) => {
  return dispatch => {
    profileAPI.getProfile(id).then(res => {
      dispatch(setUserProfileActionCreator(res));
    });
  };
};

export const getUserStatusThunkCreator = (id) => {
  return dispatch => {
    profileAPI.getStatus(id).then(res => {
      dispatch(getUserStatusActionCreator(res));
    });
  };
};

export const updateUserStatusThunkCreator = (status) => {
  return dispatch => {
    profileAPI.updateStatus(status).then(res => {
      if(res.resultCode === 0)
        dispatch(getUserStatusActionCreator(status));
    });
  };
};


