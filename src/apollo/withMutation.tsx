import * as React from "react";
import { Mutation, MutationResult } from "react-apollo";

const withMutation = (mutation: any) => <Props extends {}>(
  Component: React.ComponentType<Props & { mutation: any } & MutationResult>
) => (props: Props) => (
  <Mutation mutation={mutation}>
    {(_mutation, result) => (
      <Component mutation={_mutation} {...result} {...props} />
    )}
  </Mutation>
);

export default withMutation;
