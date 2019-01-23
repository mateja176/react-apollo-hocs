import * as React from "react";
import { Mutation, MutationResult } from "react-apollo";

const withMutation = <Variables, Data>(mutation: any) => <Props extends {}>(
  Component: React.ComponentType<
    Props & { mutation: any } & MutationResult<Data>
  >
) => (props: Props) => (
  <Mutation<Data, Variables> mutation={mutation}>
    {(_mutation, result) => (
      <Component mutation={_mutation} {...result} {...props} />
    )}
  </Mutation>
);

export default withMutation;
