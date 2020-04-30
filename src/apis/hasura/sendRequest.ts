import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";
import { Variables } from "graphql-request/dist/src/types";
import { ASTNode } from "graphql";

// Place your hasura configuration here
const hasuraBaseUrl = "",
  adminSecret = "";

const client = new GraphQLClient(`${hasuraBaseUrl}/v1/graphql`, {
  headers: {
    "x-hasura-admin-secret": adminSecret,
  },
});

export async function sendRequest<T>(queryAST: ASTNode, variables?: Variables) {
  const query = print(queryAST);
  return client.request<T>(query, variables).then(
    (response) => response,
    (error) => {
      throw error;
    }
  );
}
