const axios = require('axios');
const CLOUDFLARE_BASE_URL = 'https://api.cloudflare.com/client/v4/accounts';

const getVideoUrl = async (videoId, accountId, apiToken) => {
  const response = await axios.get(`${CLOUDFLARE_BASE_URL}/${accountId}/stream/${videoId}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data.result.playback.hls;
};

module.exports = getVideoUrl;
