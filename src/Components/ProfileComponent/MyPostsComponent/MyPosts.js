import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { required, maxLength } from "../../../utils/validators/validators";
import { Textarea } from "../../../FormControls/FormControls";

import "./MyPosts.css";

import { Post } from "../PostComponent/Post";

const afterSubmit = (result, dispatch) =>
    dispatch(reset('addPost'));

export function MyPosts(props) {
    let addNewPost = text => {
        props.addPost(text.newPostText);
    };

    return (
        <div className="profile_posts">
            <AddPostsReduxForm onSubmit={addNewPost} />
            <div className="profile_posts-items">
                {[...props.profilePage.posts].reverse().map(post => {
                    return <Post key={post.id} message={post.message} />;
                })}
            </div>
        </div>
    );
}

let maxLength30 = maxLength(30);

function PostsForm(props) {
    return (
        <form className="form-group textarea" onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                placeholder="What's new?"
                rows="3"
                value=''
                validate={[required, maxLength30]}
            />
            <div>
                <button className="btn btn-primary textarea-send">Add</button>
            </div>
        </form>
    );
}

const AddPostsReduxForm = reduxForm({
    form: "addPost",
    onSubmitSuccess: afterSubmit
})(PostsForm);