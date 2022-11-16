import { Profiler, useState } from "react";
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
  const [isScrollable, setIsScrollable] = useState(true);
  const [currItem, setCurrItem] = useState({});

  const LibraryWithLoader = withLoader(isLoading)(Library);

  return (
    <div
      className={isScrollable ? "App" : "App noScroll"}
      onMouseEnter={() => setIsScrollable(true)}
    >
      {showModal ? <div className="overlay"></div> : null}
      <h1 id="title">Space Library</h1>
      <SearchBar setMedia={setMedia} setIsLoading={setIsLoading} />
      <Profiler
        id="Library"
        onRender={(id, phase, actualDuration) =>
          console.log({ id, phase, actualDuration })
        }
      >
        <LibraryWithLoader
          media={media}
          showModal={showModal}
          setShowModal={setShowModal}
          currItem={currItem}
          setCurrItem={setCurrItem}
          setIsScrollable={setIsScrollable}
        />
      </Profiler>
    </div>
  );
}

export default App;
