import { ConfirmFamilyDTO, GetPendingUsers, LoginDto, UpdatePendingFamilyData, UpdatePendingUserDto, UpdateSemiConfirmedFamilyData, UpdateSemiConfirmedUser, User } from "@/Api";

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

export async function apiGetConfirmedFamilies() {
  try {
    const response = await fetch(`/api/families/confirmed`, {
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

export async function apiGetSemiConfirmedFamilies() {
  try {
    const response = await fetch(`/api/families/semiconfirmed`, {
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

export async function apiSemiConfirmFamily(body: ConfirmFamilyDTO) {
  try {
    const response = await fetch(`/api/families/semi-confirm`, {
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

export async function apiEditPendingFamilyMember(familyId: string, studentId: number, body: UpdatePendingUserDto) {
  try {
    const response = await fetch(`/api/families/edit-pending`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, studentId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditPendingFamilyAddress(familyId: string, body: UpdatePendingFamilyData) {
  try {
    const response = await fetch(`/api/families/edit-pending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditFamilyMember(familyId: string, studentId: number, body: UpdateSemiConfirmedUser) {
  try {
    const response = await fetch(`/api/families/edit-semiconfirmed`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, studentId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiEditFamilyAddressAndLastName(familyId: string, body: UpdateSemiConfirmedFamilyData) {
  try {
    const response = await fetch(`/api/families/edit-semiconfirmed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ familyId, body })
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiConfirmFamily(familyId: string) {
  try {
    const response = await fetch(`/api/families/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(familyId)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json()
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function apiGetMyProfile() {
  try {
    const response = await fetch(`/api/mine`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
