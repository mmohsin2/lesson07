import axios from './axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Video from "./Video";
import VideoFooter from "./VideoFooter";

function App() {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");
        setVideos(response.data);

        return response;
      }

      fetchPosts();
  } , []);

  console.log(videos);


  return (
    <div className="app">
     <div className="app__videos">
      <Video url="https://v16m-webapp.tiktokcdn-us.com/fec8b7b762720b281b37d8208488c4a1/62be8094/video/tos/useast5/tos-useast5-ve-0068c004-tx/a9e8199658ae42dc8e072f0edc812881/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2014&bt=1007&cs=0&ds=3&ft=ebtHKH-qMyq8ZcWQ7we2NHuufl7Gb&mime_type=video_mp4&qs=0&rc=NmRpOTs4Z2c0Omc0ZTU3OUBpam12aWk6Zjl1ZDMzZzczNEAyX19jNTVgX2ExY14yMjVeYSNkXzM0cjRnM2lgLS1kMS9zcw%3D%3D&l=202206302305140100020450077350020210BA11BF4"
      channel="flowyfairyy"
      description="Bloom from within"
      song="calm piano"
      likes={900}
      messages={456}
      shares={786}
      />

      <Video />
      </div>


      {/* app container */}
  
    </div>
  );
}

export default App;
