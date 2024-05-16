import { ConfirmFamilyDTO, GetPendingUsers, LoginDto, User } from "@/Api";

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

export async function apiGetFamilies() {
  try {
    const response = await fetch(`/api/families`, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetMatchingFamilyUsers(body: GetPendingUsers) {
  try {
    const response = await fetch(`/api/families/matching`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function apiConfirmFamily(body: ConfirmFamilyDTO) {
  try {
    const response = await fetch(`/api/families/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}
// export async function apiLogoutUser() {
//   try {
//     const response = await fetch(`/api/auth/logout`, {
//       method: 'GET'
//     });
//     window.location.reload();
//     return response;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }

// export async function apiLogoutUser() {
//   try {
//     const response = await fetch(`/api/auth/logout`, {
//       method: 'GET'
//     });
//     window.location.reload();
//     return response;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }
