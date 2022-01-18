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
      <img src={localStorage.getItem("imge")} />
      <h1>
        <p>{localStorage.getItem("category")}</p>
      </h1>
      <h1>
        <p>{localStorage.getItem("description")}</p>
      </h1>
    </div>
  );
};
export default Save;
