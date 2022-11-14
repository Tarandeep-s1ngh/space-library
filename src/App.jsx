import { useState } from "react";
import { Library, SearchBar } from "./components/";

const withLoader = (isLoading) => (Component) => (props) => {
  return isLoading ? (
    <span className="loader"></span>
  ) : (
    <Component {...props} />
  );
};

function App() {
  const [media, setMedia] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currItem, setCurrItem] = useState({});

  const LibraryWithLoader = withLoader(isLoading)(Library);

  return (
    <div className="App">
      {showModal ? <div className="overlay"></div> : null}
      <h1 id="title">Space Library</h1>
      <SearchBar setMedia={setMedia} setIsLoading={setIsLoading} />

      <LibraryWithLoader
        media={media}
        showModal={showModal}
        setShowModal={setShowModal}
        currItem={currItem}
        setCurrItem={setCurrItem}
      />
    </div>
  );
}

export default App;
