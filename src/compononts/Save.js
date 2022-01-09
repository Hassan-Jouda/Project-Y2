import React from "react";

const Save = ({ auth }) => {
  if (!auth) {
    return (
      <div>
        <h2>logged بلاش نهكرك</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>save</h1>
    </div>
  );
};
export default Save;
