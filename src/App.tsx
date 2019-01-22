import * as React from "react";
import "./App.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Users from "./Users";

const client = new ApolloClient({
  uri: "https://json-placeholder-graphql.herokuapp.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Users />
  </ApolloProvider>
);

export default App;
