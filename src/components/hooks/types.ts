import {User} from "@/Api/models";

export type FilteredUser = Pick<User, '_id' | 'email' | 'role' | 'username' | 'fullName' | 'avatar'>


export interface UserResponse {
  status: string;
  data: {
    user: FilteredUser;
  };
}

export interface UserLoginResponse {
  status: string;
  token: string;
}
