import * as React from "react";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

const withMutation = <Data, Variables>(mutation: any) => <Props extends {}>(
  Component: React.ComponentType<
    Props & { mutation: MutationFn<Data, Variables> } & MutationResult<Data>
  >
) => (props: Props) => (
  <Mutation<Data, Variables> mutation={mutation}>
    {(_mutation, result) => (
      <Component {...props} {...result} mutation={_mutation} />
    )}
  </Mutation>
);

export default withMutation;
