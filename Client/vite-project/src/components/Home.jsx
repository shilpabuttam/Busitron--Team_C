import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Home() {
  const data = [
    {
      id: "1",
      title: "Big Buck Bunny",
      thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Vlc Media Player",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore!",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "2",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "The first Blender Open Movie from 2006.",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "3",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "For Bigger Blazes description here.",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={item.thumbnailUrl} className="d-block w-100" alt={item.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
