import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ROOT } from "../utils/";

export const SearchBar = ({ setMedia, setIsLoading }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let timerId = "";
    if (searchInput !== "") {
      timerId = setTimeout(() => {
        (async () => {
          try {
            setIsLoading(true);
            const res = await axios.get(`${API_ROOT}/search?q=${searchInput}`);
            if (res.status === 200) {
              setMedia(res.data.collection?.items?.slice(0, 12));
            }
            setIsLoading(false);
          } catch (error) {
            console.log(error.message);
          }
        })();
      }, 2000);
    } else {
      setMedia([]);
    }

    return () => clearTimeout(timerId);
  }, [searchInput]);

  return (
    <div className="search-bar">
      <i className="fa-brands fa-searchengin fa-lg search-icon"></i>
      <input
        type="input"
        placeholder="Search for anything related to space! e.g. Black Hole | Galaxy | Apollo | Hubble | Milky Way"
        className="search-input"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};
