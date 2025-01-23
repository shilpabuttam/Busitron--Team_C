// client/src/components/LikeButton.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logActivity } from '../Services/activityService';

const LikeButton = ({ videoId, userId }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    const activityType = liked ? 'unlike' : 'like';
    logActivity(userId, videoId, activityType); // Log the activity
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <Button
      variant="contained"
      onClick={handleLikeToggle}
      startIcon={<FavoriteIcon />}
      sx={{
        backgroundColor: liked ? 'red' : 'primary.main',
        color: 'white',
        '&:hover': {
          backgroundColor: liked ? '#cc0000' : 'primary.dark',
        },
      }}
    >
      Like
    </Button>
  );
};

export default LikeButton;
