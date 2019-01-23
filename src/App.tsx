import * as React from "react";
import "./App.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import UsersWithGraphql from "./UsersWithGraphql";
import UsersWithQuery from "./UsersWithQuery";

const client = new ApolloClient({
  uri: "https://json-placeholder-graphql.herokuapp.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <UsersWithGraphql header="Users with `graphql`" />
    <UsersWithQuery header="Users with `query`" />
  </ApolloProvider>
);

export default App;
