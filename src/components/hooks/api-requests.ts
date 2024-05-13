import { FilteredUser, UserLoginResponse, UserResponse } from "./types";

const SERVER_ENDPOINT =
    process.env.NEXT_PUBLIC_SERVER_ENDPOINT || "http://localhost:3000";

const commonFetchOptions: Partial<RequestInit> = {
  headers: {
    "Content-Type": "application/json",
  },
};

class HttpError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

function handleError(
    isJson: boolean,
    data: any,
    response: Response,
    log = false
): Promise<never> {
  let errorMessage = data.message || response.statusText;
  if (isJson && data.errors) {
    if (log) console.error("error", JSON.stringify(data));
    errorMessage = JSON.stringify(data.errors);
  }
  if (log) console.error(errorMessage);
  return Promise.reject(new HttpError(errorMessage, response.status));
}

export async function handleResponse<T>(
    response: Response,
    log = false
): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    return handleError(isJson, data, response, log);
  }

  return data as T;
}

export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`/api/auth/login`, {
    ...commonFetchOptions,
    method: "POST",
    body: credentials,
  });

  const { token } = await handleResponse<UserLoginResponse>(response);
  return token;
}

export async function apiLogoutUser(): Promise<void> {
  const response = await fetch(`/api/auth/logout`, {
    ...commonFetchOptions,
    method: "GET",
  });

  return handleResponse<void>(response);
}

export async function apiGetAuthUser(
    token = localStorage.getItem("authToken")
): Promise<FilteredUser> {
  const headers = {
    ...commonFetchOptions.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(`/api/users/me`, {
    ...commonFetchOptions,
    method: "GET",
    headers,
  });

  const {
    data: { user },
  } = await handleResponse<UserResponse>(response);
  return user;
}
