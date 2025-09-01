export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AppState {
  auth: AuthState;
}