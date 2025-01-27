export const fetchComments = async (videoId) => {
    const res = await fetch(`/videos/${videoId}/comments`);
    return res.json();
  };
  
  export const postComment = async (videoId, content, parentId = null) => {
    const res = await fetch(`/videos/${videoId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, parentId }),
    });
    return res.json();
  };
  