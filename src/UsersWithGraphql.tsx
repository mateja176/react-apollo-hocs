import { graphql } from "react-apollo";
import Users from "./Users";
import usersQuery from "./apollo/queries/users";

const UsersWithGraphql = graphql<
  { header: string },
  { users: { username: string }[] }
>(usersQuery)(Users);

export default UsersWithGraphql;
