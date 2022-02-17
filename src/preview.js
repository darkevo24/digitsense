import './preview.css';
import axios from "axios";
import { useState } from 'react';

function Preview() {
  const [img,setImg] = useState("");
  const [comment,setComment] = useState("");
  const [comment2,setComment2] = useState("");
  const [comment3,setComment3] = useState("");
  const [comment4,setComment4] = useState("");
  const [comment5,setComment5] = useState("");
  const [content,setContent] = useState("");
  axios.get("https://jsonplaceholder.typicode.com/photos").then(function(data){
    console.log(data.data[0]);
    setImg(data.data[0]);
  });
  axios.get("https://jsonplaceholder.typicode.com/users").then(function(data){
    setContent(data.data[0]);
  })
  axios.get("https://jsonplaceholder.typicode.com/comments").then(function(data){
    setComment(data.data[0]);
    setComment2(data.data[1]);
    setComment3(data.data[2]);
    setComment4(data.data[3]);
    setComment5(data.data[4]);
  })
  return (
    <div className="app">
      <div id="thumbnail">
        <div id='left'>
     <img id="img" src={img.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img.title}</h2>
       <p>Website : {content.website}</p>
       <p>Name : {content.name}</p>
       <p>Username : {content.username}</p>
       <p>Email : {content.email}</p>
       <p>Comments : {comment.body} </p>
       <p>{comment2.body} </p>
       <p>{comment3.body} </p>
       <p>{comment4.body} </p>
       <p>{comment5.body} </p>
     </div>
     </div>
    
    </div>
  );
}

export default Preview;