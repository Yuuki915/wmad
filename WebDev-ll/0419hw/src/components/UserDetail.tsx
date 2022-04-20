import React, { useState, useEffect, FC } from "react";
import { IUser } from "../model/IUser";

interface IState {
  loading: boolean;
  user: IUser[];
  errorMessage: string;
}

export const UserDetail = () => {
  const [userDetail] = useState<IState>({
    loading: false,
    user: [] as IUser[],
    errorMessage: "",
  });

  return (
    <>
      <h2>User Detail</h2>
      <table className="table text-center table-striped">
        <tbody>
          <tr key={userDetail.user.id}>
            <tr>
              <th>Id</th>
              <td>{userDetail.user.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{userDetail.user.name}</td>
            </tr>
            <tr>
              <th>UserName</th>
              <td>{userDetail.user.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userDetail.user.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <th>Street</th>
              <td>{userDetail.user.address.street}</td>
              <th>Suite</th>
              <td>{userDetail.user.address.suite}</td>
              <th>City</th>
              <td>{userDetail.user.address.city}</td>
              <th>ZipCode</th>
              <td>{userDetail.user.address.zipcode}</td>
              <th>Geo</th>
              <td>{userDetail.user.address.geo.lat}</td>
              <td>{userDetail.user.address.geo.lng}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{userDetail.user.phone}</td>
            </tr>
            <tr>
              <th>WebSite</th>
              <td>{userDetail.user.website}</td>
            </tr>
            <tr>
              <th>Company</th>
              <th>Name</th>
              <td>{userDetail.user.company.name}</td>
              <th>CatchPhrase</th>
              <td>{userDetail.user.company.catchPhrase}</td>
              <td>{userDetail.user.company.bs}</td>
            </tr>
          </tr>
        </tbody>
      </table>
    </>
  );
};
