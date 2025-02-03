import { useEffect, useState } from "react";
import axios from "axios";

const ContentGallery = () => {
  const [contentList, setContentList] = useState([]);

  const fetchContent = async () => {
    const { data } = await axios.get("http://localhost:5000/content");
    setContentList(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div>
      {contentList.map((content) => (
        <div key={content._id} className="p-4 border rounded-xl bg-white">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <img src={`http://localhost:5000${content.fileUrl}`} alt={content.title} width="200" />
          <button onClick={() => axios.post(`http://localhost:5000/like/${content._id}`).then(fetchContent)}>❤️ {content.likes}</button>
          <input type="text" placeholder="Comment" onKeyDown={(e) => {
            if (e.key === "Enter") {
              axios.post(`http://localhost:5000/comment/${content._id}`, { comment: e.target.value }).then(fetchContent);
              e.target.value = "";
            }
          }} />
        </div>
      ))}
    </div>
  );
};

export default ContentGallery;
