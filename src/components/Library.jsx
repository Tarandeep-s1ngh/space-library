import React, { useState } from "react";
import { MediaCard } from "./MediaCard";
import { Modal } from "./Modal";

export const Library = ({ media, showModal, setShowModal }) => {
  const [currItem, setCurrItem] = useState({});
  return media.length ? (
    <>
      <div className="media-layout">
        {media?.map((item, idx) => {
          return (
            <MediaCard
              key={idx}
              item={item}
              setShowModal={setShowModal}
              setCurrItem={setCurrItem}
            />
          );
        })}
      </div>
      {showModal ? (
        <Modal>
          <div className="detail-modal">
            <div className="modal-header">
              <h2>{currItem?.data[0]?.title}</h2>
              <span onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark fa-lg"></i>
              </span>
            </div>
            <img
              src={
                currItem.links
                  ? currItem.links[0]?.href
                  : `https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80`
              }
              alt="nasa rel"
              className="img"
              width="600px"
              height="336px"
            />
            <p>{currItem?.data[0]?.description}</p>
          </div>
        </Modal>
      ) : null}
    </>
  ) : (
    <h1 className="initial-search-msg">Start Searching Now!</h1>
  );
};
