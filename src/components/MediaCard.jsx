import React from "react";

export const MediaCard = ({ item, setShowModal, setCurrItem }) => {
  return (
    <div
      className="media-card"
      onClick={() => {
        setCurrItem(item);
        setShowModal(true);
      }}
    >
      <img
        src={
          item.links
            ? item.links[0]?.href
            : `https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80`
        }
        alt="nasa rel"
        className="img"
        width="300px"
        height="168px"
      />
      <h3 className="card-title">{item?.data[0]?.title}</h3>
    </div>
  );
};
