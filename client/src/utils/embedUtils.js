const generateEmbedCode = (videoUrl, options) => {
  const autoplayParam = options.autoplay ? 1 : 0;  // 1 for autoplay, 0 for no autoplay
  const qualityParam = options.quality || "1080p";  // Default to 1080p

  return `<iframe 
    src="${videoUrl}?autoplay=${autoplayParam}" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen 
    style="width:100%; height:auto;">
  </iframe>`;
};

export default generateEmbedCode;
