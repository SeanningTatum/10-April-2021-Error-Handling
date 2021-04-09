import type { Response } from '../Response';
import type { User } from '~/models/User';

export interface LoginPayload {
  email: string;
  username: string;
}

export type LoginResponse = Response<User>;
