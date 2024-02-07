/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/authn/password": {
    /** Password Login */
    post: operations["PasswordLogin"];
  };
  "/api/authn/refresh": {
    /** Refresh Access Token */
    post: operations["RefreshAccessToken"];
  };
  "/api/currency/all": {
    /** List Currency */
    get: operations["ListCurrency"];
  };
  "/api/friend/{username}": {
    /** Retrieve Friend */
    get: operations["RetrieveFriend"];
  };
  "/api/friend/all": {
    /** List Friend */
    get: operations["ListFriend"];
    /** Create Friend */
    post: operations["CreateFriend"];
  };
  "/api/group/{group_uid}": {
    /** Retrieve Group */
    get: operations["RetrieveGroup"];
    /** Update Group */
    put: operations["UpdateGroup"];
    /** Partial Update Group */
    patch: operations["PartialUpdateGroup"];
  };
  "/api/group/{group_uid}/members/{member_uid}": {
    /** Destroy Group Membership */
    delete: operations["DestroyGroupMembership"];
  };
  "/api/group/all": {
    /** List Group */
    get: operations["ListGroup"];
    /** Create Group */
    post: operations["CreateGroup"];
  };
  "/api/group/members": {
    /** Create Group Membership */
    post: operations["CreateGroupMembership"];
  };
  "/api/mfa/challenge/{device_type}": {
    /** Challenge Mfa Device */
    post: operations["ChallengeMfaDevice"];
  };
  "/api/mfa/confirm/{device_type}": {
    /** Confirm Mfa Device */
    post: operations["ConfirmMfaDevice"];
  };
  "/api/mfa/device/{device_type}:{id}": {
    /** Destroy Mfa Device */
    delete: operations["DestroyMfaDevice"];
  };
  "/api/mfa/devices": {
    /** List Mfa Device */
    get: operations["ListMfaDevice"];
  };
  "/api/mfa/enable/{device_type}": {
    /** Enable Mfa Device */
    post: operations["EnableMfaDevice"];
  };
  "/api/mfa/static": {
    /** List Mfa Static Code */
    get: operations["ListMfaStaticCode"];
    /** Mfa Static Code */
    post: operations["MfaStaticCode"];
  };
  "/api/mfa/verify/{device_type}": {
    /** Verify Mfa Device */
    post: operations["VerifyMfaDevice"];
  };
  "/api/user/forget": {
    /** Forget Password */
    post: operations["ForgetPassword"];
  };
  "/api/user/password": {
    /** Change Password */
    post: operations["ChangePassword"];
  };
  "/api/user/profile": {
    /** Retrieve Profile */
    get: operations["RetrieveProfile"];
    /** Update Profile */
    put: operations["UpdateProfile"];
    /** Partial Update Profile */
    patch: operations["PartialUpdateProfile"];
  };
  "/api/user/reset": {
    /** Reset Password */
    post: operations["ResetPassword"];
  };
  "/api/user/verify-email": {
    /** Verify Email */
    post: operations["VerifyEmail"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AccessToken: import('./components/schemas.d.ts').AccessToken;
    AuthTokenData: import('./components/schemas.d.ts').AuthTokenData;
    AuthenticateUser: import('./components/schemas.d.ts').AuthenticateUser;
    AvailableDevice: import('./components/schemas.d.ts').AvailableDevice;
    BulkCreateGroupMembership: import('./components/schemas.d.ts').BulkCreateGroupMembership;
    ChallengeMfaDeviceResponse: import('./components/schemas.d.ts').ChallengeMfaDeviceResponse;
    ChangePassword: import('./components/schemas.d.ts').ChangePassword;
    Country: import('./components/schemas.d.ts').Country;
    Currency: import('./components/schemas.d.ts').Currency;
    Device: import('./components/schemas.d.ts').Device;
    EmailVerification: import('./components/schemas.d.ts').EmailVerification;
    EnableMfaDeviceRequest: import('./components/schemas.d.ts').EnableMfaDeviceRequest;
    EnableMfaDeviceResponse: import('./components/schemas.d.ts').EnableMfaDeviceResponse;
    Error: import('./components/schemas.d.ts').Error;
    ForgetPassword: import('./components/schemas.d.ts').ForgetPassword;
    Friend: import('./components/schemas.d.ts').Friend;
    FriendOutstandingBalance: import('./components/schemas.d.ts').FriendOutstandingBalance;
    FriendWithOutstandingBalance: import('./components/schemas.d.ts').FriendWithOutstandingBalance;
    GroupDetail: import('./components/schemas.d.ts').GroupDetail;
    GroupMemberOutstandingBalance: import('./components/schemas.d.ts').GroupMemberOutstandingBalance;
    GroupWithOutstandingBalance: import('./components/schemas.d.ts').GroupWithOutstandingBalance;
    InviteFriend: import('./components/schemas.d.ts').InviteFriend;
    MfaToken: import('./components/schemas.d.ts').MfaToken;
    NotFound: import('./components/schemas.d.ts').NotFound;
    PaginatedFriendWithOutstandingBalanceList: import('./components/schemas.d.ts').PaginatedFriendWithOutstandingBalanceList;
    PaginatedGroupWithOutstandingBalanceList: import('./components/schemas.d.ts').PaginatedGroupWithOutstandingBalanceList;
    PatchedGroupDetail: import('./components/schemas.d.ts').PatchedGroupDetail;
    PatchedUserProfile: import('./components/schemas.d.ts').PatchedUserProfile;
    RefreshAccessToken: import('./components/schemas.d.ts').RefreshAccessToken;
    ResetPassword: import('./components/schemas.d.ts').ResetPassword;
    UserDeviceInfo: import('./components/schemas.d.ts').UserDeviceInfo;
    UserProfile: import('./components/schemas.d.ts').UserProfile;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Password Login */
  PasswordLogin: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').AuthenticateUser;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
    };
  };
  /** Refresh Access Token */
  RefreshAccessToken: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').RefreshAccessToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AccessToken;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
    };
  };
  /** List Currency */
  ListCurrency: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').Currency[];
        };
      };
    };
  };
  /** Retrieve Friend */
  RetrieveFriend: {
    parameters: {
      path: {
        username: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').FriendWithOutstandingBalance;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Friend */
  ListFriend: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedFriendWithOutstandingBalanceList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Create Friend */
  CreateFriend: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').InviteFriend;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve Group */
  RetrieveGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').GroupDetail;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Update Group */
  UpdateGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').GroupDetail;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Partial Update Group */
  PartialUpdateGroup: {
    parameters: {
      path: {
        group_uid: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedGroupDetail;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Destroy Group Membership */
  DestroyGroupMembership: {
    parameters: {
      path: {
        group_uid: string;
        member_uid: string;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Group */
  ListGroup: {
    parameters: {
      query?: {
        /** @description Number of results to return per page. */
        limit?: number;
        /** @description The initial index from which to return the results. */
        offset?: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').PaginatedGroupWithOutstandingBalanceList;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Create Group */
  CreateGroup: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').GroupWithOutstandingBalance;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Create Group Membership */
  CreateGroupMembership: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').BulkCreateGroupMembership;
      };
    };
    responses: {
      /** @description No response body */
      201: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Challenge Mfa Device */
  ChallengeMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ChallengeMfaDeviceResponse;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Confirm Mfa Device */
  ConfirmMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').MfaToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').MfaToken;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Destroy Mfa Device */
  DestroyMfaDevice: {
    parameters: {
      path: {
        device_type: string;
        id: number;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Mfa Device */
  ListMfaDevice: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserDeviceInfo;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Enable Mfa Device */
  EnableMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').EnableMfaDeviceRequest;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').EnableMfaDeviceResponse;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** List Mfa Static Code */
  ListMfaStaticCode: {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Mfa Static Code */
  MfaStaticCode: {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Verify Mfa Device */
  VerifyMfaDevice: {
    parameters: {
      path: {
        device_type: string;
      };
    };
    requestBody: {
      content: {
        "application/json": import('./components/schemas').MfaToken;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      404: {
        content: {
          "application/json": import('./components/schemas').NotFound;
        };
      };
    };
  };
  /** Forget Password */
  ForgetPassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ForgetPassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ForgetPassword;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Change Password */
  ChangePassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ChangePassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').ChangePassword;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Retrieve Profile */
  RetrieveProfile: {
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').UserProfile;
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Update Profile */
  UpdateProfile: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').UserProfile;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Partial Update Profile */
  PartialUpdateProfile: {
    requestBody?: {
      content: {
        "application/json": import('./components/schemas').PatchedUserProfile;
      };
    };
    responses: {
      /** @description No response body */
      204: {
        content: never;
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Reset Password */
  ResetPassword: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').ResetPassword;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').AuthTokenData;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
  /** Verify Email */
  VerifyEmail: {
    requestBody: {
      content: {
        "application/json": import('./components/schemas').EmailVerification;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": import('./components/schemas').EmailVerification;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": {
            /** @description List of non-field errors */
            ""?: string[];
            [key: string]: string[] | undefined;
          };
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
      /** @description Request Forbidden */
      403: {
        content: {
          "application/json": import('./components/schemas').Error;
        };
      };
    };
  };
}
