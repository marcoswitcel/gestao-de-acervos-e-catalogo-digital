import { userStore } from "@/stores/user";

export function gerarLink(id: string) {
  return `${import.meta.env.VITE_BASE_URL}catalogos/shared/${id}`
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

export function persistOnStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function retrieveFromStorage<Type>(key: string): Type | null {
  const value = localStorage.getItem(key);

  if (value == null) return null;

  return JSON.parse(value);
}

export function *withIndex<Type>(iterable: Iterable<Type>): Iterable<[number, Type]> {
  let index = 0;
  for (const item of iterable) {
    yield [index, item];
    index++;
  }
}

export function *filterByTitle<Type>(iterable: Iterable<Type & { title: string }>, title: string): Iterable<Type> {
  for (const item of iterable) {
    if (title && title.trim()) {
      if (item.title.indexOf(title) > -1) {
        yield item;
      }
    } else {
      yield item;
    }
  }
}
