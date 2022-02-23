import logo from './logo.svg';
import './home.css';
import axios from "axios";
import { useState } from 'react';

function Home() {
  const [img,setImg] = useState("");
  const [img2,setImg2] = useState("");
  const [img3,setImg3] = useState("");
  const [data,setData] = useState("");
  const [data1,setData1] = useState("");
  const [data2,setData2] = useState("");
  const [content,setContent] = useState("");
  const [content1,setContent1] = useState("");
  const [content2,setContent2] = useState("");
  axios.get("https://jsonplaceholder.typicode.com/photos").then(function(data){
    console.log(data.data[0]);
    setImg(data.data[0]);
    setImg2(data.data[0]);
    setImg3(data.data[0]);
  });
  axios.get("https://jsonplaceholder.typicode.com/users").then(function(data){
    setData(data.data[0]);
    setData1(data.data[1]);
    setData2(data.data[2]);
  })
  axios.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
    setContent(data.data[0]);
    setContent1(data.data[1]);
    setContent2(data.data[2]);
  })
  return (
    <div className="app">
      <div id="thumbnail">
        <div id='left'>
     <img src={img.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img.title}</h2>
       <p>Website : {data.website}</p>
       <p>Name : {data.name}</p>
       <p>Username : {data.username}</p>
       <p>Email : {data.email}</p>
       <p>Content : {content.body}</p>
     </div>
     </div>
     <div id="thumbnail">
        <div id='left'>
     <img src={img2.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img2.title}</h2>
       <p>Website : {data1.website}</p>
       <p>Name : {data1.name}</p>
       <p>Username : {data1.username}</p>
       <p>Email : {data1.email}</p>
       <p>Content : {content1.body}</p>
     </div>
     </div>
     <div id="thumbnail">
        <div id='left'>
     <img src={img3.url} ></img>
     </div>
     <div id="right">
       <h2>Title : {img3.title}</h2>
       <p>Website : {data2.website}</p>
       <p>Name : {data2.name}</p>
       <p>Username : {data2.username}</p>
       <p>Email : {data2.email}</p>
       <p>Content : {content2.body}</p>
     </div>
     </div>
    </div>
  );
}

export default Home;