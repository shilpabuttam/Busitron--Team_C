import React from "react";
import axios from "axios";

const CDNIntegration = () => {
  const handleCDNCacheInvalidation = async () => {
    try {
      const response = await axios.post("https://cdn-api.com/invalidate", {
        paths: ["/videos/*"],
      });
      console.log("CDN Cache Invalidated:", response.data);
    } catch (error) {
      console.error("Error invalidating CDN cache:", error);
    }
  };

  return (
    <div>
      <h2>CDN Integration</h2>
      <button onClick={handleCDNCacheInvalidation}>Invalidate CDN Cache</button>
    </div>
  );
};

export default CDNIntegration;
