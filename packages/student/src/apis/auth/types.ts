export interface ILogin {
  account_id: string;
  password: string;
}

export interface IData {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
}
