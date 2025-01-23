// client/src/components/VideoPlayer.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { logActivity } from '../Services/activityService';

const VideoPlayer = ({ userId }) => {
  const [currentVideo, setCurrentVideo] = useState({
    id: 'main',
    title: 'Main Video',
    src: 'https://videos.pexels.com/video-files/3195650/3195650-sd_640_360_25fps.mp4',
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleVideoPlay = () => {
    logActivity(userId, currentVideo.id, 'view'); // Log the view activity
  };

  const handleWatchSuggestion = (video) => {
    setCurrentVideo(video); // Set the clicked suggestion as the current video
    logActivity(userId, video.id, 'view'); // Log the view activity for the suggestion
  };

  useEffect(() => {
    // Simulate AI API call to fetch video suggestions
    const fetchSuggestions = () => {
      setSuggestions([
        {
          id: 'vid1',
          title: 'Learn React Basics',
          src: 'https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4',
        },
        {
          id: 'vid2',
          title: 'Advanced React Patterns',
          src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
        },
      ]);
    };
    fetchSuggestions();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {currentVideo.title}
      </Typography>
      <video
        src={currentVideo.src}
        controls
        style={{ width: '100%', borderRadius: '8px' }}
        onPlay={handleVideoPlay}
      >
        Your browser does not support the video tag.
      </video>
      <Box mt={3}>
        <Typography variant="h6">AI Video Suggestions</Typography>
        {suggestions.map((video) => (
          <Card key={video.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography>{video.title}</Typography>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleWatchSuggestion(video)}
              >
                Watch
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VideoPlayer;
