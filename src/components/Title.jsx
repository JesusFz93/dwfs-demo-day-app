import React from "react";

const Title = ({ titulo }) => {
  return (
    <header className="row col">
      <h1 className="text-center">{titulo}</h1>
    </header>
  );
};

export default Title;
