import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewVideo = () => {
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/video`)
      .then((res) => {
        console.log(res.data)
        setVideos(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <div className="container-fluid">
      <h1>View Videos</h1>
      <div className="row">
        {videos.map((video) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={video._id}>
            <div className="card">
                
            <video
                className="card-img-top"
                src={`http://localhost:4000/${video.path}`}
                controls 
                style={{"height":"200px"}}
              ></video>
              <div className='card-body'>
                <h5 className='card-text'>{video.filename}</h5>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewVideo;
