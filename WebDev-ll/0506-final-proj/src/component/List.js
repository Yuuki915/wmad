import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useDispatch, useSelector } from "react-redux";

export default function List({
  addHandler,
  //   editHandler,
  //   deleteHandler,
  //   searchVal,
}) {
  const listTitles = [
    "ID",
    "Title",
    "Vol",
    "Status",
    "Released at",
    "New volume",
    <AddIcon onClick={() => addHandler()} />,
  ];
  const listInfo = useSelector((state) => state);

  return (
    <div>
      <table className="list-table">
        <thead>
          <tr>
            {listTitles.map((listTitle, key) => (
              <th key={key}>{listTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {listInfo
            .filter((val) => {
              if (searchVal === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchVal.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.vol}</td>
                <td>{val.status}</td>
                <td>{val.release}</td>
                <td>{val.newVol}</td>
                <td>
                  <EditIcon onClick={() => editHandler()}></EditIcon>
                </td>
                <td>
                  <DeleteForeverIcon onClick={() => deleteHandler(val.id)} />
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
}
