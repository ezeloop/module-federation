import React from "react";

const Button = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #DAE2F8, #D6A4A4)",
      }}
    >
      <button
        style={{
          backgroundColor: "#D6A4A4",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "25px",
        }}
      >
        Button from the other side
      </button>
    </div>
  );
};

export default Button;
