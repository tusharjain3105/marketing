export interface IUserPayload {
  id: string;
  email: string;
  name: string;
}

/**
 * Removes `undefined` from a given type `T`.
 */
export type NonUndefined<T> = T extends undefined ? never : T;

// Design Style Types
export type DesignStyle = "dashboard" | "admin";

export interface DesignStyleConfig {
  name: DesignStyle;
  label: string;
  description: string;
  preview: string;
}
