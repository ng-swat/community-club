export interface User {
  pending: boolean;
  firstName: string;
  email: string;
  secureGroup: string;
}

export interface AppState {
  user: User;
}
