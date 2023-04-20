export default class AuthStore {
  private static instance: AuthStore;
  public email: string = '';

  private constructor() {}

  public static getInstance(): AuthStore {
    if (!AuthStore.instance) {
      AuthStore.instance = new AuthStore();
    }

    return AuthStore.instance;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }
}
