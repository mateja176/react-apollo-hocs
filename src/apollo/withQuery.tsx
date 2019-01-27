import { ApolloQueryResult } from "apollo-boost";
import * as React from "react";
import { withApollo } from "react-apollo";
import client, { Client } from "./client";

const graphQLQuery = <Data, Variables = {}>(apolloClient: Client) => (
  query: any
) => <Props extends {}>(
  component: React.Component<Props, ApolloQueryResult<Data>>
) => async (variables?: Variables) => {
  component.setState({ loading: true });

  try {
    const result = await apolloClient.query<Data, Variables>({
      query,
      variables
    });

    component.setState(result);
  } catch (errors) {
    component.setState({ errors });
  }

  component.setState({ loading: false });
};

const withQuery = <Data, Variables>(query: any) => <Props extends {}>(
  Component: React.ComponentType<
    Props & ApolloQueryResult<Data> & { query: (variables?: Variables) => void }
  >
) =>
  withApollo(
    class WithQuery extends React.Component<Props & { client: Client }> {
      state: ApolloQueryResult<Data>;

      render() {
        const { props, state } = this;

        return (
          <Component
            {...props}
            {...state}
            query={graphQLQuery(client)(query)(this)}
          />
        );
      }
    }
  );

export default withQuery;
