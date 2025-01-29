import React from "react";

const VideoCard = ({ video, onAction }) => (
  <div className="video-card">
    <h3>{video.title}</h3>
    {/* <video src={video.url} controls></video> */}
    <iframe
  src={`https://www.youtube.com/embed/${video.url}`}
  title={video.title}
  width="560"
  height="315"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


    <button onClick={() => onAction(video._id, "like")}>Like</button>
    <button onClick={() => onAction(video._id, "dislike")}>Dislike</button>
  </div>
);

export default VideoCard;

// import React from "react";
// import PropTypes from "prop-types";

// const VideoCard = ({ video, onAction }) => (
//   <div className="video-card">
//     <h3>{video.title}</h3>
//     <iframe
//       src={video.url}
//       title={video.title}
//       width="560"
//       height="315"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       aria-label={`Video titled ${video.title}`} // Adding an aria-label for accessibility
//     ></iframe>
//     <button onClick={() => onAction(video._id, "like")}>Like</button>
//     <button onClick={() => onAction(video._id, "dislike")}>Dislike</button>
//   </div>
// );

// // Prop types validation
// VideoCard.propTypes = {
//   video: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   }).isRequired,
//   onAction: PropTypes.func.isRequired,
// };

// export default VideoCard;

