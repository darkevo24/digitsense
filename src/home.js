import logo from './logo.svg';
import './home.css';
import axios from "axios";
import { useState } from 'react';

function Home() {
  const [img,setImg] = useState("");
  const [img2,setImg2] = useState("");
  const [img3,setImg3] = useState("");
  const [content,setContent] = useState("");
  const [content2,setContent2] = useState("");
  const [content3,setContent3] = useState("");
  axios.get("https://jsonplaceholder.typicode.com/photos").then(function(data){
    console.log(data.data[0]);
    setImg(data.data[0]);
    setImg2(data.data[0]);
    setImg3(data.data[0]);
  });
  axios.get("https://jsonplaceholder.typicode.com/users").then(function(data){
    setContent(data.data[0]);
    setContent2(data.data[1]);
    setContent3(data.data[2]);
  })
  return (
    <div className="app">
      <div id="thumbnail">
        <div id='left'>
     <img src={img.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img.title}</h2>
       <p>Website : {content.website}</p>
       <p>Name : {content.name}</p>
       <p>Username : {content.username}</p>
       <p>Email : {content.email}</p>
     </div>
     </div>
     <div id="thumbnail">
        <div id='left'>
     <img src={img2.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img2.title}</h2>
       <p>Website : {content2.website}</p>
       <p>Name : {content2.name}</p>
       <p>Username : {content2.username}</p>
       <p>Email : {content2.email}</p>
     </div>
     </div>
     <div id="thumbnail">
        <div id='left'>
     <img src={img3.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img3.title}</h2>
       <p>Website : {content3.website}</p>
       <p>Name : {content3.name}</p>
       <p>Username : {content3.username}</p>
       <p>Email : {content3.email}</p>
     </div>
     </div>
    </div>
  );
}

export default Home;