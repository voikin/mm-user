export interface GetUserInfoDto {
  readonly userId: string;
  readonly fields: string[];
}

export type ReturnUserInfoDto = UserInfo[];

export interface UserInfo {
  readonly field: string;
  readonly value: any;
}
