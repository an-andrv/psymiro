export class SignupInfo {
  name: string;
  email: string;
  username: string;
  password: string;
  roles: string[];

  constructor(name: string, email: string, username: string, password: string) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.roles = ['user'];
  }
}

export class AuthLoginInfo {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class JwtResponse {
  token: string;
  type: string;
  username: string;
  email: string;
  roles: string[];

  constructor(token: string,  type: string, username: string, email: string) {
    this.token = token;
    this.type = type;
    this.username = username;
    this.email = email;
    this.roles = [];
  }
}
