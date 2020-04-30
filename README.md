# hasura-actions-server-boilerplate

Boilerplate Koa server for integrating hasura actions using `Koa` and `Typescript`. Also provides boilerplate code for using `graphql-request` to make requests back to hasura. Uses `apollo` for code genertion and `jest` for testing.

## Commands

```
npm run start // start a development server
npm run test // run tests using Jest
npm run build // build production version
```

## Basic Structure

```
── src
   ├── apis
   │   └── hasura
   │       ├── index.ts
   │       └── sendRequest.ts
   ├── routes
   │   ├── fooRoutes.ts
   │   └── index.ts
   ├── server.ts
   └── types
       ├── gqlTypes.ts
       └── hasuraTypes.ts
```
