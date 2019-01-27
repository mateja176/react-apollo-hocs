import * as React from "react";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

const withMutation = <Data, Variables>(mutation: any) => <Props extends {}>(
  Component: React.ComponentType<
    Props & { mutate: MutationFn<Data, Variables> } & MutationResult<Data>
  >
) => (props: Props) => (
  <Mutation<Data, Variables> mutation={mutation}>
    {(mutate, result) => <Component {...props} {...result} mutate={mutate} />}
  </Mutation>
);

export default withMutation;
