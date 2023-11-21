
export function gerarLink(id: string) {
  return `http://localhost:5173/catalogos/shared/${id}`
}

export type AppToken = {
  email: string,
};

export class TokenManager {
  static tokenKey = "token";

  static get(): AppToken | null {
    const tokenJson = sessionStorage.getItem(this.tokenKey);

    if (!tokenJson) return null;

    return JSON.parse(tokenJson);
  }

  static set(token: AppToken): void {
    sessionStorage.setItem(this.tokenKey, JSON.stringify(token));
  }
}
