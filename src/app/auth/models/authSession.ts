export interface AuthSession {
  username: string;
  access_token: string;
  refresh_token: string;
  roles: string[];
  token_type: string;
  expires_in: number;
  start: Date;
}

export const SESSION_KEY = 'sx-imports_session';

export function readFromStore(): AuthSession | null {
  const raw = localStorage.getItem(SESSION_KEY);
  return JSON.parse(raw);
}
