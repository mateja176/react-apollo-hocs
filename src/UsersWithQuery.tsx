import * as React from "react";
import users from "./apollo/queries/users";
import withQuery, { WithQueryProps } from "./apollo/withQuery";

type UsersData = { users: { username: string }[] };

type UserProps = WithQueryProps<UsersData> & { header: string };

const Users: React.SFC<UserProps> = ({
  query,
  loading,
  error,
  refetch,
  data: { users },
  header
}) => (
  <div>
    <h3>{header}</h3>
    <button onClick={() => query()}>Fetch</button>
    <button onClick={() => refetch()}>Refetch</button>
    {loading ? (
      <p>Loading</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {users.map(({ username }) => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    )}
  </div>
);

const UsersWithQuery = withQuery<UsersData>(users)(Users);

export default UsersWithQuery;
