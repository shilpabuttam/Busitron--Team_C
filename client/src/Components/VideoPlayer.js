import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { logActivity } from '../Services/activityService';

const VideoPlayer = ({ userId }) => {
  const [currentVideo, setCurrentVideo] = useState({
    id: 'main',
    src: 'https://videos.pexels.com/video-files/3195650/3195650-sd_640_360_25fps.mp4',
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleVideoPlay = () => {
    logActivity(userId, currentVideo.id, 'view'); 
  };

  const handleWatchSuggestion = (video) => {
    setCurrentVideo(video);
    logActivity(userId, video.id, 'view'); 
  };

  useEffect(() => {

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
        style={{ width: '40%', borderRadius: '8px'}}
        onPlay={handleVideoPlay}
      >
        Your browser does not support the video tag.
      </video>
      
      <Box mt={3}>
        <center></center>
        <Typography variant="h5">VIDEO SUGGESTIONS</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center" paddingTop={3} paddingBottom={3} >
          {suggestions.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id} >
              <Card sx={{ mb: 0 }}>
                <CardContent >
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
