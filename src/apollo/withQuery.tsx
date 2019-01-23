import * as React from "react";
// QueryResult contains additional properties
import { graphql, QueryResult } from "react-apollo";

export type WithQueryState<Data, Variables = {}> = {
  loading: boolean;
  error: { graphQLErrors: { message: string }[] };
  data: Data;
  refetch: (variables?: Variables) => void;
};

export type WithQueryProps<Data, Variables = {}> = WithQueryState<
  Data,
  Variables
> & { query: (variables?: Variables) => void };

const withQuery = <Data, Variables = {}>(query: any) => <Props extends {}>(
  Component: React.ComponentType<Props & WithQueryProps<Data, Variables>>
) =>
  graphql<Props, Data, Variables>(query)(
    class WithQuery extends React.Component<
      Props,
      WithQueryState<Data, Variables>
    > {
      state = {
        loading: false,
        error: null,
        data: null,
        refetch: () => {}
      };

      query = async (variables?: Variables) => {
        this.setState({ loading: true });

        try {
          const { data, refetch } = await query({ variables });

          this.setState({ data, refetch });
        } catch (error) {
          this.setState(error);
        }

        this.setState({ loading: false });
      };

      render() {
        const { props, state } = this;

        return <Component query={this.query} {...state} {...props} />;
      }
    }
  );

export default withQuery;
