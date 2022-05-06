import React from "react";

export default function List() {
  const listsObj = [
    {
      id: "Id",
      title: "a",
      status: "s",
    },
    {},
  ];
  return (
    <div>
      {listsObj.map((e) => (
        <div className="lists">
          <div>{e.id}</div>
          <div>{e.title}</div>
          <div>{e.status}</div>
        </div>
      ))}
    </div>
  );
}
