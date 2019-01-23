import * as React from 'react';
import { graphql } from 'react-apollo';

const withQuery = query => Component => graphql(query)(
  class WithQuery extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: false,
        error: { graphQLErrors: [] },
        data: null,
        refetch: () => {},
      };

      this.query = this.query.bind(this);
    }

    async query(variables) {
      this.setState({ loading: true });

      try {
        const { data, refetch } = await query({ variables });

        this.setState({ data, refetch });
      } catch (error) {
        this.setState(error);
      }

      this.setState({ loading: false });
    }

    render() {
      const { props, state } = this;

      return <Component query={this.query} {...state} {...props} />;
    }
  },
);

export default withQuery;
