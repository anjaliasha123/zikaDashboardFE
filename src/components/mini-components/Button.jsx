import React from "react";

const Button = ({ onClick, label}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 text-white font-bold bg-red-500 rounded hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300`}
      aria-label={label || "Close"}
    >
      {label}
    </button>
  );
};


export default Button;
