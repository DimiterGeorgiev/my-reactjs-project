import "./Write.css"
import { useState } from "react";

export default function Write({
    onCreatePostSubmit,
}) {
    const [values, setValues] = useState({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        date: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreatePostSubmit(values);
    }


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
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            value={values.title}
            onChange={onChangeHandler}
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            autoFocus={true}
          />
          <input
            value={values.category}
            onChange={onChangeHandler}
            className="writeInput"
            placeholder="Category"
            type="text"
            name="category"
          />
          
          <input
            value={values.imageUrl}
            onChange={onChangeHandler}
            className="writeInput"
            placeholder="ImageUrl"
            type="text"
            name="imageUrl"
          />

          
        </div>
        <div className="writeFormGroup">
          <textarea
            value={values.description}
            onChange={onChangeHandler}
            className="writeInput writeText"
            placeholder="What is your story..."
            type="text"
            name="description"
          />
          
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}
