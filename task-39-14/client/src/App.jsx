import ContentGallery from "./components/ContentGallery";
import UploadForm from "./components/UploadForm";


function App() {
  return (
    <div className="container mx-auto p-4">
      <UploadForm/>
      <ContentGallery/>
    </div>
  );
}

export default App;
