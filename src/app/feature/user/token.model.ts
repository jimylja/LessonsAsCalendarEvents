export interface TokenReqParams extends TokenAccessParams, TokenRefreshParams {
  client_id?: string;
  client_secret?: string;
  redirect_uri?: string;
  grant_type?: string;
}

export interface Token {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
  id_token: string;
}

export interface TokenAccessParams {
  code?: string;
  grant_type?: string;
}

export interface TokenRefreshParams {
  refresh_token?: string;
  grant_type?: string;
}
