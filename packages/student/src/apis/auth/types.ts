export interface ILogin {
  account_id: string;
  password: string;
}

export interface IData {
  accessToken: string;
  refreshToken: string;
  accessExpiredAt: number;
  refreshExpiredAt: number;
}
