const USER_TOKEN = 'user-token';

export class LocalStorageService {
  public static setUserToken(data: { token: string }) {
    localStorage.setItem(USER_TOKEN, JSON.stringify(data));
  }

  public static getUserToken() {
    return JSON.parse(localStorage.getItem(USER_TOKEN) || '');
  }
}