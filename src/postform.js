import React, { useState } from 'react';
import './index.css';

const PostForm = () => {
  const [state, setState] = useState({
    title: '',
    body: '',
    author: '',
    category: '',
  });
  const [data, setData] = useState([]);

  const { title, body, author, category } = state;
  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setData([...data, { ...state }]);

    setState({
      title: '',
      body: '',
      author: '',
      category: '',
    });
  };
  const editHandler = (indexValue) => {
    setState({
      title: '',
      body: '',
      author: '',
      category: '',
    });
    const newData1 = data.filter((d, index) => index === indexValue);
    setState({
      title: newData1[0].title,
      body: newData1[0].body,
      author: newData1[0].author,
      category: newData1[0].category,
    });
    const newData = data.filter((_d, index) => index !== indexValue);
    setData(newData);
  };
  const delHandler = (indexValue) => {
    const newData = data.filter((_d, index) => index !== indexValue);
    setData(newData);
  };

  return (
    <div>
      <h2>Blogger App</h2>
      <div>
        <h3 id="spl">Post Form</h3>
        <h3 id="spl2">Posts</h3>
      </div>

      <div id="left">
        <form id="main" onSubmit={submitHandler}>
          <div>
            <label htmlFor="title" id="title">
              Title
            </label>
            <br />
            <input type="text" id="title" placeholder="Enter title" value={title} onChange={changeHandler} name="title" required />
          </div>

          <br />
          <div>
            <label htmlFor="body" id="body">
              Body
            </label>
            <br />
            <textarea type="text" placeholder="Enter body" id="body" rows="4" name="body" value={body} onChange={changeHandler} required />
          </div>
          <br />
          <div>
            <label htmlFor="author" id="author">
              Author
            </label>
            <br />
            <input type="text" placeholder="Enter author" id="author" name="author" value={author} onChange={changeHandler} required />
          </div>
          <br />
          <div>
            <label htmlFor="category" id="category">
              Category
            </label>
            <br />
            <input list="list" name="category" id="category" value={category} onChange={changeHandler} placeholder="Select Category" required />

            <datalist id="list">
              <option value="React" />
              <option value="Javascript" />
              <option value="HTML" />
              <option value="Bootstrap" />
            </datalist>
          </div>
          <br />
          <button type="submit" name="submit">
            save
          </button>
        </form>
      </div>

      <div id="right">
        {data.map((get, index) => {
          return (
            <div key={index} id="posts">
              <div id="row">
                <b>{get.title}</b>
              </div>
              <div id="row2">
                {get.body} <br />
                Author: {get.author} <br />
                Category: {get.category}
              </div>

              <div id="row">
                <button id="edit" onClick={() => editHandler(index)}>
                  Edit
                </button>
                <button id="del" onClick={() => delHandler(index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostForm;
