import React from "react";

let timeoutId;
const Search_input = ({ keyword }) => {
  
  const handleInputChange = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        keyword(e.target.value);
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search PDF"
          className="input input-bordered input-primary w-1/2"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Search_input;
