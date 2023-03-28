import styles from "../styles/Popup.module.css";
import React, { useState } from "react";

// =========================================
const Popup = (props) => {
  // 內容是html
  const contentHTML = () => {
    console.log(props.data.button[0].eventName)
    return props.data.contentHTML;
  };
  return (
    <>
      {props.data.isShow && (
        <div className={styles.popup}>
          <div>
            <p>{props.data.title}</p>
            <div className={styles.content}>
              {props.data.isContentText ? (
                <p>{props.data.contentText}</p>
              ) : (
                <div>{contentHTML()}</div>
              )}
            </div>
            <div className="myButtonBox">
              {props.data.button.map((element) => {
                return (
                  <button
                    key={element.name}
                    className={`myButton ${element.color}`}
                    onClick={element.eventName}
                  >
                    {element.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
