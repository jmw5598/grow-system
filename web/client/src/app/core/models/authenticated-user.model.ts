import { UserDetails } from './user-details.model';
export class AuthenticatedUser {
  constructor(
    public user: UserDetails,
    public accessToken: string
  ) {}
}