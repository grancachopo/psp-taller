
export class Login {
  public username: String;
  public password: String;
  public rememberMe: boolean;

  constructor(username: String, password: String, rememberMe: boolean) {
    this.username = username;
    this.password = password;
    this.rememberMe = rememberMe;
  }

}
