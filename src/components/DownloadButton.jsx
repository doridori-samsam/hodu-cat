import React from "react";

function DownloadButton({ clickFunc }) {
  return (
    <button
      className="w-fit px-[1.5rem] py-[0.5rem] rounded-full font-spoqaBold text-white bg-accent hover:bg-accentHover"
      onClick={clickFunc}
    >
      Download
    </button>
  );
}

export default DownloadButton;
