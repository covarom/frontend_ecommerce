export interface UserInfo {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  address: string,
  phone: string,
  status: number,
  rode_id: number,
  created_at: Date,
  modified_at: Date,
}

export interface AccessToken {
  accessToken: string
}
