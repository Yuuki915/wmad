import React from "react";
// import AddIcon from "@mui/icons-material/Add";
// import List from "./List";

export default function Lists() {
  // const lists = ["Id", "Title", "status", "Url", "Created at", "Updated at"];

  const listsObj = [
    {
      id: "Id",
      title: "a",
      status: "s",
    },
    {},
  ];
  return (
    <div className="lists-container">
      <div className="lists">
        {listsObj.map((e) => (
          <div className="lists">
            <div>{e.id}</div>
            <div>{e.title}</div>
            <div>{e.status}</div>
          </div>
        ))}
        {/* {lists.map((list) => (
          <div className="list">{list}</div>

        ))} */}
        {/* <AddIcon fontSize="medium" color="primary" className="add-btn" /> */}
      </div>
      {/* <List /> */}
    </div>
  );
}
