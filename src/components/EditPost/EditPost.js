import "./EditPost.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { podcastServiceFactory } from "../../services/podcastService";
import { usePostContext } from "../../contexts/PostContext";

export default function EditPost() {
    const {onPostEditSubmit} = usePostContext();
    const { postId } = useParams();
    const podcastService = useService(podcastServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        date: '',
    }, onPostEditSubmit);

    useEffect(() => {
        podcastService.getOne(postId)
            .then(result => {
                changeValues(result);
            });
    }, [postId]);

    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <form className="writeForm" onSubmit={onSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                    />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        autoFocus={true}
                    />
                    <input
                        className="writeInput"
                        placeholder="Category"
                        type="text"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <input
                        className="writeInput"
                        placeholder="ImageUrl"
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="What is your story..."
                        type="text"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                    />
                </div>
                <button className="editSubmit" type="submit">
                    Edit
                </button>
            </form>
        </div>
    );
}
