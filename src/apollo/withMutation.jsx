import * as React from 'react';
import { Mutation } from 'react-apollo';

const withMutation = mutation => Component => props => (
  <Mutation mutation={mutation}>
    {(_mutation, result) => (
      // result = { loading, error, data }
      // mutation optionally takes in variables
      <Component mutation={_mutation} {...result} {...props} />
    )}
  </Mutation>
);

export default withMutation;
