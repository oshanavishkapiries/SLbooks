import React from "react";

const Modal_Card = (props) => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden flex flex-row justify-between items-center bg-gray-200 rounded-lg mt-3 p-4">
        <h3 className="w-3/5">{props.title ? props.title : "No data found ... "}</h3>
        {props.DownloadLink ? 
             <a href={props.DownloadLink} target="_blank">
             <button className="btn btn-primary">
               <img
                 src={"./src/assets/download.svg"}
                 width="30"
                 alt="download"
               ></img>
             </button>
           </a>
        : null}
       
      </div>
    </>
  );
};

export default Modal_Card;
