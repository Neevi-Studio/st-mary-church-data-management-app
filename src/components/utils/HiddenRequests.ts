import { LoginDto } from "@/Api";

export async function apiLoginUser(credentials: LoginDto) {
  try {
    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    if (!response.ok) {
      throw new Error('Not registered or Invalid Credentials');
    }
    return response;
  } catch (error) {
    throw error;
  }
}

export async function apiLogoutUser() {
  try {
    const response = await fetch(`/api/auth/logout`, {
      method: 'GET'
    });
    window.location.reload();
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
