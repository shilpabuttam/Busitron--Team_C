
import React, { useState } from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logActivity } from '../Services/activityService';

const LikeButton = ({ videoId, userId }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    const activityType = liked ? 'unlike' : 'like';
    logActivity(userId, videoId, activityType); 
    setLiked(!liked); 
  };

  return (
    <Button
      variant="contained"
      onClick={handleLikeToggle}
      startIcon={<FavoriteIcon />}
      sx={{
        marginTop:'2px',
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
