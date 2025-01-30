import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
