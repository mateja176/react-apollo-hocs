import ApolloClient, { InMemoryCache } from "apollo-boost";

export default new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

export type Client = ApolloClient<InMemoryCache>;
