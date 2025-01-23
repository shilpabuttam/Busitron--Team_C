// src/utils/embedUtils.js
const generateEmbedCode = (videoId, options) => {
  const baseUrl = "https://your-platform.com/embed";  // Replace with your actual platform URL
  const params = new URLSearchParams({
    quality: options.quality || "720p",  // Default to 720p if no quality is specified
    autoplay: options.autoplay || false, // Default to autoplay = false
  }).toString();

  return `<iframe 
    src="${baseUrl}/${videoId}?${params}" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen 
    style="width:100%; height:auto;">
  </iframe>`;
};

export default generateEmbedCode;
