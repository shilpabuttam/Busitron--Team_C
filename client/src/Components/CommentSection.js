import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';
import { logActivity } from '../Services/activityService';

const CommentSection = ({ videoId, userId }) => {
  const [comment, setComment] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState([]);

  const handleComment = () => {
    if (comment) {
      logActivity(userId, videoId, 'comment', { text: comment });
      setComment('');
    }
  };

  useEffect(() => {
    
    const fetchAiSuggestions = () => {
      setAiSuggestions([
        'Great video!',
        'Loved the explanation on React.',
        'Can you make a video on React Hooks?',
      ]);
    };
    fetchAiSuggestions();
  }, []);

  return (
    <Box mt={3} textAlign="center">
      <Typography variant="h6" gutterBottom>
        Comments...
      </Typography>
      <TextField
        label="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={2}
        variant="outlined"
        sx={{ width: '500px', mb: 2 }}
      />
      <Button variant="contained" onClick={handleComment} style={{ marginTop: '20px' }}>
        Post
      </Button>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          AI SUGGESTIONS FOR COMMENTS
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          {aiSuggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: 0,
              }}
            >
              <Button
                size="small"
                variant="contained"
                onClick={() => setComment(suggestion)}
                sx={{
                  textTransform: 'none',
                  width: '300px',
                }}
              >
                {suggestion}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CommentSection;
