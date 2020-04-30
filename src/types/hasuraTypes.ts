export interface IHasuraActionRequestBody<Variables> {
  input: Variables;
  action: { name: string };
}

export interface IHasuraActionHeaders {
  "X-Hasura-User-Id": string;
  "X-Hasura-Role": string;
}

/**
 * Generated types from hasura. This file is manually copied from the hasura console
 * @generated
 */
/* tslint:disable */
/* eslint-disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};
