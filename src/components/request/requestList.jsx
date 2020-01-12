import React, { useState } from "react";

function Show() {
  const friendList = [
    { id: 1, name: "a dog" },
    { id: 2, name: "dog" },
    { id: 3, name: "cat" }
  ];

  return (
    <div className="requests">
      {friendList.map(friend => {
        return request;
      })}
      <h1> friends List</h1>
    </div>
  );
}

export default Show;
