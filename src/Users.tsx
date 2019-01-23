import * as React from "react";

export type UsersProps = { header: string; users: { username: string }[] };

const Users: React.SFC<UsersProps> = ({ header, users }) => {
  return (
    <div>
      <h3>{header}</h3>
      <ul>
        {users.map(({ username }) => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
