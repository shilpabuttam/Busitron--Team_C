// client/src/components/CommentSection.js
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
    // Simulate AI API call for comment suggestions
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
    <Box mt={3}>
      <Typography variant="h6">Comments</Typography>
      <TextField
        fullWidth
        label="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={2}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleComment}>
        Post Comment
      </Button>
      <Box mt={2}>
        <Typography variant="subtitle1">AI Suggestions</Typography>
        <List>
          {aiSuggestions.map((suggestion, index) => (
            <ListItem key={index}>
              <Button
                size="small"
                variant="text"
                onClick={() => setComment(suggestion)}
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
