export interface IUserPayload {
  id: string;
  email: string;
  name: string;
}

/**
 * Removes `undefined` from a given type `T`.
 */
export type NonUndefined<T> = T extends undefined ? never : T;
