export interface AccessToken {
  accessToken?: string;
  /** Format: date-time */
  expiresAt?: string;
}

export interface AuthTokenData {
  accessToken?: string;
  refreshToken?: string;
  /** Format: date-time */
  expiresAt?: string;
}

export interface AuthenticateUser {
  username: string;
  password: string;
}

export interface AvailableDevice {
  type: string;
  name: string;
}

export interface BulkCreateGroupMembership {
  group: string;
  members: string[];
}

export interface ChallengeMfaDeviceResponse {
  message: string | null;
}

export interface ChangePassword {
  oldPassword?: string;
  password: string;
}

export interface Country {
  name: string;
  flag: string;
}

export interface Currency {
  isoCode?: string;
  symbol?: string | null;
  country: Country;
}

export interface Device {
  id: number;
  type: string;
  name: string;
}

export interface EmailVerification {
  token: string;
}

export interface EnableMfaDeviceRequest {
  params?: {
    [key: string]: unknown;
  } | null;
}

export interface EnableMfaDeviceResponse {
  /** Format: uri */
  configUrl?: string | null;
}

export interface Error {
  message: string;
  /** @description Short code describing the error */
  code: string;
}

export interface ForgetPassword {
  /** Format: email */
  email: string;
}

export interface Friend {
  uid: string;
  name: string;
  invitationAccepted?: boolean;
}

export interface FriendOutstandingBalance {
  group: {
    [key: string]: string;
  };
  nonGroup?: {
    [key: string]: string;
  };
}

export interface FriendWithOutstandingBalance {
  uid: string;
  name: string;
  invitationAccepted?: boolean;
  outstandingBalances?: FriendOutstandingBalance;
  aggregatedOutstandingBalances?: {
    [key: string]: string;
  };
}

export interface GroupDetail {
  name: string;
  /** Format: uuid */
  publicId?: string;
  createdBy?: Friend;
  members: readonly Friend[];
}

export interface GroupMemberOutstandingBalance {
  friend: Friend;
  /** Format: decimal */
  amount: string;
}

export interface GroupWithOutstandingBalance {
  name: string;
  /** Format: uuid */
  publicId?: string;
  outstandingBalances?: {
    [key: string]: GroupMemberOutstandingBalance[];
  };
  aggregatedOutstandingBalances?: {
    [key: string]: string;
  };
}

export interface InviteFriend {
  /** Format: email */
  email: string;
  name: string;
}

export interface MfaToken {
  token: string;
}

export interface NotFound {
  detail: string;
}

export interface PaginatedFriendWithOutstandingBalanceList {
  /** @example 123 */
  count?: number;
  /**
   * Format: uri
   * @example http://api.example.org/accounts/?offset=400&limit=100
   */
  next?: string | null;
  /**
   * Format: uri
   * @example http://api.example.org/accounts/?offset=200&limit=100
   */
  previous?: string | null;
  results?: FriendWithOutstandingBalance[];
}

export interface PaginatedGroupWithOutstandingBalanceList {
  /** @example 123 */
  count?: number;
  /**
   * Format: uri
   * @example http://api.example.org/accounts/?offset=400&limit=100
   */
  next?: string | null;
  /**
   * Format: uri
   * @example http://api.example.org/accounts/?offset=200&limit=100
   */
  previous?: string | null;
  results?: GroupWithOutstandingBalance[];
}

export interface PatchedGroupDetail {
  name?: string;
  /** Format: uuid */
  publicId?: string;
  createdBy?: Friend;
  members?: readonly Friend[];
}

export interface PatchedUserProfile {
  /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  /** Format: email */
  email?: string | null;
  isVerified?: boolean;
}

export interface RefreshAccessToken {
  refreshToken?: string;
}

export interface ResetPassword {
  uid: string;
  token: string;
  password: string;
}

export interface UserDeviceInfo {
  availableDevices?: AvailableDevice[];
  configuredDevices?: Device[];
  authenticationMethods?: Device[];
}

export interface UserProfile {
  /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  /** Format: email */
  email?: string | null;
  isVerified?: boolean;
}

