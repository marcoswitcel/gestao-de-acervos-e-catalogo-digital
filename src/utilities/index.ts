import { userStore } from "@/stores/user";

export function gerarLink(id: string) {
  return `http://localhost:5173/catalogos/shared/${id}`
}

export type AppToken = {
  email: string,
};

export class TokenManager {
  static tokenKey = "token";

  static get(): AppToken | null {
    const tokenJson = localStorage.getItem(this.tokenKey);

    if (!tokenJson) return null;

    const token: AppToken = JSON.parse(tokenJson);
    userStore.value = token;
    return token;
  }

  static set(token: AppToken): void {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
    userStore.value = token;
  }

  static clear() {
    localStorage.removeItem(this.tokenKey);
    userStore.value = null; 
  }
}
